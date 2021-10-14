from flask import jsonify, request
import json
from model.models import *

def recent_reviews(request_data):
    user_email = request_data['email']
    url_view = request_data['url']
    data = User.query.filter_by(email = user_email).first()
    reviews = json.loads(data.latest_reviews_list)['urls']

    view_list = []
    viewed_dict = {}
    if reviews is None:
        view_list.append(url_view)
    else:
        view_list.append(url_view)
        for i in reviews:
            view_list.append(i)
        if len(view_list) >= 11:
            del view_list[-1]
        else:
            pass

    viewed_dict['urls'] = view_list
    data.latest_reviews_list = json.dumps(viewed_dict)

    db.session.commit()
    db.session.close()

    return "url 저장 완료"
