function DiseaseDetection() {
    const [analyzing, setAnalyzing] = React.useState(false);
    const [result, setResult] = React.useState(null);

    const handleUpload = async (e) => {
        if (!e.target.files.length) return;
        setAnalyzing(true);
        setResult(null);
        
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);

        try {
            const res = await fetch('/api/disease/detect', {
                method: 'POST',
                body: formData
            });
            const data = await res.json();
            
            if (data.error) {
                if(window.showToast) window.showToast(data.error, "error");
            } else {
                setResult({
                    disease: data.disease,
                    confidence: data.confidence,
                    action: data.action || data.treatment
                });
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            if(window.showToast) window.showToast("Failed to analyze image", "error");
        } finally {
            setAnalyzing(false);
        }
    };

    return (
        <div className="fade-in space-y-6">
            <div>
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Disease Detection</h1>
                <p className="text-gray-500 mt-1 font-medium">Upload a photo of a leaf to detect diseases using our AI vision model.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
                <div className="relative">
                    <input type="file" accept="image/*" onChange={handleUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                    <div className="glass-panel bg-white p-8 rounded-3xl text-center border-dashed border-2 border-green-300 hover:bg-green-50 transition-colors h-64 flex flex-col items-center justify-center">
                        <span className="text-6xl mb-4 block opacity-80">📸</span>
                        <p className="text-gray-800 font-bold text-lg">Click to upload an image or drag & drop</p>
                        <p className="text-sm text-gray-500 mt-2 font-medium">Supports JPG, PNG (Max 5MB)</p>
                    </div>
                </div>

                {analyzing && (
                    <div className="glass-panel bg-white p-8 rounded-3xl flex flex-col items-center justify-center fade-in">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-brand-500 mb-4"></div>
                        <h3 className="text-xl font-bold text-gray-800">Analyzing leaf structure...</h3>
                        <p className="text-gray-500 font-medium">Running Convolutional Neural Network</p>
                    </div>
                )}

                {result && !analyzing && (
                    <div className="glass-panel bg-white p-8 rounded-3xl border-2 border-red-200 fade-in relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-red-100 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
                        <span className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2 block">Critical Detection</span>
                        <h2 className="text-3xl font-extrabold text-red-700 mb-2">{result.disease}</h2>
                        <p className="text-gray-600 font-medium mb-4">Confidence: <span className="font-bold text-gray-800">{result.confidence}</span></p>
                        
                        <div className="bg-red-50 p-4 rounded-xl border border-red-100 mt-4">
                            <h4 className="font-bold text-red-900 mb-1">Recommended Action</h4>
                            <p className="text-sm text-red-800">{result.action}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
window.DiseaseDetection = DiseaseDetection;
