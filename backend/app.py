from flask import Flask, render_template, session, request, url_for, redirect, flash, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from authlib.integrations.flask_client import OAuth


#Flask 객체 인스턴스 생성
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:root@localhost:3306/reviews_db" 
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)
db.init_app(app)
migrate = Migrate(app, db)
migrate.init_app(app, db)
from models import *

oauth = OAuth(app)

app.config['SECRET_KEY'] = "dev1234"
app.config['GOOGLE_CLIENT_ID'] = "5929487668-clkq5dmc730psab18leaflnb86eakoog.apps.googleusercontent.com"
app.config['GOOGLE_CLIENT_SECRET'] = "FmKr86bAntiYJI7z2HDoFvKr"

google = oauth.register(
  name = 'google',
  client_id = app.config["GOOGLE_CLIENT_ID"],
  client_secret = app.config["GOOGLE_CLIENT_SECRET"],
  access_token_url = 'https://accounts.google.com/o/oauth2/token',
  access_token_params = None,
  authorize_url = 'https://accounts.google.com/o/oauth2/auth',
  authorize_params = None,
  api_base_url = 'https://www.googleapis.com/oauth2/v1/',
  userinfo_endpoint = 'https://openidconnect.googleapis.com/v1/userinfo',  # This is only needed if using openId to fetch user info
  client_kwargs = {'scope': 'openid email profile'},
)

# Default route
@app.route('/')
def index():
  return render_template('login.html')


# Google login route
@app.route('/login/google')
def google_login():
  google = oauth.create_client('google')
  redirect_uri = url_for('google_authorize', _external=True)
  return google.authorize_redirect(redirect_uri)


# Google authorize route
@app.route('/login/google/authorize')
def google_authorize():
  google = oauth.create_client('google')
  token = google.authorize_access_token()
  resp = google.get('userinfo').json()
  print(f"\n{resp}\n")
  return "You are successfully signed in using google"


# @app.route('/') # 접속하는 url
# def index():
  # return 'hello flask'

if __name__=="__main__":
  app.run(debug=True)