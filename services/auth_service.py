from werkzeug.security import generate_password_hash, check_password_hash
from app.models.user_model import User
from app.models.database import db

def register_user(username, email, password):
    if User.query.filter_by(email=email).first():
        return {"error": "Email already exists"}, 400
    if User.query.filter_by(username=username).first():
        return {"error": "Username already exists"}, 400

    hashed_password = generate_password_hash(password)
    new_user = User(username=username, email=email, password_hash=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    
    return {"message": "User registered successfully", "user_id": new_user.id}, 201

def login_user(email, password):
    user = User.query.filter_by(email=email).first()
    if not user:
        return {"error": "Invalid email or password"}, 401
    
    if not check_password_hash(user.password_hash, password):
        return {"error": "Invalid email or password"}, 401
        
    return {"message": "Login successful", "username": user.username, "user_id": user.id}, 200
