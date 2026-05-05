from flask import Blueprint
from app.controllers.profit_controller import calc_profit

profit_bp = Blueprint('profit', __name__)
profit_bp.route('/calculate', methods=['POST'])(calc_profit)
