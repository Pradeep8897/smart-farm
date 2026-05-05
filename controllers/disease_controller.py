from flask import jsonify, request
from app.services.disease_service import analyze_disease

def detect_disease():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400
        
    image_file = request.files['image']
    image_bytes = image_file.read()
    
    result = analyze_disease(image_bytes)
    return jsonify(result)
