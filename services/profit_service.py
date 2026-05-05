def calculate_profit(revenue, costs):
    profit = revenue - costs
    roi = (profit / costs) * 100 if costs > 0 else 0
    return {"profit": profit, "roi_percentage": round(roi, 2)}
