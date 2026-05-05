function AlertBox() {
    const [alerts, setAlerts] = React.useState([]);

    React.useEffect(() => {
        fetch('/api/alerts/')
            .then(res => res.json())
            .then(data => setAlerts(data || []));
    }, []);

    return (
        <div className="glass-panel p-8 rounded-3xl card-hover h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-gray-800">System Alerts</h2>
                <span className="bg-red-100 text-red-600 text-xs font-bold px-2.5 py-1 rounded-full">{alerts.length} New</span>
            </div>
            
            {alerts.length === 0 ? (
                <div className="flex-1 flex items-center justify-center text-gray-400 font-medium">No active alerts</div>
            ) : (
                <div className="space-y-4 overflow-y-auto pr-2">
                    {alerts.map(a => (
                        <div key={a.id} className="p-4 rounded-2xl border-l-4 border-amber-500 bg-amber-50/50 hover:bg-amber-50 transition-colors">
                            <div className="flex gap-3">
                                <span className="text-amber-500 mt-0.5">⚠️</span>
                                <div>
                                    <h4 className="text-sm font-bold text-amber-900 capitalize">{a.type}</h4>
                                    <p className="text-sm text-amber-800 mt-1 opacity-90">{a.message}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
window.AlertBox = AlertBox;
