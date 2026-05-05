function FertilizerRecommend() {
    const [rec, setRec] = React.useState(null);
    const [crop, setCrop] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleCheck = (e) => {
        e.preventDefault();
        if (!crop.trim()) return;
        
        setLoading(true);
        fetch('/api/fertilizer/recommend', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ crop: crop, soil_type: 'Unknown' })
        })
        .then(res => res.json())
        .then(data => {
            setRec(data);
            setLoading(false);
            if(window.showToast) window.showToast(`Found recommendations for ${crop}!`, "success");
        })
        .catch(() => {
            setLoading(false);
            if(window.showToast) window.showToast("Error fetching recommendations.", "error");
        });
    };

    return (
        <div className="fade-in space-y-6">
            <div>
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Fertilizer & Storage Guide</h1>
                <p className="text-gray-500 mt-1 font-medium">Get chemical recommendations tailored to your soil.</p>
            </div>
            
            <form onSubmit={handleCheck} className="flex gap-4 max-w-2xl">
                <input 
                    type="text" 
                    value={crop}
                    onChange={(e) => setCrop(e.target.value)}
                    placeholder="Enter crop name (e.g. Wheat, Rice, Corn)..."
                    className="flex-1 rounded-xl border border-gray-200 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-white p-3 outline-none transition-all text-gray-800 font-medium" 
                />
                <button 
                    type="submit" 
                    disabled={loading || !crop.trim()}
                    className="bg-brand-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-700 disabled:opacity-50 flex items-center transition-colors">
                    {loading ? <span className="animate-spin mr-2">⏳</span> : <span className="mr-2">🔍</span>}
                    {loading ? 'Searching...' : 'Get Recommendations'}
                </button>
            </form>

            {rec && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="glass-panel bg-white p-6 rounded-3xl border-2 border-brand-200">
                        <h3 className="font-bold text-brand-800 uppercase tracking-wide text-xs mb-2">Fertilizer Plan</h3>
                        <p className="text-gray-700 font-medium">{rec.fertilizer}</p>
                    </div>
                    <div className="glass-panel bg-white p-6 rounded-3xl border-2 border-blue-200">
                        <h3 className="font-bold text-blue-800 uppercase tracking-wide text-xs mb-2">Storage Suggestion</h3>
                        <p className="text-gray-700 font-medium">{rec.storage}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
window.FertilizerRecommend = FertilizerRecommend;
