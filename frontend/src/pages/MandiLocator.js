function MandiLocator() {
    const [mandis, setMandis] = React.useState([]);

    React.useEffect(() => {
        fetch('/api/mandi/nearby')
            .then(res => res.json())
            .then(data => setMandis(data));
    }, []);

    return (
        <div className="fade-in space-y-6">
            <div>
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Nearby Market Locator</h1>
                <p className="text-gray-500 mt-1 font-medium">Find the closest markets to sell your harvest.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mandis.map(mandi => (
                    <div key={mandi.id} className="glass-panel bg-white p-6 rounded-3xl card-hover flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-bold text-gray-800">{mandi.name}</h3>
                            <p className="text-gray-500 text-sm mt-1">📍 {mandi.location}</p>
                        </div>
                        <div className="flex flex-col items-end space-y-2 text-right">
                            <span className="bg-brand-100 text-brand-800 font-bold py-1 px-3 rounded-full text-sm">
                                {mandi.distance_km} km away
                            </span>
                            <a 
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mandi.name + ' ' + mandi.location)}`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm font-bold text-brand-600 hover:text-brand-800 transition-colors bg-white border border-brand-200 px-3 py-1 rounded-lg shadow-sm hover:shadow"
                            >
                                Get Directions ↗
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
window.MandiLocator = MandiLocator;
