from flask import Blueprint
from app.controllers.soil_controller import test_soil

soil_bp = Blueprint('soil', __name__)
soil_bp.route('/analyze', methods=['POST'])(test_soil)
