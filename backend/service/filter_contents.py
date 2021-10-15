import numpy as np
import pandas as pd
from flask import jsonify
from model.models import *

from ast import literal_eval
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def filter_content(request_data):
    user_email = request_data['email']
    data = User.query.filter_by(email = user_email).first()
    result = data.preferences

    # result = {"year": [ "2000년-2009년", "2010년-2019년", "2020년 이후"], "genre": ["서부", "액션", "범죄", "Made in Europe", "역사", "Reality TV"], "keyword": ["집행", "시리즈", "인류", "형제", "호기심", "거인"], "contentType": ["영화", "드라마", "애니메이션"]}

    movies = pd.read_csv('justwatch_year.csv', encoding='cp949')

    # running_time -> 시,분 계산
    for i in range(len(movies['running_time'])):
        time = movies['running_time'][i]
        time = time.replace('시간', '*60').replace(' ','+').replace('분', '')
        movies['running_time'][i] = eval(time)

    # 영화 종류 분류
    kind = []
    for i in range(len(movies)):
        if '애니메이션' in movies['genre'][i]:
            kind.append('애니메이션')
        elif '다큐멘터리' in movies['genre'][i]: 
            kind.append('다큐멘터리')
        elif movies['running_time'][i] <= 90:
            kind.append('드라마')
        else: # 영화
            kind.append('영화')
    movies['kind'] = kind

    # 리스트를 문자열로
    movies['genre'] = movies['genre'].apply(literal_eval)
    movies['genre'] = movies['genre'].apply(lambda x: [i for i in list(x)]).apply(lambda x : ' '.join(x))
    movies['key_words'] = movies['key_words'].apply(literal_eval)
    movies['key_words'] = movies['key_words'].apply(lambda x: [i for i in list(x)]).apply(lambda x : ' '.join(x))
    
    #연도 계산
    for i in range(len(movies['year'])): 
        if movies['year'][i] >= 2020:
            # print(movies['year'][i],movies['title'][i])
            movies['year'][i] = '2020년 이후'
        elif movies['year'][i] >= 2010:
            movies['year'][i] = '2010년-2019년'
        elif movies['year'][i] >= 2000:
            movies['year'][i] = '2000년-2009년'
        else:
            movies['year'][i] = '2000년 이전'
    

    # 필요없는 열 삭제 # 필요할 시 없어도 되는 코드
    movies.drop('img', axis=1, inplace = True)
    movies.drop('running_time', axis=1, inplace = True)
    movies.drop('synop', axis=1, inplace = True)
    movies.drop(['Unnamed: 0'], axis = 1, inplace = True)

    # 딕셔너리 이름이 result라고 하면
    movies.loc[795] = ['target', 0.0, ' '.join(result['genre']),'year', ' '.join(result['keyword']), 'kind'] 
    # 입력받은 값
    # movie의 마지막행 = [제목대신 'target', 임의의 평점 0점, 입력받은 장르,  입력받은 키워드]

    # 장르와 관련된 유사도 
    count_vect = CountVectorizer(min_df=0, ngram_range=(1,2))
    genre_mat_g = count_vect.fit_transform(movies['genre'])
    genre_sim_g = cosine_similarity(genre_mat_g, genre_mat_g)

    # 키워드와 관련된 유사도
    genre_mat_k = count_vect.fit_transform(movies['key_words'])
    genre_sim_k = cosine_similarity(genre_mat_k, genre_mat_k)

    def find_sim_movie(movies, sim_matrix, sim_matrix_k, title_name):
        title_index = movies[movies['title']==title_name].index.values

        movies['similarity_g'] = sim_matrix[title_index, :].reshape(-1,1) # 장르 유사도 계산
        movies['similarity_k'] = sim_matrix_k[title_index, :].reshape(-1,1) # 키워드 유사도 계산
        movies['similarity'] = movies['similarity_g'] + movies['similarity_k'] # 두 결과를 합친 값

        temp = movies.sort_values(by=['similarity'], ascending=False) # 유사도 기준 정렬
        temp = temp[temp.index.values != title_index] # 자기자신 제거

        final_index = temp.index.values[ : ] #결과 30개에 대한 index

        return movies.iloc[final_index] 

    similar_movies = find_sim_movie(movies, genre_sim_g ,genre_sim_k, 'target')
   
    # 영화 종류
    similar_movies = similar_movies[similar_movies['kind'].apply(lambda x : x in result['contentType'])]
    # 연도
    similar_movies = similar_movies[similar_movies['year'].apply(lambda x : x in result['year'])]

    similar_movies = similar_movies [:32]
    # 결과 값
    idx_similar_movies = similar_movies[['title', 'genre', 'similarity']].index
    # idx_similar_movies = similar_movies.index.values()

    # DB에 있는 id값과 맞추기 위한 인덱스 + 2
    # for i in idx_similar_movies:
        # print(i+2)
    idx_similar_movies = [i+1 for i in idx_similar_movies]
    print(idx_similar_movies)
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
