from flask import render_template, Blueprint

# from view import create_app
from service.google_login import GoogleLogin

bp = Blueprint('google',__name__, url_prefix='/')
# app = create_app()

# Default route
@bp.route('/')
def index():
  return render_template('login.html')

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
