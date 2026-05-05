from app.models.database import db

class SoilAnalysis(db.Model):
    __tablename__ = 'soil_analysis'
    id = db.Column(db.Integer, primary_key=True)
    ph = db.Column(db.Float)
    nitrogen = db.Column(db.Float)
    phosphorus = db.Column(db.Float)
    potassium = db.Column(db.Float)
