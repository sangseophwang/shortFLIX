from flask import request
from model.models import *
import bcrypt

def register_user():
    if request.method == 'POST':
        user_info = request.get_json()
        pwd = user_info['password']
        hash_pwd = (bcrypt.hashpw(pwd.encode('UTF-8'), bcrypt.gensalt())).decode('utf-8')
        query = User(user_info['email'], user_info['username'], hash_pwd)
        db.session.add(query)
        db.session.commit()
        db.session.close()
        return 'Success'