const API_BASE = '/api';

window.api = {
    getDashboard: async () => {
        const res = await fetch(`${API_BASE}/dashboard/`);
        return res.json();
    },
    getMarketTrends: async () => {
        const res = await fetch(`${API_BASE}/market/trends`);
        return res.json();
    },
    getNearbyMarkets: async () => {
        const res = await fetch(`${API_BASE}/market/nearby`);
        return res.json();
    },
    getWeather: async () => {
        const res = await fetch(`${API_BASE}/tools/weather`);
        return res.json();
    },
    getRentals: async () => {
        const res = await fetch(`${API_BASE}/tools/rentals`);
        return res.json();
    },
    getCalendar: async () => {
        const res = await fetch(`${API_BASE}/tools/calendar`);
        return res.json();
    },
    getMarketplace: async () => {
        const res = await fetch(`${API_BASE}/marketplace/`);
        return res.json();
    },
    postCropRecommend: async (data) => {
        const res = await fetch(`${API_BASE}/ai/crop/recommend`, {
            method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)
        });
        return res.json();
    },
    postSoilAnalyze: async (data) => {
        const res = await fetch(`${API_BASE}/ai/soil/analyze`, {
            method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)
        });
        return res.json();
    },
    postProfitCalc: async (data) => {
        const res = await fetch(`${API_BASE}/tools/profit/calculate`, {
            method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)
        });
        return res.json();
    },
    postDiseaseDetect: async (formData) => {
        const res = await fetch(`${API_BASE}/ai/disease/detect`, {
            method: 'POST', body: formData
        });
        return res.json();
    }
};
