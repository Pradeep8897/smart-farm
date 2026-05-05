from flask import jsonify, request
from app.services.assistant_service import process_chat

def chat():
    data = request.json or {}
    message = data.get('message', '')
    
    if not message:
        return jsonify({"error": "No message provided"}), 400
        
    reply = process_chat(message)
    return jsonify({"reply": reply})
