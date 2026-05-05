function WeatherCard() {
    const [weather, setWeather] = React.useState(null);

    React.useEffect(() => {
        // Fetch weather from backend API
        fetch('/api/weather/')
            .then(res => res.json())
            .then(data => setWeather(data));
    }, []);

    if (!weather) return <div className="glass-panel p-6 rounded-3xl animate-pulse h-40"></div>;

    return (
        <div className="glass-panel p-8 rounded-3xl card-hover relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-300/40 to-orange-400/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
            
            <div className="flex justify-between items-start relative z-10">
                <div>
                    <h2 className="text-sm font-semibold text-gray-500 tracking-wide uppercase mb-1">Current Weather</h2>
                    <div className="text-5xl font-extrabold text-gray-800 tracking-tighter">{weather.temp}°</div>
                    <p className="text-gray-600 mt-2 font-medium flex items-center">
                        <span className="text-xl mr-2">☀️</span> {weather.condition}
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-gray-500 font-medium">Humidity</p>
                    <p className="text-xl font-bold text-gray-700">{weather.humidity}%</p>
                </div>
            </div>
        </div>
    );
}
window.WeatherCard = WeatherCard;
