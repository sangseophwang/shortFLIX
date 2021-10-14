from flask import Blueprint, request
from service.mypage import get_user_info

bp = Blueprint('my_page',__name__)
# app = create_app()

# Default route
@bp.route('/mypage', methods=['POST'])
def user_info():
  data = request.get_json()
  return get_user_info(data['email'])