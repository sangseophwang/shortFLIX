from flask import jsonify, session
from model.models import *
import json

def survey_results(request_data):   
    user = User.query.filter_by(email = session['email']).first()
    user.preferences=request_data

    db.session.commit()
    db.session.close()
    return {'201': '조사 결과 수정/저장 완료'}
