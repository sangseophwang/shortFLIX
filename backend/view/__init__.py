from flask import Flask, render_template, session, request, url_for, redirect, flash, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from authlib.integrations.flask_client import OAuth
from flask_cors import CORS

db = SQLAlchemy()

def create_app():
  #Flask 객체 인스턴스 생성
  app = Flask(__name__)
  CORS(app)
  app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:root@localhost:3306/reviews_db" 
  app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
  app.config['SECRET_KEY'] = "dev1234"
  app.config['JSON_AS_ASCII'] = False
  
  db.init_app(app)
  migrate = Migrate(app, db)
  migrate.init_app(app, db)
  
  from model import models

  from view import login_route, content_route
  app.register_blueprint(login_route.bp)
  app.register_blueprint(content_route.bp)
  

  return app