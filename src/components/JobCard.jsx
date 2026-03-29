'use client';

import { Bookmark, Building2, MapPin, Briefcase, Clock, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function JobCard({ i = 1 }) {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-4 lg:p-5 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_15px_-5px_rgba(0,0,0,0.08)] transition-all duration-300 group relative hover:-translate-y-0.5">
            <div className="absolute top-5 right-5">
                <button className="text-gray-300 hover:text-blue-500 transition-colors" aria-label="Save Job">
                    <Bookmark size={20} />
                </button>
            </div>
            
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-50/50 border border-blue-100/50 rounded-[14px] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Building2 size={22} className="text-blue-600" />
                </div>
                <div className="pt-0.5">
                    <Link href={`/job/${i}`}>
                        <h3 className="font-black text-[17px] text-gray-800 group-hover:text-blue-600 transition-colors cursor-pointer pr-10 leading-tight">
                            {i % 2 === 0 ? 'Senior Frontend Engineer (React/Next.js)' : 'Lead Full Stack Architect'}
                        </h3>
                    </Link>
                    <p className="text-[14px] text-gray-500 font-semibold mt-1 hover:underline cursor-pointer flex items-center gap-1.5">
                        {i % 2 === 0 ? 'TechVision Innovations' : 'Nexus Digital Systems'}
                        <CheckCircle2 size={13} className="text-blue-500" />
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-4">
                <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-200 rounded-lg text-[13px] text-gray-700 font-semibold">
                    <MapPin size={13} className="text-gray-400" /> Remote
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-200 rounded-lg text-[13px] text-gray-700 font-semibold">
                    <Briefcase size={13} className="text-gray-400" /> Full Time
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 border border-green-200/50 rounded-lg text-[13px] font-bold">
                    $130k - $160k
                </span>
            </div>

            <p className="mt-3 text-[14px] text-gray-500 line-clamp-2 leading-snug font-medium pr-4">
                We are looking for an experienced developer to join our growing tech team. You will be responsible for defining architecture, reviewing code, routing strategy, and ensuring performance is top tier. 
            </p>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <span className="text-[13px] text-gray-400 font-semibold flex items-center gap-1.5">
                    <Clock size={14} /> Posted {i * 2 || 2} days ago
                </span>
                <Link href={`/job/${i}`}>
                    <button className="px-5 py-2 bg-blue-50 text-blue-600 font-bold text-[13.5px] rounded-xl hover:bg-[#275df5] hover:text-white transition-colors shadow-sm cursor-pointer">
                        Quick Apply
                    </button>
                </Link>
            </div>
        </div>
    );
}
