function Marketplace() {
    const [items, setItems] = React.useState({ products: [], equipment: [] });
    const [processing, setProcessing] = React.useState({});
    const [purchased, setPurchased] = React.useState({});

    React.useEffect(() => {
        fetch('/api/marketplace/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    const handleAction = (id, type, name) => {
        const key = `${type}_${id}`;
        setProcessing(prev => ({ ...prev, [key]: true }));
        
        setTimeout(() => {
            setProcessing(prev => ({ ...prev, [key]: false }));
            setPurchased(prev => ({ ...prev, [key]: true }));
            
            const msg = type === 'buy' ? `Successfully purchased ${name}!` : `Successfully rented ${name}!`;
            if(window.showToast) window.showToast(msg, 'success');
        }, 1500);
    };

    return (
        <div className="fade-in space-y-8">
            <div>
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Marketplace & Equipment Rentals</h1>
                <p className="text-gray-500 mt-1 font-medium">Buy seeds, sell crops, or rent heavy machinery.</p>
            </div>

            <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Products for Sale</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.products.map(p => {
                        const key = `buy_${p.id}`;
                        const isPurchased = purchased[key];
                        return (
                            <div key={p.id} className="glass-panel bg-white p-6 rounded-3xl card-hover relative overflow-hidden flex flex-col">
                                {isPurchased && <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">Purchased</div>}
                                <h3 className="font-bold text-lg pr-12">{p.title}</h3>
                                <p className="text-xs text-gray-500 font-medium">Sold by: {p.seller}</p>
                                <p className="text-sm text-gray-600 mt-2 mb-2 line-clamp-2">{p.description}</p>
                                <div className="text-2xl font-extrabold text-brand-600 mt-auto">${p.price}</div>
                                <button 
                                    disabled={processing[key] || isPurchased}
                                    onClick={() => handleAction(p.id, 'buy', p.title)}
                                    className={`mt-4 w-full py-2 rounded-xl text-sm font-semibold transition-all ${
                                        isPurchased ? 'bg-green-100 text-green-800' : 'bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-50'
                                    }`}>
                                    {processing[key] ? 'Processing...' : isPurchased ? 'View Order' : 'Buy Now'}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Equipment for Rent</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.equipment.map(e => {
                        const key = `rent_${e.id}`;
                        const isRented = purchased[key];
                        return (
                            <div key={e.id} className="glass-panel bg-white p-6 rounded-3xl card-hover border-blue-100 shadow-sm relative overflow-hidden flex flex-col">
                                {isRented && <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">Rented</div>}
                                <h3 className="font-bold text-lg pr-12">{e.name}</h3>
                                <p className="text-xs text-gray-500 font-medium mb-2">Owned by: {e.owner}</p>
                                <div className="text-xl font-extrabold text-blue-600 mt-auto">${e.rate} <span className="text-sm text-gray-500 font-medium">/ day</span></div>
                                <button 
                                    disabled={processing[key] || isRented}
                                    onClick={() => handleAction(e.id, 'rent', e.name)}
                                    className={`mt-4 w-full py-2 rounded-xl text-sm font-semibold transition-all ${
                                        isRented ? 'bg-blue-100 text-blue-800' : 'bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50'
                                    }`}>
                                    {processing[key] ? 'Processing...' : isRented ? 'Manage Rental' : 'Rent Equipment'}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
window.Marketplace = Marketplace;
