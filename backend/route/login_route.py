from flask import Blueprint, request
import json
from service.login import login

bp = Blueprint('login',__name__)

# Default route
@bp.route('/login', methods=['POST'])
def login_user():
  request_data = json.loads(request.data) 
  return login(request_data)