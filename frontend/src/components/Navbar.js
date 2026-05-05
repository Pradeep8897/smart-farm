function Navbar({ currentUser = 'Farmer John' }) {
    const [notifOpen, setNotifOpen] = React.useState(false);
    const [profileOpen, setProfileOpen] = React.useState(false);

    return (
        <header className="h-20 flex items-center justify-between px-10 glass-panel sticky top-0 z-40 bg-white/80">
            <div className="flex items-center w-96">
                <div className="relative w-full">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">🔍</span>
                    <input type="text" placeholder="Search crops, alerts, or prices..." 
                           className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-full focus:ring-brand-500 focus:border-brand-500 block pl-10 p-2.5 outline-none transition-all focus:bg-white shadow-sm focus:shadow" />
                </div>
            </div>
            
            <div className="flex items-center gap-6 relative">
                <button onClick={() => setNotifOpen(!notifOpen)} className="relative text-gray-400 hover:text-gray-700 transition-colors focus:outline-none">
                    <span className="text-2xl">🔔</span>
                    <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full animate-pulse"></span>
                </button>
                
                {notifOpen && (
                    <div className="absolute top-12 right-32 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 fade-in">
                        <div className="px-4 py-2 border-b border-gray-50 flex justify-between items-center">
                            <h3 className="font-bold text-gray-800">Notifications</h3>
                            <span className="text-xs text-brand-600 cursor-pointer hover:underline">Mark all read</span>
                        </div>
                        <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors border-l-4 border-amber-400">
                            <p className="text-sm font-bold text-gray-800">Storm Warning</p>
                            <p className="text-xs text-gray-500 mt-1">Heavy rain expected tomorrow.</p>
                        </div>
                        <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors border-l-4 border-brand-400">
                            <p className="text-sm font-bold text-gray-800">Wheat Price Up</p>
                            <p className="text-xs text-gray-500 mt-1">Market price increased by $5.</p>
                        </div>
                    </div>
                )}

                <div className="flex items-center gap-3 pl-6 border-l border-gray-200 cursor-pointer relative" onClick={() => setProfileOpen(!profileOpen)}>
                    <div className="w-10 h-10 rounded-full shadow-sm border-2 border-white hover:border-brand-200 transition-colors bg-brand-500 flex items-center justify-center text-white font-bold text-sm">
                        {currentUser.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="hidden md:block">
                        <p className="text-sm font-bold text-gray-800 leading-tight">{currentUser}</p>
                        <p className="text-xs text-brand-600 font-medium mt-0.5">Premium Plan</p>
                    </div>
                    
                    {profileOpen && (
                        <div className="absolute top-12 right-0 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 fade-in">
                            <div className="px-4 py-2 hover:bg-gray-50 text-sm font-medium text-gray-700">👤 Profile Settings</div>
                            <div className="px-4 py-2 hover:bg-gray-50 text-sm font-medium text-gray-700">💳 Billing</div>
                            <div className="border-t border-gray-100 my-1"></div>
                            <div className="px-4 py-2 hover:bg-red-50 text-sm font-bold text-red-600" onClick={() => window.location.reload()}>Log Out</div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
window.Navbar = Navbar;
