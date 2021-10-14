from flask import jsonify
from model.models import *
import bcrypt

def get_user_info(email):       
    user_email = email
    data = User.query.filter_by(email = user_email).first()
    if data:
        user_info = {
            'id' : data.id,
            'email' : data.email,
            'user_name' : data.user_name,
            'preferences'  : data.preferences,
            'likes_list' : data.likes_list,
            'latest_reviews_list' : data.latest_reviews_list
        }
        return jsonify(user_info)
    else:
        return '로그인이 필요합니다.'



