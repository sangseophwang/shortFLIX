from flask import jsonify, request, session
from model.models import *
import bcrypt

def login(request_data):       
    user_email = request_data['email']
    user_pwd = request_data['pwd'].encode('utf-8')
    data = User.query.filter_by(email = user_email).first()

    if data is None:
        return "사용자 정보가 없습니다"
    else:
        check_password = bcrypt.checkpw(user_pwd, data.pwd.encode('utf-8'))
        if check_password:
            session['login'] = data.email
            return "로그인 성공"
        else:
            return "비밀번호가 일치하지 않습니다"
    return None

