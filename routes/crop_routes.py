from flask import Blueprint
from app.controllers.crop_controller import recommend_crop

crop_bp = Blueprint('crop', __name__)
crop_bp.route('/recommend', methods=['POST'])(recommend_crop)
