function ProfitCalculator() {
    const [formData, setFormData] = React.useState({ revenue: '', costs: '' });
    const [result, setResult] = React.useState(null);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/profit/calculate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ revenue: Number(formData.revenue), costs: Number(formData.costs) })
            });
            const data = await res.json();
            setResult(data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="fade-in space-y-6">
            <div>
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Profit Calculator</h1>
                <p className="text-gray-500 mt-1 font-medium">Estimate your seasonal profits and Return on Investment (ROI).</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                <div className="glass-panel bg-white p-8 rounded-3xl">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Estimated Revenue ($)</label>
                            <input type="number" name="revenue" required value={formData.revenue} onChange={handleChange} placeholder="e.g. 50000" className="block w-full rounded-xl border border-gray-200 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-gray-50 p-3 outline-none transition-all focus:bg-white" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Estimated Costs ($)</label>
                            <input type="number" name="costs" required value={formData.costs} onChange={handleChange} placeholder="e.g. 15000" className="block w-full rounded-xl border border-gray-200 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-gray-50 p-3 outline-none transition-all focus:bg-white" />
                            <p className="text-xs text-gray-500 mt-2 font-medium">Include seeds, fertilizer, labor, and water.</p>
                        </div>
                        <button type="submit" className="w-full bg-brand-600 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:bg-brand-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5 mt-4">Calculate ROI</button>
                    </form>
                </div>
                
                {result && (
                    <div className="glass-panel bg-white p-8 rounded-3xl flex flex-col justify-center border-t-8 border-brand-500 fade-in shadow-xl">
                        <p className="text-gray-500 font-bold uppercase tracking-wider text-sm mb-1">Net Profit</p>
                        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">${result.profit.toLocaleString()}</h2>
                        
                        <p className="text-gray-500 font-bold uppercase tracking-wider text-sm mb-1">Return on Investment</p>
                        <h2 className={`text-4xl font-extrabold ${result.roi_percentage >= 0 ? 'text-brand-600' : 'text-red-600'}`}>
                            {result.roi_percentage}%
                        </h2>
                    </div>
                )}
            </div>
        </div>
    );
}
window.ProfitCalculator = ProfitCalculator;
