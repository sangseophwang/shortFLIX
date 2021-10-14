from flask import Blueprint, request
from service.dislike_content import dislike_contents
bp = Blueprint('dislike_content',__name__)

# Default route
@bp.route('/dislike/<int:content_id>', methods=['GET','POST'])
def user_dislike(content_id):
  data = request.get_json() 
  return dislike_contents(content_id, data['email'])