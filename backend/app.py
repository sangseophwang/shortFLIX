from flask import Flask, render_template, session, request, url_for, redirect, flash, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

#Flask 객체 인스턴스 생성
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:root@localhost:3306/reviews_db" 
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)
db.init_app(app)
migrate = Migrate(app, db)
migrate.init_app(app, db)
from models import *

@app.route('/') # 접속하는 url
def index():
  return 'hello flask'

if __name__=="__main__":
  app.run(debug=True)