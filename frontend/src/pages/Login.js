function Login({ onLogin, onNavigateToRegister }) {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const [formData, setFormData] = React.useState({ email: '', password: '' });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await fetch('/api/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || 'Login failed');
                setLoading(false);
            } else {
                setLoading(false);
                if(window.showToast) window.showToast(`Welcome back, ${data.username}!`, "success");
                onLogin(data.username);
            }
        } catch (err) {
            setError('Network error');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-96 bg-brand-600 z-0"></div>
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-brand-600 to-transparent z-0 opacity-80"></div>
            
            <div className="absolute -left-20 top-20 text-9xl opacity-10 transform -rotate-12">🚜</div>
            <div className="absolute -right-10 bottom-20 text-9xl opacity-10 transform rotate-12">🌾</div>

            <div className="max-w-md w-full glass-panel bg-white p-10 rounded-3xl shadow-2xl relative z-10 fade-in">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-100 mb-4 shadow-inner">
                        <span className="text-3xl">🌱</span>
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">SmartFarm OS</h2>
                    <p className="text-gray-500 font-medium mt-2">Sign in to manage your harvest.</p>
                </div>

                {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
                        <p className="text-red-700 text-sm font-bold">{error}</p>
                    </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                        <input 
                            type="email" name="email" required value={formData.email} onChange={handleChange}
                            className="block w-full rounded-xl border border-gray-200 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-gray-50 p-3 outline-none transition-all focus:bg-white" 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
                        <input 
                            type="password" name="password" required value={formData.password} onChange={handleChange}
                            className="block w-full rounded-xl border border-gray-200 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-gray-50 p-3 outline-none transition-all focus:bg-white" 
                        />
                    </div>
                    
                    <button 
                        type="submit" disabled={loading}
                        className="w-full bg-brand-600 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:bg-brand-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5 disabled:opacity-70 flex items-center justify-center">
                        {loading ? <span className="animate-spin mr-2">⏳</span> : null}
                        {loading ? 'Authenticating...' : 'Sign In'}
                    </button>
                </form>
                
                <div className="mt-8 text-center text-sm border-t border-gray-100 pt-6">
                    <p className="text-gray-500 font-medium">Don't have an account? <span onClick={onNavigateToRegister} className="font-bold text-brand-600 hover:text-brand-500 cursor-pointer">Sign up</span></p>
                </div>
            </div>
        </div>
    );
}
window.Login = Login;
