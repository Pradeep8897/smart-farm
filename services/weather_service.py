def get_weather():
    return {
        "temp": 28, 
        "condition": "Sunny", 
        "humidity": 65,
        "alerts": [
            {"id": 1, "type": "warning", "message": "Heavy rain expected tomorrow."}
        ]
    }
