from flask import jsonify, request, session
from model.models import *
import bcrypt

def login(request_data):       
    user_email = request_data['email']
    user_pwd = request_data['password'].encode('utf-8')
    data = User.query.filter_by(email = user_email).first()

    if data is None:
        return "Record not found", 400
    else:
        check_password = bcrypt.checkpw(user_pwd, data.pwd.encode('utf-8'))
        if check_password:
            session['login'] = data.email
            return data.user_name
        else:
            return "Record not found", 400

