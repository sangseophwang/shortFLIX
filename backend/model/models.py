# DB 관련 코드
from route import db

class User(db.Model):
    
    __tablename__ = 'google_user'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(30), unique=True, nullable=False)
    user_name = db.Column(db.String(30), nullable=False)
    preferences = db.Column(db.JSON, nullable=True)
    # 배열 형태로 insert해야함
    likes_list = db.Column(db.JSON, nullable=True)
    latest_reviews_list = db.Column(db.JSON, nullable=True)
    
    # __init__을 쓰면 다른 곳에서 인스턴스에 인자값을 넘길 수 있다
    def __init__(self, email, user_name):
        self.email = email
        self.user_name = user_name

class Content(db.Model):
    __tablename__ = 'media_content'
    id = db.Column(db.Integer, primary_key=True)
    thumbnail = db.Column(db.Text(), nullable=False)
    title = db.Column(db.Text(), nullable=False)
    rating = db.Column(db.Float(), nullable=False)
    genre = db.Column(db.Text(), nullable=True)
    running_time = db.Column(db.Text(), nullable=True)
    synop = db.Column(db.Text(), nullable=True)

