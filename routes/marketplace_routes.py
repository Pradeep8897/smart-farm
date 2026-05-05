from flask import Blueprint
from app.controllers.marketplace_controller import get_all

marketplace_bp = Blueprint('marketplace', __name__)
marketplace_bp.route('/items', methods=['GET'])(get_all)
