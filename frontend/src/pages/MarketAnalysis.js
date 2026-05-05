function MarketAnalysis() {
    return (
        <div className="fade-in space-y-6">
            <div>
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Market Analysis</h1>
                <p className="text-gray-500 mt-1 font-medium">Deep dive into historical trends.</p>
            </div>
            <window.MarketChart />
        </div>
    );
}
window.MarketAnalysis = MarketAnalysis;
