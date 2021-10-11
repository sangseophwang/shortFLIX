from flask import Blueprint
from service.dislike_content import dislike_contents
bp = Blueprint('dislike_content',__name__)

# Default route
@bp.route('/dislike/<int:content_id>', methods=['GET'])
def user_dislike(content_id):
  return dislike_contents(content_id)