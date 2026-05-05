from flask import Blueprint
from app.controllers.mandi_controller import locator

mandi_bp = Blueprint('mandi', __name__)
mandi_bp.route('/nearby', methods=['GET'])(locator)
