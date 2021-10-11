from flask import Blueprint
from service.like_content import like_contents
bp = Blueprint('like_content',__name__)

# Default route
@bp.route('/like/<int:content_id>', methods=['GET'])
def user_like(content_id):
  return like_contents(content_id)