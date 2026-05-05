from flask import Blueprint
from app.controllers.alert_controller import fetch_alerts, create_alert

alert_bp = Blueprint('alert', __name__)
alert_bp.route('/', methods=['GET'])(fetch_alerts)
alert_bp.route('/set', methods=['POST'])(create_alert)
