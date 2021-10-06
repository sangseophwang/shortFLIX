from flask import Flask, render_template, session, request, url_for, redirect, flash, jsonify, Blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from authlib.integrations.flask_client import OAuth
from model.models import *

class GoogleLogin:

    app = Flask(__name__)
    oauth = OAuth(app)
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

    def login(self):
        google = self.oauth.create_client('google')
        redirect_uri = url_for('google.authorize', _external=True)
        return google.authorize_redirect(redirect_uri)

    def authorize(self):
        google = self.oauth.create_client('google')
        token = google.authorize_access_token()
        resp = google.get('userinfo').json()
        user_info = User.query.filter_by(email = resp['email']).first()
        if user_info:
            return '디비에 있음'
        else:

            query = User(resp['email'], resp['name'])
            # query.preferences = resp
            # query.likes_list = resp
            # query.latest_reviews_list = resp

            db.session.add(query)
            db.session.commit()
            db.session.close()
            print(f"\n{resp}\n")
            return resp