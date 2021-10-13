from flask import jsonify, request
from model.models import *

def register_user():
    user_info = request.json()
    print(user_info)
    return user_info