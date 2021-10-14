from flask import jsonify, session
from model.models import *
import json

def survey_results(request_data):   
    user_email = request_data['email']
    result = request_data['result']

    user = User.query.filter_by(email = user_email).first()
    user.preferences = result

    db.session.commit()
    db.session.close()
    return {'201': '조사 결과 수정/저장 완료'}
