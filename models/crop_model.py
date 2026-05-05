from app.models.database import db

class Crop(db.Model):
    __tablename__ = 'crops'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    season = db.Column(db.String(80))
    soil_type = db.Column(db.String(80))
