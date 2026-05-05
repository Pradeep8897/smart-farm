function Dashboard() {
    const [generating, setGenerating] = React.useState(false);

    const handleReport = () => {
        setGenerating(true);
        setTimeout(() => {
            setGenerating(false);
            if(window.showToast) window.showToast("Farm Report generated and downloaded successfully!", "success");
        }, 2000);
    };

    return (
        <div className="fade-in space-y-6">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Dashboard overview</h1>
                    <p className="text-gray-500 mt-1 font-medium">Welcome back, here's what's happening on your farm today.</p>
                </div>
                <button 
                    onClick={handleReport}
                    disabled={generating}
                    className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-sm transition-colors text-sm disabled:opacity-70 flex items-center">
                    {generating ? <span className="animate-spin mr-2">⏳</span> : <span className="mr-2">📄</span>}
                    {generating ? 'Generating...' : 'Generate Report'}
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <window.WeatherCard />
                <div className="md:col-span-2">
                    <div className="glass-panel p-8 rounded-3xl h-full flex flex-col justify-center relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-400 border-none shadow-lg group cursor-pointer hover:shadow-2xl transition-all">
                        <div className="absolute -right-10 -top-10 text-9xl opacity-10 transform rotate-12 group-hover:rotate-45 transition-transform duration-700">🌱</div>
                        <h2 className="text-white/80 font-semibold mb-1">Crop Health Status</h2>
                        <div className="text-4xl font-extrabold text-white mb-2">Excellent</div>
                        <p className="text-green-50 text-sm">All sensors indicate optimal moisture levels. No action required.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <window.MarketChart />
                <window.AlertBox />
            </div>
        </div>
    );
}
window.Dashboard = Dashboard;
