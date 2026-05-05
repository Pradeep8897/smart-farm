const { Link, useLocation } = ReactRouterDOM;

function Sidebar() {
    const location = useLocation();
    
    const navItems = [
        { path: '/', name: 'Dashboard', icon: '📊' },
        { path: '/crop', name: 'Crop AI', icon: '🌱' },
        { path: '/market', name: 'Market Trends', icon: '📈' },
        { path: '/disease', name: 'Disease AI', icon: '🩺' },
        { path: '/mandi', name: 'Market Locator', icon: '📍' },
        { path: '/marketplace', name: 'Marketplace', icon: '🛒' },
        { path: '/fertilizer', name: 'Fertilizer Guide', icon: '🧪' },
        { path: '/calendar', name: 'Crop Calendar', icon: '📅' },
        { path: '/profit', name: 'Profit Calc', icon: '💰' },
        { path: '/assistant', name: 'Assistant', icon: '🎤' }
    ];

    return (
        <aside className="w-64 h-screen fixed left-0 top-0 bg-white shadow-xl border-r border-gray-100 z-20 flex flex-col transition-all">
            <div className="h-20 flex items-center px-6 border-b border-gray-50">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-green-500 to-emerald-400 text-white flex items-center justify-center text-xl shadow-lg mr-3">
                    🌾
                </div>
                <h1 className="font-bold text-xl tracking-tight text-gray-800">SmartFarm</h1>
            </div>
            
            <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                {navItems.map((item) => {
                    const active = location.pathname === item.path;
                    return (
                        <Link key={item.name} to={item.path} 
                              className={`flex items-center px-4 py-3.5 rounded-xl font-medium transition-all ${
                                  active ? 'bg-green-50 text-green-700 shadow-sm' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                              }`}>
                            <span className="text-xl mr-3 opacity-90">{item.icon}</span>
                            {item.name}
                        </Link>
                    )
                })}
            </nav>
            
            <div className="p-6 border-t border-gray-50">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                    <p className="text-xs font-semibold text-green-800 uppercase tracking-wider mb-1">PRO Plan</p>
                    <p className="text-sm text-green-600 mb-3">Unlock drone integrations.</p>
                    <button className="w-full py-2 bg-white text-green-700 text-sm font-semibold rounded-lg shadow-sm hover:shadow transition-all">Upgrade</button>
                </div>
            </div>
        </aside>
    );
}
window.Sidebar = Sidebar;
