from flask import Blueprint, request
import json
from service.recent_reviews import recent_reviews

bp = Blueprint('reviews',__name__)

# Default route
@bp.route('/recent-review', methods=['POST'])     
def recent_review():
  request_data = json.loads(request.data)

  return recent_reviews(request_data)