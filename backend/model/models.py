# DB 관련 코드
from view import db

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
    def __init__(self, email, user_name, preferences, likes_list, latest_reviews_list):
        self.email = email
        self.user_name = user_name
        self.preferences = preferences
        self.likes_list = likes_list
        self.likes_list = latest_reviews_list
