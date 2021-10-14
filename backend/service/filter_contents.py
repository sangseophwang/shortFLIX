import numpy as np
import pandas as pd

import matplotlib as mpl
import matplotlib.pyplot as plt
import seaborn as sns

from ast import literal_eval
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

movies = pd.read_csv('sample-project/backend/justwatch_year.csv', encoding='cp949')

# 필요없는 열 삭제 # 필요할 시 없어도 되는 코드
movies.drop('img', axis=1, inplace = True)
movies.drop('running_time', axis=1, inplace = True)
movies.drop('year', axis=1, inplace = True)
movies.drop('synop', axis=1, inplace = True)

# 리스트를 문자열로
movies['genre'] = movies['genre'].apply(literal_eval)
movies['genre'] = movies['genre'].apply(lambda x: [i for i in list(x)]).apply(lambda x : ' '.join(x))
movies['key_words'] = movies['key_words'].apply(literal_eval)
movies['key_words'] = movies['key_words'].apply(lambda x: [i for i in list(x)]).apply(lambda x : ' '.join(x))

movies.loc[-1] = ['target', 0.0, '드라마 역사 로맨스','드라마 인생 소년'] # 입력받은 값
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
similar_movies[['title', 'genre', 'similarity']].index
idx_similar_movies = similar_movies[['title', 'genre', 'similarity']].index

# DB에 있는 id값과 맞추기 위한 인덱스 + 1
for i in idx_similar_movies:
    print(i + 1)

