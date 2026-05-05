from flask import Blueprint
from app.controllers.recommendation_controller import recommend

recommend_bp = Blueprint('recommend', __name__)
recommend_bp.route('/get', methods=['POST'])(recommend)
