from flask import jsonify, session
from model.models import *

def like_contents(content_id, user_email):
    user = User.query.filter_by(email = user_email).first()
    content = Content.query.filter_by(id = content_id).first()

    now = [] 
    now.append({
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

    if user.likes_list == None:
        user.likes_list = []
        user.likes_list = [] + now
    else:
        prev = user.likes_list
        if prev:
            for i in range(len(prev)):
                for j in range(len(prev)):
                    if now[0]['id'] == prev[j]['id']:
                        # '/detail'로 리다이렉트 예정
                        return '이미 좋아합니다.'
                    
                user.likes_list = prev + now
                content.like += 1
        else:
            user.likes_list = prev + now
            content.like += 1
    db.session.add(user)
    db.session.commit()
    db.session.close()
    
    # '/detail'로 리다이렉트 예정
    return '좋아요 +1'