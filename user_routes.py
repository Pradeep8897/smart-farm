from flask import Blueprint, request, jsonify
from app.services.auth_service import register_user, login_user

user_bp = Blueprint('user', __name__)

@user_bp.route('/register', methods=['POST'])
def register():
    data = request.json or {}
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    
    if not username or not email or not password:
        return jsonify({"error": "Missing required fields"}), 400
        
    result, status_code = register_user(username, email, password)
    return jsonify(result), status_code

@user_bp.route('/login', methods=['POST'])
def login():
    data = request.json or {}
    email = data.get('email')
    password = data.get('password')
    
    if not email or not password:
        return jsonify({"error": "Missing email or password"}), 400
        
    result, status_code = login_user(email, password)
    return jsonify(result), status_code
