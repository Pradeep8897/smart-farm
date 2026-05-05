from flask import Blueprint
from app.controllers.demand_controller import get_demand

demand_bp = Blueprint('demand', __name__)
demand_bp.route('/predict', methods=['POST'])(get_demand)
