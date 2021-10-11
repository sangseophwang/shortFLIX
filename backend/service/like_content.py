from flask import jsonify, session
from model.models import *

def like_contents(content_id):
    user = User.query.filter_by(email = session['email']).first()
    content = Content.query.filter_by(id = content_id).first()

    if user.likes_list == None:
        user.likes_list = []
    else:
        prev = user.likes_list
        now = [] 
        now.append({
            'id' : content.id,
            'thumbnail' : content.thumbnail,
            'title' : content.title,
            'rating' : content.rating,
            'genre' : content.genre.replace("'",""),
            'running_time' : content.running_time,
            'synop' : content.synop
        })
        # print(prev, now)
        if prev:
            for i in range(len(prev)):
                for j in range(len(prev)):
                    if now[0]['id'] == prev[j]['id']:
                        # '/detail'로 리다이렉트 예정
                        return 'False'
                    
                user.likes_list = prev + now
        else:
            user.likes_list = prev + now

    db.session.add(user)
    db.session.commit()
    # db.session.close()
    user_info = {
        'id' :  user.id,
        'email' : user.email,
        'user_name': user.user_name,
        'preferences': user.preferences,
        'likes_list' : user.likes_list,
        'latest_reviews_list' : user.latest_reviews_list
        }
    # print(user_info)
    # '/detail'로 리다이렉트 예정
    return 'True'