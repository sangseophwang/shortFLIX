from flask import Blueprint
from service.get_content import all_contents

bp = Blueprint('contents',__name__)
# app = create_app()

# Default route
@bp.route('/contents')
def get_contents():
  return all_contents()