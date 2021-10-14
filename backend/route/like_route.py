from flask import Blueprint, request
from service.like_content import like_contents
bp = Blueprint('like_content',__name__)

# Default route
@bp.route('/like/<int:content_id>', methods=['GET','POST'])
def user_like(content_id):
  data = request.get_json() 
  return like_contents(content_id, data['email'])
  