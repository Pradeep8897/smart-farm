import re

def process_chat(message):
    msg_lower = message.lower()
    
    # Simple Intent Matching based on keywords
    if re.search(r'\b(fertilizer|npk|urea)\b', msg_lower):
        return "Based on typical soil types in your area, a balanced NPK 19:19:19 fertilizer applied 2-3 weeks after sowing is usually best. However, a soil test is recommended for precision."
    
    elif re.search(r'\b(weather|rain|temperature)\b', msg_lower):
        return "The local weather forecast indicates light showers over the next 48 hours, with temperatures ranging from 22°C to 28°C. Perfect for sowing kharif crops!"
        
    elif re.search(r'\b(price|sell|market|mandi)\b', msg_lower):
        return "Current mandi rates for Wheat are trending up at around $135.0/ton. I recommend checking the 'Mandi Locator' tab to find the closest buyer."
        
    elif re.search(r'\b(disease|sick|yellow|rust)\b', msg_lower):
        return "Yellowing leaves or rust spots can indicate a fungal infection. I strongly suggest taking a photo of the leaf and using our 'Disease Detection' tool for an AI analysis!"
        
    elif re.search(r'\b(hello|hi|hey)\b', msg_lower):
        return "Hello there! I am your AI SmartFarm Assistant. How can I help you improve your yield today?"
        
    else:
        return "I'm still learning! While I might not have the exact answer right now, you can try asking me about fertilizers, weather, market prices, or crop diseases."
