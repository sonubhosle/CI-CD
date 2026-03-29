'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, Bell, Menu, ChevronDown, X, ChevronRight, Zap } from 'lucide-react';

export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isExpOpen, setIsExpOpen] = useState(false);
    const [selectedExp, setSelectedExp] = useState('');
    const expRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (expRef.current && !expRef.current.contains(event.target)) {
                setIsExpOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const expOptions = [
        "Fresher",
        "1 Year (Less than)",
        "2 Years",
        "3 Years",
        "4 Years",
        "up to 5 years"
    ];

    return (
        <>
            <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)] z-40 h-[72px] flex items-center justify-center px-10">
                <div className="w-full flex items-center justify-between gap-6">
                    {/* Left: Logo & Navigation */}
                    <div className="flex items-center gap-10">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 font-black text-[26px] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-500 text-white shadow-lg shadow-blue-500/30 transform -rotate-6">
                                <Zap size={18} strokeWidth={2.5} className="fill-white/20" />
                            </div>
                            Nova
                        </Link>

                        {/* Navigation Menus */}
                        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-600">
                            <Link href="#" className="flex items-center hover:text-[#275df5] transition-colors relative group">
                                Jobs
                                <span className="absolute -top-3.5 -right-3.5 bg-red-500 text-white text-[10px] font-bold w-[18px] h-[18px] flex items-center justify-center rounded-full shadow-sm">2</span>
                            </Link>
                            <Link href="#" className="hover:text-[#275df5] transition-colors">
                                Companies
                            </Link>
                            <Link href="#" className="flex items-center hover:text-[#275df5] transition-colors relative group">
                                Services
                                <span className="absolute -top-3.5 -right-3.5 bg-red-500 text-white text-[10px] font-bold w-[18px] h-[18px] flex items-center justify-center rounded-full shadow-sm">1</span>
                            </Link>
                        </nav>
                    </div>

                    {/* Middle: Default Search Bar (Smaller per user request) */}
                    <div 
                        role="searchbox"
                        tabIndex={0}
                        aria-label="Open global job search"
                        onClick={() => setIsSearchOpen(true)}
                        className="hidden md:flex items-center w-[300px] flex-none h-[43px] bg-white border border-gray-200 rounded-full pl-4 pr-1  cursor-text hover:border-gray-300 transition-colors shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                        <span className="flex-1 text-[14px] text-gray-400">Search jobs here</span>
                        <div className="w-8 h-8 bg-[#275df5] rounded-full flex items-center justify-center text-white  shadow-sm shrink-0">
                            <Search size={14} strokeWidth={2.5} />
                        </div>
                    </div>

                    {/* Right: Actions & Profile Indicator */}
                    <div className="flex items-center gap-5">
                        <button aria-label="View notifications" className="relative w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors">
                            <Bell size={22} strokeWidth={1.5} />
                            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] text-white flex items-center justify-center font-bold border-2 border-white">1</span>
                        </button>

                        <button
                            aria-label="Toggle user profile menu"
                            aria-expanded={isProfileOpen}
                            onClick={() => setIsProfileOpen(true)}
                            className="flex items-center gap-3 pl-3 pr-1 py-1 border border-gray-200 rounded-full hover:shadow-md transition-shadow bg-white relative"
                        >
                            <Menu size={20} className="text-gray-500" strokeWidth={1.5} />
                            <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-100 bg-gray-100">
                                <img src="https://i.pravatar.cc/100?img=11" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            {/* Little red badge on profile menu in image */}
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold w-[16px] h-[16px] flex items-center justify-center rounded-full border border-white">2</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Spacer to push body content down */}
            <div className="h-[72px]"></div>

            {/* --- Modals and Overlays --- */}

            {/* Huge Search Overlay Modal */}
            <div
                className={`fixed inset-0 z-50 flex flex-col transition-all duration-300 ${isSearchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                {/* Dark Backdrop */}
                <div
                    className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
                    onClick={() => setIsSearchOpen(false)}
                ></div>

                {/* Search Bar Container sliding down */}
                <div
                    className={`relative z-10 w-full bg-white shadow-2xl flex items-center justify-center py-8 px-10 transform transition-transform duration-300 ease-out ${isSearchOpen ? 'translate-y-0' : '-translate-y-full'}`}
                >
                    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 relative">
                        {/* Logo inside Search Modal for very large screens */}
                        <Link href="/" className="hidden xl:flex absolute left-0 items-center gap-2 font-black text-[26px] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-500 text-white shadow-lg shadow-blue-500/30 transform -rotate-6">
                                <Zap size={18} strokeWidth={2.5} className="fill-white/20" />
                            </div>
                            Nova
                        </Link>

                        {/* Complete Search Pill Box matching Image 2 perfectly */}
                        <div className="flex flex-col lg:flex-row w-full max-w-[960px] lg:h-[72px] bg-white border border-gray-300 rounded-2xl lg:rounded-full shadow-2xl items-center px-3 lg:divide-x divide-gray-200 focus-within:ring-4 ring-blue-500/20 transition-shadow overflow-visible">

                            <div className="flex-[2] h-[50px] lg:h-full w-full flex items-center">
                                <input
                                    type="text"
                                    aria-label="Job title, keywords, or companies"
                                    placeholder="Enter keyword / designation / companies"
                                    className="w-full h-full bg-transparent px-5 text-[15px] font-medium text-gray-800 placeholder:text-gray-400 placeholder:font-normal focus:outline-none lg:rounded-l-full"
                                    autoFocus={isSearchOpen}
                                />
                            </div>

                            {/* EXPERIENCE DROPDOWN */}
                            <div
                                ref={expRef}
                                role="combobox"
                                tabIndex={0}
                                aria-label="Select required experience level"
                                aria-expanded={isExpOpen}
                                className="flex-[1] h-[50px] lg:h-full w-full flex items-center px-5 relative cursor-pointer hover:bg-gray-50 transition-colors border-t lg:border-t-0 border-gray-100 lg:border-l group"
                                onClick={() => setIsExpOpen(!isExpOpen)}
                            >
                                <span className={`text-[15px] flex-1 truncate ${selectedExp ? 'text-gray-800 font-medium' : 'text-gray-400 group-hover:text-gray-600'}`}>
                                    {selectedExp || 'Select experience'}
                                </span>
                                <ChevronDown size={16} strokeWidth={2} className={`text-gray-400 shrink-0 transition-transform duration-200 ${isExpOpen ? 'rotate-180' : ''}`} />

                                {/* Dropdown Menu Panel */}
                                <div className={`absolute top-[105%] left-0 w-full min-w-[200px] mt-1 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 py-2 z-[60] transition-all duration-200 origin-top transform ${isExpOpen ? 'scale-y-100 opacity-100 pointer-events-auto' : 'scale-y-95 opacity-0 pointer-events-none'}`}>
                                    {expOptions.map((exp, idx) => (
                                        <div
                                            key={idx}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedExp(exp);
                                                setIsExpOpen(false);
                                            }}
                                            className={`px-5 py-2.5 text-[14px] cursor-pointer transition-colors ${selectedExp === exp ? 'bg-blue-50 text-[#275df5] font-bold' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}
                                        >
                                            {exp}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex-[1.5] h-[50px] lg:h-full w-full flex items-center pl-5 pr-2 border-t lg:border-t-0 border-gray-100 lg:border-l">
                                <input
                                    type="text"
                                    aria-label="Job location"
                                    placeholder="Enter location"
                                    className="w-full h-full bg-transparent text-[15px] font-medium text-gray-800 placeholder:text-gray-400 placeholder:font-normal focus:outline-none"
                                />

                                <button className="h-[48px] px-8 bg-[#275df5] text-white font-bold text-[16px] rounded-xl lg:rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-md shrink-0 ml-3 w-full lg:w-auto">
                                    <Search size={18} strokeWidth={2.5} />
                                    Search
                                </button>
                            </div>
                        </div>

                        {/* Close button for Search Modal isolated on right */}
                        <button
                            aria-label="Close search overlay"
                            onClick={() => setIsSearchOpen(false)}
                            className="absolute -top-16 right-0 lg:-right-4 text-white hover:text-gray-200 p-2 bg-black/20 rounded-full backdrop-blur-md transition-colors lg:bg-transparent lg:text-gray-400 lg:hover:bg-gray-100 lg:hover:text-gray-800 lg:top-1/2 lg:-translate-y-1/2"
                        >
                            <X size={28} strokeWidth={2} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Profile Sidebar Right Slide Modle */}
            {/* Backdrop for profile */}
            <div className={`fixed inset-0 bg-gray-900/40 z-[60] backdrop-blur-[2px] transition-opacity duration-300 ${isProfileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsProfileOpen(false)} ></div>

            {/* Sidebar Container */}
            <div className={`fixed top-0 right-0 h-full w-full sm:w-[350px] bg-white shadow-2xl z-[70] transform transition-transform duration-300 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col ${isProfileOpen ? 'translate-x-0' : 'translate-x-full'}`} >
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold tracking-tight text-gray-800">My Profile</h2>
                    <button 
                        aria-label="Close profile sidebar"
                        onClick={() => setIsProfileOpen(false)}
                        className="text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition-colors" >
                        <X size={22} strokeWidth={2} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                    {/* User Intro */}
                    <div className="flex items-center gap-4">
                        <img src="https://i.pravatar.cc/100?img=11" alt="Profile" className="w-16 h-16 rounded-full object-cover border border-gray-200 outline outline-2 outline-offset-2 outline-blue-500 shadow-sm" />
                        <div>
                            <h3 className="font-bold text-lg text-gray-800">John Doe</h3>
                            <p className="text-sm text-gray-500 font-medium">johndoe@example.com</p>
                            <Link href="#" className="text-sm text-blue-600 font-bold hover:underline mt-1.5 inline-block">View & Update Profile</Link>
                        </div>
                    </div>

                    {/* Stats Widget */}
                    <div className="border border-indigo-100 bg-gradient-to-br from-indigo-50 to-blue-50/50 rounded-2xl p-5 shadow-[inset_0_0_20px_rgba(255,255,255,0.8)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100/50 rounded-full blur-2xl -mr-10 -mt-10"></div>
                        <p className="text-[13px] text-gray-600 font-bold mb-4 relative z-10">Profile Performance</p>
                        <div className="flex justify-between items-center relative z-10">
                            <div className="flex-1">
                                <h4 className="font-black text-2xl text-[#275df5]">12</h4>
                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-1">Search Appearances</p>
                            </div>
                            <div className="w-[1px] h-10 bg-indigo-200 mx-2"></div>
                            <div className="flex-1 pl-4">
                                <h4 className="font-black text-2xl text-[#275df5]">3</h4>
                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-1">Recruiter Actions</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-1.5">
                        {['Saved Jobs', 'Applied Jobs', 'Communications', 'Settings'].map((item, idx) => (
                            <button key={idx} className="w-full flex items-center justify-between p-3.5 rounded-xl hover:bg-gray-50 text-gray-700 font-semibold transition-colors group">
                                {item}
                                <ChevronRight size={18} strokeWidth={2.5} className="text-gray-300 group-hover:text-blue-500 transition-colors transform group-hover:translate-x-1" />
                            </button>
                        ))}
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-6 border-t border-gray-100">
                        <button className="w-full py-3.5 px-4 bg-gray-50 border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-sm">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}