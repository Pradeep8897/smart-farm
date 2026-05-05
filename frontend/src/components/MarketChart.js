function MarketChart() {
    const chartRef = React.useRef(null);
    const [chartInstance, setChartInstance] = React.useState(null);
    const [crop, setCrop] = React.useState('Rice');
    const [locationInput, setLocationInput] = React.useState('');
    const [activeLocation, setActiveLocation] = React.useState('Global');
    const [stats, setStats] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState('');

    const fetchData = React.useCallback((selectedCrop, selectedLocation) => {
        setLoading(true);
        setError('');
        fetch(`/api/market/location-trends?crop=${selectedCrop}&location=${selectedLocation || 'Global'}`)
            .then(res => res.json())
            .then(data => {
                if (chartInstance) chartInstance.destroy();
                
                const ctx = chartRef.current.getContext('2d');
                
                const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                gradient.addColorStop(0, 'rgba(16, 185, 129, 0.4)');
                gradient.addColorStop(1, 'rgba(16, 185, 129, 0.0)');

                const newChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: data.dates,
                        datasets: [{
                            label: `${data.crop} Price ($)`,
                            data: data.prices,
                            borderColor: '#10b981',
                            backgroundColor: gradient,
                            borderWidth: 3,
                            pointBackgroundColor: '#fff',
                            pointBorderColor: '#10b981',
                            pointBorderWidth: 2,
                            pointRadius: 4,
                            pointHoverRadius: 6,
                            fill: true,
                            tension: 0.4
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: false },
                            tooltip: {
                                backgroundColor: '#1f2937',
                                padding: 12,
                                titleFont: { size: 13, family: 'Inter' },
                                bodyFont: { size: 14, family: 'Inter', weight: 'bold' },
                                displayColors: false,
                                cornerRadius: 8
                            }
                        },
                        scales: {
                            x: { grid: { display: false }, ticks: { font: { family: 'Inter' } } },
                            y: { 
                                grid: { borderDash: [4, 4], color: '#e2e8f0' },
                                border: { display: false },
                                ticks: { font: { family: 'Inter' } }
                            }
                        },
                        interaction: {
                            intersect: false,
                            mode: 'index',
                        },
                    }
                });
                setChartInstance(newChart);
                setStats({ highest: data.highest, lowest: data.lowest, average: data.average });
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch market data:", err);
                setError('Failed to fetch data from server.');
                setLoading(false);
            });
    }, [chartInstance]);

    React.useEffect(() => {
        fetchData('Rice', 'Global');
        return () => { if (chartInstance) chartInstance.destroy(); }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleAnalyze = () => {
        if (!locationInput.trim()) {
            setError('Please enter a location to analyze.');
            return;
        }
        setActiveLocation(locationInput);
        fetchData(crop, locationInput);
    };

    return (
        <div className="glass-panel p-8 rounded-3xl card-hover md:col-span-2">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-gray-100 pb-4">
                <h2 className="text-lg font-bold text-gray-800">
                    {crop} Prices <span className="text-brand-600">in {activeLocation}</span>
                </h2>
                
                <div className="flex flex-wrap gap-3 items-center w-full md:w-auto">
                    <select 
                        value={crop}
                        onChange={(e) => setCrop(e.target.value)}
                        className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 p-2 outline-none cursor-pointer flex-1 md:flex-none">
                        <option value="Rice">Rice</option>
                        <option value="Wheat">Wheat</option>
                        <option value="Maize">Maize</option>
                        <option value="Tomato">Tomato</option>
                        <option value="Onion">Onion</option>
                        <option value="Potato">Potato</option>
                    </select>
                    
                    <input 
                        type="text" 
                        placeholder="Enter City/District..." 
                        value={locationInput}
                        onChange={(e) => setLocationInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                        className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 p-2 outline-none flex-1 md:flex-none min-w-[150px]"
                    />
                    
                    <button 
                        onClick={handleAnalyze}
                        className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm whitespace-nowrap w-full md:w-auto">
                        Analyze
                    </button>
                </div>
            </div>

            {error && <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm font-medium rounded-xl border border-red-100">{error}</div>}

            <div className="flex justify-end mb-4">
                {stats && !loading && !error && (
                    <div className="flex space-x-6 text-sm font-medium bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                        <span className="text-gray-500 uppercase text-xs tracking-wider">Avg: <span className="text-brand-600 font-bold text-sm ml-1">₹{stats.average}</span></span>
                        <span className="text-gray-500 uppercase text-xs tracking-wider">High: <span className="text-green-600 font-bold text-sm ml-1">₹{stats.highest}</span></span>
                        <span className="text-gray-500 uppercase text-xs tracking-wider">Low: <span className="text-red-500 font-bold text-sm ml-1">₹{stats.lowest}</span></span>
                    </div>
                )}
            </div>
            
            <div className="h-64 relative w-full flex items-center justify-center">
                {loading && (
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
                        <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin mb-3"></div>
                        <span className="font-bold text-brand-700 tracking-wide">Fetching Regional Data...</span>
                    </div>
                )}
                <canvas ref={chartRef}></canvas>
            </div>
        </div>
    );
}
window.MarketChart = MarketChart;
