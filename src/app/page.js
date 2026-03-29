'use client';

import { useState, useEffect } from 'react';
import ProfileSidebar from '@/components/ProfileSidebar';
import RecommendedJobs from '@/components/RecommendedJobs';
import JobCard from '@/components/JobCard';

export default function Home() {
    const [activeTab, setActiveTab] = useState('Jobs');
    const [loading, setLoading] = useState(true);
    const [visibleJobs, setVisibleJobs] = useState(6);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const tabs = ['Jobs', 'Applied', 'Shortlisted', 'Preferences', 'Matched'];

    // Simulate lazy loading when tab changes or initial page load
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, [activeTab]);

    const handleLoadMore = () => {
        setIsLoadingMore(true);
        setTimeout(() => {
            setVisibleJobs(prev => prev + 6);
            setIsLoadingMore(false);
        }, 800);
    };

    return (
        <main className="min-h-screen bg-[#f8f9fa] pt-8 pb-16">
            <div className="w-full px-10">
                {/* 3 Column Layout */}
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                    
                    {/* Left Column: Profile (Sticky) */}
                    <ProfileSidebar />

                    {/* Center Column: Jobs Feed (Scrolls naturally with main page) */}
                    <div className="flex-[2] w-full min-w-0 flex flex-col gap-6">
                        {/* Tabs Navigation */}
                        <div className="bg-white border border-gray-200 rounded-2xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.03)] overflow-hidden">
                            <div className="overflow-x-auto no-scrollbar scroll-smooth relative w-full" style={{ padding: '6px' }}>
                                <div className="flex w-max gap-1">
                                    {tabs.map((tab) => (
                                        <button 
                                            key={tab}
                                            onClick={(e) => {
                                                setLoading(true);
                                                setVisibleJobs(6);
                                                setActiveTab(tab);
                                                e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                                            }}
                                            className={`px-6 py-2.5 text-[15px] font-bold rounded-xl whitespace-nowrap shrink-0 transition-all duration-300 relative ${
                                                activeTab === tab 
                                                    ? 'bg-blue-50 text-blue-600 border border-blue-100/50 shadow-sm' 
                                                    : 'text-gray-500 border border-transparent hover:text-gray-800 hover:bg-gray-50'
                                            }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                    {/* Critical invisible spacer to completely block browsers from cutting off the final tab */}
                                    <div className="w-1.5 shrink-0" aria-hidden="true"></div>
                                </div>
                            </div>
                        </div>

                        {/* Loading Skeleton */}
                        {loading ? (
                            <div className="space-y-6">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="bg-white border border-gray-100 rounded-2xl p-4 lg:p-5 shadow-sm flex flex-col gap-3 relative overflow-hidden">
                                        {/* Shimmer overlay */}
                                        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent z-10"></div>
                                        
                                        <div className="flex justify-between items-start mb-1">
                                            <div className="flex gap-4 items-center">
                                                <div className="w-12 h-12 bg-gray-100 rounded-[14px]"></div>
                                                <div>
                                                    <div className="h-4 bg-gray-200 rounded-md w-48 mb-2"></div>
                                                    <div className="h-3 bg-gray-100 rounded-md w-32"></div>
                                                </div>
                                            </div>
                                            <div className="w-5 h-5 bg-gray-100 rounded-md"></div>
                                        </div>
                                        <div className="flex gap-2 mt-3">
                                            <div className="h-6 w-20 bg-gray-50 rounded-lg"></div>
                                            <div className="h-6 w-24 bg-gray-50 rounded-lg"></div>
                                            <div className="h-6 w-24 bg-gray-50 rounded-lg"></div>
                                        </div>
                                        <div className="space-y-2.5 mt-2">
                                            <div className="h-2.5 bg-gray-50 rounded w-full"></div>
                                            <div className="h-2.5 bg-gray-50 rounded w-[85%]"></div>
                                        </div>
                                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                                            <div className="h-3 w-32 bg-gray-100 rounded-md"></div>
                                            <div className="h-8 w-24 bg-gray-100 rounded-xl"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            /* Actual Feed Content */
                            <div className="space-y-6">
                                {Array.from({ length: visibleJobs }, (_, j) => j + 1).map((i) => (
                                    <JobCard key={i} i={i} />
                                ))}

                                {/* Inline Mini Skeletons for Load More Action */}
                                {isLoadingMore && (
                                    <div className="space-y-6 pt-2">
                                        {[1, 2].map((i) => (
                                            <div key={`load-${i}`} className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col gap-4 relative overflow-hidden">
                                                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent z-10"></div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <div className="flex gap-4 items-center">
                                                        <div className="w-14 h-14 bg-gray-100 rounded-2xl"></div>
                                                        <div>
                                                            <div className="h-5 bg-gray-200 rounded-md w-48 mb-2.5"></div>
                                                            <div className="h-4 bg-gray-100 rounded-md w-32"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="text-center pt-8 pb-10">
                                    <button 
                                        onClick={handleLoadMore}
                                        disabled={isLoadingMore}
                                        className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 text-gray-700 font-bold text-[15px] rounded-full hover:bg-gray-50 hover:text-blue-600 transition-colors shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {isLoadingMore ? (
                                            <><div className="w-4 h-4 rounded-full border-2 border-gray-300 border-t-blue-600 animate-spin"></div> Loading...</>
                                        ) : (
                                            `Load More ${activeTab}`
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Recommended & Ads (Sticky) */}
                    <RecommendedJobs />
                </div>
            </div>
            
            {/* Inject Custom Tailwind Shimmer Animation */}
            <style jsx global>{`
                @keyframes shimmer {
                    100% {
                        transform: translateX(100%);
                    }
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </main>
    );
}
