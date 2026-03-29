import { Building2, MapPin, Briefcase, Clock, CheckCircle2, Bookmark, Star, AlertTriangle, ExternalLink, Share2, CornerUpRight, ArrowRight } from 'lucide-react';
import RecommendedJobs from '@/components/RecommendedJobs';
import JobCard from '@/components/JobCard';

// Required for Next.js 'output: export' static site generation on dynamic [id] routes
export async function generateStaticParams() {
    // Generates static HTML pages for job IDs 1 through 20 at build time
    return Array.from({ length: 20 }, (_, i) => ({
        id: String(i + 1),
    }));
}

export default function JobDetailsPage({ params }) {
    return (
        <main className="min-h-screen bg-[#f8f9fa] pt-8 pb-16">
            <div className="w-full px-10">
                {/* 2 Column Layout exactly as requested (Center + Right) */}
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                    
                    {/* Main Content Column */}
                    <div className="flex-[2] w-full min-w-0 flex flex-col gap-6">

                        {/* Top Header Card */}
                        <div className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)]">
                            <div className="flex justify-between items-start gap-4 flex-col sm:flex-row">
                                <div className="pt-2">
                                    <h1 className="font-black text-2xl lg:text-3xl text-gray-800 tracking-tight leading-tight mb-2">
                                        Senior Frontend Developer
                                    </h1>
                                    <p className="text-[16px] text-gray-600 font-medium flex items-center gap-1.5 cursor-pointer hover:underline mb-6">
                                        Nexus Connectors <CheckCircle2 size={16} className="text-blue-500" />
                                    </p>

                                    <div className="flex flex-wrap items-center gap-4 text-[14px] text-gray-600 font-medium">
                                        <div className="flex items-center gap-1.5">
                                            <Briefcase size={16} className="text-gray-400" />
                                            <span>3 - 5 years</span>
                                        </div>
                                        <div className="w-[1px] h-4 bg-gray-300"></div>
                                        <div className="flex items-center gap-1.5 text-gray-500">
                                            <span>Not Disclosed</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-[14px] text-gray-600 mt-3 font-medium">
                                        <MapPin size={16} className="text-gray-400" />
                                        <span>Mumbai</span>
                                    </div>
                                </div>

                                <div className="w-20 h-20 bg-gradient-to-br from-indigo-50 to-blue-50/50 border border-blue-100/50 rounded-2xl flex items-center justify-center shrink-0 shadow-sm mt-2 sm:mt-0">
                                    <Building2 size={32} className="text-blue-600" />
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-gray-500 w-full sm:w-auto">
                                    <span className="font-medium whitespace-nowrap"><strong className="text-gray-700">Posted:</strong> 3 days ago</span>
                                    <span className="font-medium whitespace-nowrap"><strong className="text-gray-700">Openings:</strong> 1</span>
                                    <span className="font-medium whitespace-nowrap"><strong className="text-gray-700">Applicants:</strong> 100+</span>
                                </div>

                                <div className="flex items-center gap-3 w-full sm:w-auto">
                                    <button className="flex-1 sm:flex-none px-6 py-2.5 bg-white border border-gray-300 text-gray-700 font-bold text-[14px] rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                                        Save
                                    </button>
                                    <button className="flex-1 sm:flex-none px-8 py-2.5 bg-[#275df5] text-white font-bold text-[14px] rounded-xl hover:bg-blue-700 transition-all shadow-[0_4px_15px_rgba(39,93,245,0.25)]">
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Job Highlights Match */}
                        <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 border border-gray-200 rounded-3xl p-6 lg:p-8">
                            <h3 className="font-bold text-gray-800 text-[18px] mb-4">Job highlights</h3>
                            <ul className="space-y-3.5 mb-8">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                                    <p className="text-[15px] text-gray-600 leading-relaxed font-medium">
                                        Bachelor&apos;s degree in CS or IT with 3+ years React.js and web development experience. Knowledge of React.js, Next.js, and GraphQL.
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                                    <p className="text-[15px] text-gray-600 leading-relaxed font-medium">
                                        Develop and implement responsive UI components using React.js. Troubleshoot and debug code, improve front-end performance.
                                    </p>
                                </li>
                            </ul>

                            <h4 className="font-bold text-gray-800 text-[15px] mb-4">Job match score</h4>
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="flex items-center gap-1.5 text-[13px] font-bold text-green-700 bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
                                    <CheckCircle2 size={16} className="text-green-600" /> Early Applicant
                                </span>
                                <span className="flex items-center gap-1.5 text-[13px] font-bold text-green-700 bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
                                    <CheckCircle2 size={16} className="text-green-600" /> Keyskills
                                </span>
                                <span className="flex items-center gap-1.5 text-[13px] font-bold text-green-700 bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
                                    <CheckCircle2 size={16} className="text-green-600" /> Location
                                </span>
                                <span className="flex items-center gap-1.5 text-[13px] font-bold text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-200">
                                    Work Experience
                                </span>
                            </div>
                        </div>

                        {/* Job Description Full Details */}
                        <div className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.03)]">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-gray-800 text-[18px]">Job description</h3>
                                <button className="text-blue-600 text-[14px] font-bold hover:underline flex items-center gap-1">
                                    Report this job
                                </button>
                            </div>

                            <div className="space-y-6 text-[15px] text-gray-600 leading-relaxed font-medium">
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-2">About the job</h4>
                                    <p>We are looking for a skilled React.js developer to join our front-end development team. In this role, you will be responsible for developing and implementing user interface components using React.js concepts and workflows such as Redux, Flux, and Webpack. You will also be responsible for profiling and improving front-end performance and documenting our front-end codebase.</p>
                                    <p className="mt-3">To ensure success as a React.js developer, you should have in-depth knowledge of JavaScript and React concepts, excellent front-end coding skills, and a good understanding of progressive web applications. Ultimately, a top-class React.js developer should be able to design and build modern user interface components to enhance application performance.</p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-gray-800 mb-2">Responsibilities:</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Meeting with the development team to discuss user interface ideas and applications.</li>
                                        <li>Reviewing application requirements and interface designs.</li>
                                        <li>Identifying web-based user interactions.</li>
                                        <li>Developing and implementing highly responsive user interface components using react concepts.</li>
                                        <li>Troubleshooting interface software and debugging application codes.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10 pt-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-[14px]">
                                <div className="flex items-start gap-4">
                                    <span className="text-gray-500 w-32 shrink-0">Role:</span>
                                    <span className="font-bold text-gray-800">Front End Developer</span>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="text-gray-500 w-32 shrink-0">Industry Type:</span>
                                    <span className="font-bold text-gray-800 hover:underline cursor-pointer">IT Services & Consulting</span>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="text-gray-500 w-32 shrink-0">Department:</span>
                                    <span className="font-bold text-gray-800">Engineering - Software & QA</span>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="text-gray-500 w-32 shrink-0">Employment Type:</span>
                                    <span className="font-bold text-gray-800">Full Time, Permanent</span>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="text-gray-500 w-32 shrink-0">Role Category:</span>
                                    <span className="font-bold text-gray-800">Software Development</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <h4 className="font-bold text-gray-800 mb-4">Key Skills</h4>
                                <div className="flex flex-wrap items-center gap-3">
                                    {['Frontend Development', 'CSS', 'REACT.js', 'project management', 'JavaScript', 'HTML'].map((skill) => (
                                        <span key={skill} className="px-4 py-2 hover:bg-gray-100 border border-gray-200 rounded-full text-[14px] text-gray-700 font-bold transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm">
                                            {skill === 'Frontend Development' ? <Star size={14} className="text-amber-500"/> : null}
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* About Company Widget */}
                        <div className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.03)] focus-within:ring-2">
                            <h3 className="font-bold text-gray-800 text-[18px] mb-4">About company</h3>
                            <h4 className="font-black text-[#275df5] text-[16px] hover:underline cursor-pointer flex items-center gap-1 w-max mb-1">
                                NEXUS CONNECT INNOVATIONS LIMITED <ExternalLink size={14} />
                            </h4>
                            <p className="text-[14px] text-gray-500 mb-4 font-medium">A leading global technology and IT enterprise</p>
                            <p className="text-[14px] text-gray-600 font-medium flex items-center gap-2">
                                <span className="font-bold text-gray-800">Address:</span> Unit 4, Tech Park, Cyber City
                            </p>
                        </div>

                        {/* Beware of Imposters */}
                        <div className="bg-[#fff9f9] border border-red-100 rounded-3xl p-6 flex flex-col sm:flex-row gap-4 items-start shadow-sm">
                            <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0">
                                <AlertTriangle size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-red-800 text-[15px] mb-2">Beware of imposters!</h4>
                                <p className="text-[14px] text-red-700/80 leading-relaxed font-medium">
                                    Nova does not endorse a job or an interview in exchange of money. Fraudsters may ask you to pay in the pretext of registration fee, Refundable Fee... <span className="font-bold text-blue-600 cursor-pointer hover:underline">Read more</span>
                                </p>
                            </div>
                        </div>

                        {/* Similar Jobs Map */}
                        <div className="mt-6 mb-2">
                            <h2 className="font-black text-xl text-gray-800 mb-6 flex items-center justify-between">
                                Similar jobs 
                                <span className="text-[14px] font-bold text-blue-600 cursor-pointer hover:underline flex items-center gap-1">View all <ArrowRight size={14}/></span>
                            </h2>
                            <div className="space-y-5">
                                {[1, 2, 3].map((i) => (
                                    <JobCard key={i} i={i} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sticky Recommended Jobs Widget */}
                    <RecommendedJobs />
                </div>
            </div>
        </main>
    );
}
