const { HashRouter, Route, Switch } = ReactRouterDOM;

function App() {
    // Inject brand colors via Tailwind inline configuration just for this session if not built
    React.useEffect(() => {
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#ecfdf5',
                            100: '#d1fae5',
                            500: '#10b981',
                            600: '#059669',
                            700: '#047857'
                        }
                    }
                }
            }
        };
    }, []);

    const [toast, setToast] = React.useState(null);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState('Farmer John');
    const [isRegistering, setIsRegistering] = React.useState(false);
    const [authView, setAuthView] = React.useState('login');

    React.useEffect(() => {
        window.showToast = (message, type = 'success') => {
            setToast({ message, type });
            setTimeout(() => setToast(null), 3000);
        };
    }, []);

    if (!isLoggedIn) {
        return (
            <React.Fragment>
                {toast && (
                    <div className="fixed bottom-6 right-6 z-50 fade-in flex items-center p-4 bg-white rounded-xl shadow-2xl border-l-4" style={{ borderColor: toast.type === 'success' ? '#10b981' : '#3b82f6' }}>
                        <span className="text-2xl mr-3">{toast.type === 'success' ? '✅' : 'ℹ️'}</span>
                        <span className="font-bold text-gray-800">{toast.message}</span>
                    </div>
                )}
                {authView === 'login' ? (
                    <window.Login 
                        onLogin={(username) => {
                            setIsLoggedIn(true);
                            if(username) setCurrentUser(username);
                        }} 
                        onNavigateToRegister={() => setAuthView('register')} 
                    />
                ) : (
                    <window.Register 
                        onRegister={() => setAuthView('login')} 
                        onNavigateToLogin={() => setAuthView('login')} 
                    />
                )}
            </React.Fragment>
        );
    }

    return (
        <HashRouter>
            <div className="flex h-screen overflow-hidden bg-[#f8fafc] relative">
                {toast && (
                    <div className="fixed bottom-6 right-6 z-50 fade-in flex items-center p-4 bg-white rounded-xl shadow-2xl border-l-4" style={{ borderColor: toast.type === 'success' ? '#10b981' : '#3b82f6' }}>
                        <span className="text-2xl mr-3">{toast.type === 'success' ? '✅' : 'ℹ️'}</span>
                        <span className="font-bold text-gray-800">{toast.message}</span>
                    </div>
                )}
                
                <window.Sidebar />
                
                <div className="flex-1 ml-64 flex flex-col z-10">
                    <window.Navbar currentUser={currentUser} />
                    
                    <main className="flex-1 overflow-y-auto p-8 pt-6">
                        <div className="max-w-7xl mx-auto">
                            <Switch>
                                <Route exact path="/" component={window.Dashboard} />
                                <Route path="/crop" component={window.CropRecommendation} />
                                <Route path="/market" component={window.MarketAnalysis} />
                                <Route path="/disease" component={window.DiseaseDetection} />
                                <Route path="/profit" component={window.ProfitCalculator} />
                                <Route path="/assistant" component={window.Assistant} />
                                <Route path="/mandi" component={window.MandiLocator} />
                                <Route path="/marketplace" component={window.Marketplace} />
                                <Route path="/fertilizer" component={window.FertilizerRecommend} />
                                <Route path="/calendar" component={window.CropCalendar} />
                            </Switch>
                        </div>
                    </main>
                </div>
            </div>
        </HashRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
