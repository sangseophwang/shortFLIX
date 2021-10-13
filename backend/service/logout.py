from flask import jsonify, request, redirect, url_for, session
from model.models import *

def logout():
  session.pop('log_in', None)
  db.session.close()
  return "logout success"