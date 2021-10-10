from flask import Blueprint

from service.rand_recommend import RandRecommend

bp = Blueprint('random',__name__)
# app = create_app()

# Default route
@bp.route('/random')
def get_random():
  random_recommend = RandRecommend()
  return random_recommend.random_contents()