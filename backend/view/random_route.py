from flask import Flask, render_template, session, request, url_for, redirect, flash, jsonify, Blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from authlib.integrations.flask_client import OAuth
from service.rand_recommend import RandRecommend

bp = Blueprint('random',__name__)
# app = create_app()

# Default route
@bp.route('/random')
def get_random():
  random_recommend = RandRecommend()
  return random_recommend.random_contents()