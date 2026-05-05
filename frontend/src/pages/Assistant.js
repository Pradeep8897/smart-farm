function Assistant() {
    const [messages, setMessages] = React.useState([
        { id: 1, type: 'bot', text: 'Hello! I am your AI SmartFarm Assistant. How can I help you today?' }
    ]);
    const [listening, setListening] = React.useState(false);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        const input = e.target.elements.message;
        const text = input.value.trim();
        if(!text) return;
        
        input.value = '';
        
        const userMsg = { id: Date.now(), type: 'user', text };
        setMessages(prev => [...prev, userMsg]);
        setListening(true);
        
        try {
            const res = await fetch('/api/assistant/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text })
            });
            const data = await res.json();
            
            if(data.reply) {
                const botMsg = { id: Date.now()+1, type: 'bot', text: data.reply };
                setMessages(prev => [...prev, botMsg]);
            }
        } catch (error) {
            console.error("Error communicating with AI:", error);
            if(window.showToast) window.showToast("Connection error", "error");
        } finally {
            setListening(false);
        }
    };

    return (
        <div className="fade-in space-y-6 flex flex-col h-[80vh]">
            <div>
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">AI Voice Assistant</h1>
                <p className="text-gray-500 mt-1 font-medium">Talk to your intelligent farm companion.</p>
            </div>
            
            <div className="glass-panel bg-white rounded-3xl flex-1 flex flex-col overflow-hidden border border-gray-100 shadow-sm relative">
                {/* Chat History */}
                <div className="flex-1 p-8 overflow-y-auto space-y-6">
                    {messages.map(msg => (
                        <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} fade-in`}>
                            <div className={`max-w-[70%] rounded-2xl p-4 font-medium shadow-sm ${
                                msg.type === 'user' 
                                ? 'bg-brand-600 text-white rounded-br-sm' 
                                : 'bg-gray-50 text-gray-800 border border-gray-100 rounded-bl-sm'
                            }`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {listening && (
                        <div className="flex justify-end fade-in">
                            <div className="bg-brand-50 text-brand-700 rounded-2xl rounded-br-sm p-4 font-medium italic animate-pulse">
                                Listening...
                            </div>
                        </div>
                    )}
                </div>
                
                {/* Interaction Area */}
                <form onSubmit={handleSendMessage} className="p-4 bg-gray-50 border-t border-gray-100 flex items-center space-x-4">
                    <input 
                        type="text" 
                        name="message"
                        autoComplete="off"
                        placeholder="Type your farming question here..." 
                        className="flex-1 rounded-full border border-gray-200 px-6 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 bg-white shadow-sm"
                        disabled={listening}
                    />
                    <button 
                        type="submit"
                        disabled={listening}
                        className={`h-12 w-12 rounded-full flex items-center justify-center shadow-md text-xl transition-all transform hover:scale-105 ${
                            listening ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-brand-600 hover:bg-brand-700 text-white'
                        }`}>
                        ➤
                    </button>
                </form>
            </div>
        </div>
    );
}
window.Assistant = Assistant;
