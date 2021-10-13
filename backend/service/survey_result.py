from flask import jsonify, session
from model.models import *
import json

def survey_results(request_data):   
    user = User.query.filter_by(email = session['email']).first()
    user.preferences=request_data['preferences']

    db.session.commit()
    db.session.close()
    return {'201': 'preferences 수정/저장 완료'}
