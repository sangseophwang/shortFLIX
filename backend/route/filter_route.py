from flask import Blueprint, request
import json
from service.filter_contents import filter_content

bp = Blueprint('filter',__name__)

# Default route
@bp.route('/filter', methods=['POST'])
def filters():
  request_data = json.loads(request.data)

  return filter_content(request_data)