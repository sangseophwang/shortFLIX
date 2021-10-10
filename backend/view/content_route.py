from flask import Blueprint
from service.get_content import GetContents

bp = Blueprint('contents',__name__)
# app = create_app()

# Default route
@bp.route('/contents')
def get_contents():
  contents = GetContents()
  return contents.all_contents()