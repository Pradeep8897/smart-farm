from flask import Blueprint
from app.controllers.fertilizer_controller import get_recommendation

fertilizer_bp = Blueprint('fertilizer', __name__)
fertilizer_bp.route('/recommend', methods=['POST'])(get_recommendation)
