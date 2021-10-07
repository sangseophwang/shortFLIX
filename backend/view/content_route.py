from flask import Flask, render_template, session, request, url_for, redirect, flash, jsonify, Blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from authlib.integrations.flask_client import OAuth
from service.get_content import GetContents

bp = Blueprint('contents',__name__)
# app = create_app()

# Default route
@bp.route('/contents')
def get_contents():
  contents = GetContents()
  return contents.all_contents()