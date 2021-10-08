from flask import Flask, render_template, session, request, url_for, redirect, flash, jsonify, Blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from authlib.integrations.flask_client import OAuth
from view import create_app
from flask_cors import CORS


app = create_app()
CORS(app)

if __name__=="__main__":
  app.run(host="0.0.0.0", port=80, debug=True)