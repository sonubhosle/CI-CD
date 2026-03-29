'use client';

import Link from 'next/link';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8 mt-12" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className=" w-full  px-10 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-2 font-black text-[26px] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500" aria-label="Nova Jobs Home">
                            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-500 text-white shadow-lg shadow-blue-500/30 transform -rotate-6">
                                <Zap size={18} strokeWidth={2.5} className="fill-white/20" />
                            </div>
                            Nova
                        </Link>
                        <p className="text-[15px] text-gray-500 leading-relaxed max-w-xs">
                            Connecting brilliant minds with world-class opportunities. Discover your next career defining moment today.
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#275df5] hover:bg-blue-50 transition-colors" aria-label="Follow Nova on Twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#275df5] hover:bg-blue-50 transition-colors" aria-label="Follow Nova on LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#275df5] hover:bg-blue-50 transition-colors" aria-label="Follow Nova on Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#275df5] hover:bg-blue-50 transition-colors" aria-label="Follow Nova on Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Navigation - Candidates */}
                    <div>
                        <h3 className="font-bold text-gray-800 text-[16px] mb-6">For Candidates</h3>
                        <nav aria-label="Candidate Links">
                            <ul className="flex flex-col gap-4 text-[15px] text-gray-500 font-medium">
                                <li><Link href="#" className="hover:text-blue-600 transition-colors">Search Jobs</Link></li>
                                <li><Link href="#" className="hover:text-blue-600 transition-colors">Browse Companies</Link></li>
                                <li><Link href="#" className="hover:text-blue-600 transition-colors">Salary Estimator</Link></li>
                                <li><Link href="#" className="hover:text-blue-600 transition-colors">Career Advice</Link></li>
                                <li><Link href="#" className="hover:text-blue-600 transition-colors">Resume Builder</Link></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Navigation - Employers */}
                    <div>
                        <h3 className="font-bold text-gray-800 text-[16px] mb-6">For Employers</h3>
                        <nav aria-label="Employer Links">
                            <ul className="flex flex-col gap-4 text-[15px] text-gray-500 font-medium">
                                <li><Link href="#" className="hover:text-blue-600 transition-colors">Post a Job</Link></li>
                                <li><Link href="#" className="hover:text-blue-600 transition-colors">Search Resumes</Link></li>
                                <li><Link href="#" className="hover:text-blue-600 transition-colors">Talent Solutions</Link></li>
                                <li><Link href="#" className="hover:text-blue-600 transition-colors">Employer Brand</Link></li>
                                <li><Link href="#" className="hover:text-blue-600 transition-colors">Pricing</Link></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Contact info */}
                    <div>
                        <h3 className="font-bold text-gray-800 text-[16px] mb-6">Contact Us</h3>
                        <address className="not-italic flex flex-col gap-4 text-[15px] text-gray-500 font-medium">

                            <div className="flex items-center gap-3 mt-1">
                                <Phone size={18} className="text-blue-500 shrink-0" aria-hidden="true" />
                                <a href="tel:+11234567890" className="hover:text-blue-600 transition-colors" aria-label="Call +1 (123) 456-7890">+1 (123) 456-7890</a>
                            </div>
                            <div className="flex items-center gap-3 mt-1">
                                <Mail size={18} className="text-blue-500 shrink-0" aria-hidden="true" />
                                <a href="mailto:contact@novajobs.com" className="hover:text-blue-600 transition-colors" aria-label="Email contact@novajobs.com">contact@novajobs.com</a>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin size={20} className="text-blue-500 shrink-0 mt-0.5" aria-hidden="true" />
                                <span>123 Innovation Drive, Tech District<br />San Francisco, CA 94105</span>
                            </div>
                        </address>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[14px] text-gray-400 font-medium text-center md:text-left">
                        &copy; {new Date().getFullYear()} Nova Technologies Inc. All rights reserved.
                    </p>
                    <nav aria-label="Legal Links" className="flex items-center gap-6 text-[14px] text-gray-400 font-medium">
                        <Link href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-gray-700 transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-gray-700 transition-colors">Accessibility</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}