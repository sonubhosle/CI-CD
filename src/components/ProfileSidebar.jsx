'use client';

import { Briefcase, MapPin } from 'lucide-react';

export default function ProfileSidebar() {
    return (
        <div className="w-full lg:w-[320px] shrink-0 lg:sticky lg:top-[104px] flex flex-col gap-6">
            {/* Profile Card */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-blue-600 to-indigo-500"></div>
                <div className="relative mt-8 flex flex-col items-center">
                    <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-lg bg-white"/>
                    <h2 className="mt-4 font-black text-xl text-gray-800 tracking-tight">John Doe</h2>
                    <p className="text-[14px] text-gray-500 font-medium">Senior Software Engineer</p>
                    <p className="text-[13px] hover:underline cursor-pointer text-blue-600 mt-2 font-bold">View Full Profile</p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-[14px] text-gray-500 font-medium">Profile Completion</span>
                        <span className="text-[14px] font-bold text-blue-600">85%</span>
                    </div>
                    <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-[85%] rounded-full relative">
                            <div className="absolute top-0 right-0 bottom-0 left-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+Cjwvc3ZnPg==')] opacity-20"></div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 space-y-3.5">
                    <div className="flex items-center gap-3 text-[14px] text-gray-600 font-medium">
                        <MapPin size={18} className="text-gray-400"/> San Francisco, CA
                    </div>
                    <div className="flex items-center gap-3 text-[14px] text-gray-600 font-medium">
                        <Briefcase size={18} className="text-gray-400"/> 8+ Years Experience
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.03)]">
                <h3 className="font-bold text-gray-800 mb-5 text-[16px]">Your Activity</h3>
                <div className="space-y-5">
                    <div className="flex justify-between items-center group cursor-pointer">
                        <span className="text-[15px] text-gray-500 font-medium group-hover:text-blue-600 transition-colors">Profile Views</span>
                        <span className="font-black text-gray-800 text-[16px] group-hover:text-blue-600 transition-colors">42</span>
                    </div>
                    <div className="flex justify-between items-center group cursor-pointer">
                        <span className="text-[15px] text-gray-500 font-medium group-hover:text-blue-600 transition-colors">Interviews</span>
                        <span className="font-black text-gray-800 text-[16px] group-hover:text-blue-600 transition-colors">3</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
