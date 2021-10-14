from flask import Blueprint, request
import json
from service.login import login

bp = Blueprint('login',__name__)

# Default route
@bp.route('/login', methods=['POST'])
def login_user():
  request_data = json.loads(request.data) 
  return login(request_data)





# from service.google_login import GoogleLogin

# bp = Blueprint('google',__name__, url_prefix='/')

# # Google login route
# @bp.route('/login/google')
# def login():
#   g = GoogleLogin()
#   return g.login()

# # Google authorize route
# @bp.route('/login/google/authorize')
# def authorize():
#   g = GoogleLogin()
#   return g.authorize()
