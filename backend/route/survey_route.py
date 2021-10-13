from flask import Blueprint
from service.survey_result import survey_results
bp = Blueprint('survey_result',__name__)

# Default route
@bp.route('/survey_result', methods=['POST'])
def survey_result():
  request_data = json.loads(request.data) 
  return survey_results(request_data)
  