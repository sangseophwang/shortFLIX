from flask import Blueprint
from service.google_login import GoogleLogin

bp = Blueprint('google',__name__, url_prefix='/')

# Google login route
@bp.route('/login/google')
def login():
  g = GoogleLogin()
  return g.login()

# Google authorize route
@bp.route('/login/google/authorize')
def authorize():
  g = GoogleLogin()
  return g.authorize()
