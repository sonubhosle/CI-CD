'use client';

import { Building2, MapPin } from 'lucide-react';

export default function RecommendedJobs() {
    return (
        <div className="w-full lg:w-[320px] shrink-0 lg:sticky lg:top-[104px] flex flex-col gap-6">
            {/* Premium Ad */}
            <div className="bg-gradient-to-br from-gray-900 via-[#1a1c2e] to-indigo-950 rounded-3xl p-7 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-40 h-40 bg-indigo-500/20 blur-3xl rounded-full group-hover:bg-indigo-400/30 transition-colors"></div>
                <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-32 h-32 bg-blue-500/20 blur-2xl rounded-full"></div>
                <h3 className="font-black text-xl mb-3 relative z-10 flex items-center gap-2">
                    <span className="bg-gradient-to-r from-amber-200 to-amber-400 text-amber-900 text-[10px] uppercase font-black px-2.5 py-0.5 rounded-full shadow-sm">Pro</span> 
                    Upgrade Now
                </h3>
                <p className="text-[13px] text-indigo-100 mb-6 relative z-10 leading-relaxed font-medium">Top candidates get 3x more profile views and priority placement on recruiter feeds. Stand out instantly.</p>
                <button className="w-full py-3 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-amber-950 font-black text-[15px] rounded-xl transition-all relative z-10 shadow-[0_4px_15px_rgba(251,191,36,0.25)] hover:shadow-[0_4px_20px_rgba(251,191,36,0.4)] hover:-translate-y-0.5">
                    Claim Premium
                </button>
            </div>

            {/* Top Matches Widget */}
            <div className="bg-white border border-gray-200 rounded-3xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.03)] overflow-hidden">
                <div className="p-5 border-b border-gray-100 bg-gray-50/50">
                    <h3 className="font-bold text-gray-800 text-[16px]">Highly Recommended</h3>
                </div>
                <div className="divide-y divide-gray-100">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-5 hover:bg-gray-50 transition-colors cursor-pointer group">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50/50 flex items-center justify-center shrink-0 border border-blue-100/50 group-hover:shadow-md transition-shadow">
                                    <Building2 size={20} className="text-blue-500" />
                                </div>
                                <div className="flex-1 min-w-0 pt-0.5">
                                    <h4 className="font-bold text-[14.5px] text-gray-800 group-hover:text-blue-600 truncate transition-colors">Lead UX Designer</h4>
                                    <p className="text-[13px] text-gray-500 font-medium truncate mt-0.5">Creative Studios Inc.</p>
                                    <div className="flex items-center gap-2 mt-2 text-[12px] font-semibold text-gray-400">
                                        <span className="flex items-center gap-1"><MapPin size={12} /> NY (Hybrid)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-4 border-t border-gray-100 text-center bg-gray-50/30">
                    <span className="text-[14px] text-blue-600 font-bold hover:underline cursor-pointer">View all matches (12)</span>
                </div>
            </div>
        </div>
    );
}
