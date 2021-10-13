from flask import request
from model.models import *

def register_user():
    if request.method == 'POST':
        user_info = request.get_json()
        query = User(user_info['email'], user_info['username'], user_info['password'] )
        db.session.add(query)
        db.session.commit()
        db.session.close()
        return 'Success'