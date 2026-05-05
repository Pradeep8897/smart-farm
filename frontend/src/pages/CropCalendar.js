function CropCalendar() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    return (
        <div className="fade-in space-y-6">
            <div>
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Crop Calendar</h1>
                <p className="text-gray-500 mt-1 font-medium">Visual timeline for planting and harvesting seasons.</p>
            </div>
            
            <div className="glass-panel bg-white p-8 rounded-3xl overflow-x-auto">
                <div className="min-w-[800px]">
                    <div className="grid grid-cols-13 gap-2 mb-4">
                        <div className="font-bold text-gray-400 uppercase text-xs w-32">Crop</div>
                        {months.map(m => <div key={m} className="font-bold text-gray-400 uppercase text-xs text-center">{m}</div>)}
                    </div>
                    
                    <div className="space-y-4">
                        {/* Wheat */}
                        <div className="grid grid-cols-13 gap-2 items-center">
                            <div className="font-bold text-gray-800 w-32">Wheat (Winter)</div>
                            <div className="col-span-12 relative h-8 bg-gray-50 rounded-lg">
                                <div className="absolute left-[83%] w-[17%] h-full bg-blue-200 rounded-l-lg border-2 border-blue-400 flex items-center justify-center text-xs font-bold text-blue-800">Plant</div>
                                <div className="absolute left-[25%] w-[16%] h-full bg-amber-200 rounded-lg border-2 border-amber-400 flex items-center justify-center text-xs font-bold text-amber-800">Harvest</div>
                            </div>
                        </div>
                        
                        {/* Rice */}
                        <div className="grid grid-cols-13 gap-2 items-center mt-6">
                            <div className="font-bold text-gray-800 w-32">Rice (Kharif)</div>
                            <div className="col-span-12 relative h-8 bg-gray-50 rounded-lg">
                                <div className="absolute left-[41%] w-[16%] h-full bg-blue-200 rounded-lg border-2 border-blue-400 flex items-center justify-center text-xs font-bold text-blue-800">Plant</div>
                                <div className="absolute left-[83%] w-[17%] h-full bg-amber-200 rounded-r-lg border-2 border-amber-400 flex items-center justify-center text-xs font-bold text-amber-800">Harvest</div>
                            </div>
                        </div>
                        
                        {/* Maize */}
                        <div className="grid grid-cols-13 gap-2 items-center mt-6">
                            <div className="font-bold text-gray-800 w-32">Maize</div>
                            <div className="col-span-12 relative h-8 bg-gray-50 rounded-lg">
                                <div className="absolute left-[8%] w-[16%] h-full bg-blue-200 rounded-lg border-2 border-blue-400 flex items-center justify-center text-xs font-bold text-blue-800">Plant</div>
                                <div className="absolute left-[50%] w-[16%] h-full bg-amber-200 rounded-lg border-2 border-amber-400 flex items-center justify-center text-xs font-bold text-amber-800">Harvest</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
window.CropCalendar = CropCalendar;
