from flask import Blueprint

from service.logout import logout

bp = Blueprint('logout',__name__)

@bp.route("/logout")
def user_logout():
  return logout()