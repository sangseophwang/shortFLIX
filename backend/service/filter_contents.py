import numpy as np
import pandas as pd
from flask import jsonify
from model.models import *
# import matplotlib as mpl
# import matplotlib.pyplot as plt
# import seaborn as sns

from ast import literal_eval
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def filter_content(request_data):
    # user_email = request_data['email']
    # data = User.query.filter_by(email = user_email).first()
    # result = data.preferences
    # print(result)
    # print(result['keyword'])
    movies = pd.read_csv('justwatch_year.csv', encoding='cp949')
    result = request_data
    # running_time -> 시,분 계산
    for i in range(len(movies['running_time'])):
        time = movies['running_time'][i]
        time = time.replace('시간', '*60').replace(' ','+').replace('분', '')
        movies['running_time'][i] = eval(time)

    kind = []
    for i in range(len(movies)):
        if (movies['running_time'][i] <= 90) & ('드라마' in movies['genre'][i]):
            kind.append('드라마')
        elif '다큐멘터리' in movies['genre'][i]: 
            kind.append('다큐멘터리')
        elif '애니메이션' in movies['genre'][i]:
            kind.append('애니메이션')
        else: # 영화
            kind.append('영화')
    movies['kind'] = kind

    # 리스트를 문자열로
    movies['genre'] = movies['genre'].apply(literal_eval)
    movies['genre'] = movies['genre'].apply(lambda x: [i for i in list(x)]).apply(lambda x : ' '.join(x))
    movies['key_words'] = movies['key_words'].apply(literal_eval)
    movies['key_words'] = movies['key_words'].apply(lambda x: [i for i in list(x)]).apply(lambda x : ' '.join(x))

    # 영화 종류
    movies = movies[movies['kind'].apply(lambda x : x in result['contentType'])]
    # for c in range(len(movies)):
    #     if c == '드라마':
    #         movies = movies[(movies['running_time'] <= 90) & (movies['genre'].str.contains('드라마'))]
    #     elif c == '다큐멘터리': 
    #         movies = movies[movies['genre'].str.contains('다큐멘터리')]
    #     elif c == '애니메이션':
    #         movies = movies[movies['genre'].str.contains('애니메이션')]
    #     else: # 영화
    #         movies = movies[movies['running_time'] > 90]

    #연도 계산
    for i in range(len(movies['year'])): 
        if movies['year'][i] >= 2020:
            movies['year'][i] = '2020년 이후'
        elif movies['year'][i] >= 2010:
            movies['year'][i] = '2010년-2019년'
        elif movies['year'][i] >= 2000:
            movies['year'][i] = '2000년-2009년'
        else:
            movies['year'][i] = '2000년 이전'
    #     elif movies['year'][i] >= 1990:
    #         movies['year'][i] = '1990s'
    #     elif movies['year'][i] >= 1980:
    #         movies['year'][i] = '1980s'
    #     elif movies['year'][i] >= 1970:
    #         movies['year'][i] = '1970s'
    #     else: #1960s
    #         movies['year'][i] = '1960s'

    # 연도
    movies = movies[movies['year'].apply(lambda x : x in result['year'])]

    # 필요없는 열 삭제 # 필요할 시 없어도 되는 코드
    movies.drop('img', axis=1, inplace = True)
    movies.drop('running_time', axis=1, inplace = True)
    movies.drop('year', axis=1, inplace = True)
    movies.drop('synop', axis=1, inplace = True)
    movies.drop('kind', axis=1, inplace = True)

    # 딕셔너리 이름이 result라고 하면
    movies.loc[-1] = [ 'target', 0.0, ' '.join(result['genre']), ' '.join(result['keyword'])] # 입력받은 값
    # movie의 마지막행 = [제목대신 'target', 임의의 평점 0점, 입력받은 장르,  입력받은 키워드]

    # 장르와 관련된 유사도 
    count_vect = CountVectorizer(min_df=0, ngram_range=(1,2))
    genre_mat_g = count_vect.fit_transform(movies['genre'])
    genre_sim_g = cosine_similarity(genre_mat_g, genre_mat_g)

    # 키워드와 관련된 유사도
    genre_mat_k = count_vect.fit_transform(movies['key_words'])
    genre_sim_k = cosine_similarity(genre_mat_k, genre_mat_k)

    def find_sim_movie(movies, sim_matrix, sim_matrix_k, title_name, top=30):
        title_index = movies[movies['title']==title_name].index.values

        movies['similarity_g'] = sim_matrix[title_index, :].reshape(-1,1) # 장르 유사도 계산
        movies['similarity_k'] = sim_matrix_k[title_index, :].reshape(-1,1) # 키워드 유사도 계산
        movies['similarity'] = movies['similarity_g'] + movies['similarity_k'] # 두 결과를 합친 값

        temp = movies.sort_values(by=['similarity'], ascending=False) # 유사도 기준 정렬
        temp = temp[temp.index.values != title_index] # 자기자신 제거

        final_index = temp.index.values[ : top] #결과 30개에 대한 index

        return movies.iloc[final_index] # 점수로 정렬 시.sort_values('score', ascending=False)

    similar_movies = find_sim_movie(movies, genre_sim_g ,genre_sim_k, 'target', 10)
    # 결과 값
    similar_movies[['title', 'genre', 'similarity']]
    idx_similar_movies = similar_movies[['title', 'genre', 'similarity']].index

    # DB에 있는 id값과 맞추기 위한 인덱스 + 2
    # for i in idx_similar_movies:
        # print(i+2)
    idx_similar_movies = [i+2 for i in idx_similar_movies]

    contents_dict = {}
    contents_list = []
    for item in idx_similar_movies:
        content = Content.query.filter_by(id = item).first()
        contents_list.append({
            'id' : content.id,
            'thumbnail' : content.thumbnail,
            'title' : content.title,
            'rating' : content.rating,
            'genre' : content.genre.replace("'",""),
            'running_time' : content.running_time,
            'synop' : content.synop,
            'like':content.like,
            'key_words' : content.key_words,
            'year' : content.year
            })
    contents_dict['data'] = contents_list
    
    return jsonify(contents_dict)

