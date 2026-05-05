from flask import Blueprint
from app.controllers.assistant_controller import chat

assistant_bp = Blueprint('assistant', __name__)
assistant_bp.route('/chat', methods=['POST'])(chat)
