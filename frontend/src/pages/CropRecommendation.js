function CropRecommendation() {
    const [formData, setFormData] = React.useState({ nitrogen: '', phosphorus: '', potassium: '', ph: '' });
    const [prediction, setPrediction] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const res = await fetch('/api/crop/recommend', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            setPrediction(data.recommended_crop);
        } catch (error) {
            setPrediction("Error connecting to AI model.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fade-in space-y-6">
            <div>
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Crop Recommendation AI</h1>
                <p className="text-gray-500 mt-1 font-medium">Input your soil data to get the best crop prediction using Random Forest.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                <div className="glass-panel p-8 rounded-3xl">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Nitrogen (N)</label>
                                <input type="number" name="nitrogen" required value={formData.nitrogen} onChange={handleChange} className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 bg-gray-50 p-2.5 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phosphorus (P)</label>
                                <input type="number" name="phosphorus" required value={formData.phosphorus} onChange={handleChange} className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 bg-gray-50 p-2.5 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Potassium (K)</label>
                                <input type="number" name="potassium" required value={formData.potassium} onChange={handleChange} className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 bg-gray-50 p-2.5 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">pH Level</label>
                                <input type="number" step="0.1" name="ph" required value={formData.ph} onChange={handleChange} className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 bg-gray-50 p-2.5 outline-none" />
                            </div>
                        </div>
                        <button type="submit" disabled={loading} className="w-full bg-brand-600 text-white font-bold py-3 px-4 rounded-xl shadow hover:bg-brand-700 transition-colors mt-6 disabled:bg-gray-400">
                            {loading ? "Analyzing Soil..." : "Predict Best Crop"}
                        </button>
                    </form>
                </div>
                
                {prediction && (
                    <div className="glass-panel p-8 rounded-3xl flex flex-col items-center justify-center text-center fade-in border-2 border-brand-500 bg-brand-50/50">
                        <p className="text-gray-500 font-medium mb-2 uppercase tracking-wide text-sm">AI Recommendation</p>
                        <h2 className="text-5xl font-extrabold text-brand-700 mb-4">{prediction}</h2>
                        <p className="text-gray-600">Based on your soil nutrients, our scikit-learn model highly recommends planting {prediction}.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
window.CropRecommendation = CropRecommendation;
