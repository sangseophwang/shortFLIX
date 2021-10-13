from flask import Blueprint

from service.register_user import register_user

bp = Blueprint('random',__name__)

# Default route
@bp.route('/register', methods=['POST'])
def add_user():
  return register_user()