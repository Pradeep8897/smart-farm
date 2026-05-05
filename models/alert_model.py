from app.models.database import db

class SystemAlert(db.Model):
    __tablename__ = 'system_alerts'
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(50), nullable=False)
    message = db.Column(db.Text, nullable=False)
    active = db.Column(db.Boolean, default=True)
