from flask import jsonify, request
from app.services.alert_service import get_alerts, set_alert

def fetch_alerts():
    return jsonify(get_alerts())

def create_alert():
    data = request.json or {}
    type = data.get('type')
    message = data.get('message')
    if not type or not message:
        return jsonify({"error": "Missing type or message"}), 400
    
    return jsonify(set_alert(type, message))
