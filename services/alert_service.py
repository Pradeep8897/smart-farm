from app.models.alert_model import SystemAlert
from app.models.database import db

def get_alerts():
    alerts = SystemAlert.query.filter_by(active=True).all()
    if not alerts:
        return [{"id": 1, "type": "Weather Warning", "message": "Heavy rainfall expected tomorrow. Secure harvested crops."}]
    return [{"id": a.id, "type": a.type, "message": a.message} for a in alerts]

def set_alert(type, message):
    new_alert = SystemAlert(type=type, message=message)
    db.session.add(new_alert)
    db.session.commit()
    return {"message": "Alert added successfully", "alert_id": new_alert.id}
