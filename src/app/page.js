'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#0a0a0c] text-white flex flex-col items-center justify-center p-8 overflow-hidden relative">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[150px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[150px] rounded-full animate-pulse delay-700"></div>

      <div className="z-10 text-center max-w-4xl space-y-8">
        <div className="inline-block px-4 py-1.5 mb-2 text-sm font-medium tracking-wide uppercase bg-white/5 border border-white/10 rounded-full backdrop-blur-sm animate-fade-in">
          Next.js 15 + CI/CD Ready
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none animate-slide-up">
          <span className="bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-transparent">
            Automate Everything.
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Scale Everywhere.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300">
          A high-performance codebase architecture integrated with professional CI/CD pipelines, 
          Jest testing, and automated GitHub Pages deployment.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 animate-fade-in delay-500">
          <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all transform hover:scale-105 shadow-2xl shadow-white/10">
            Get Started
          </button>
          <a 
            href="https://github.com/sonubhosle/CI-CD" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all backdrop-blur-md"
          >
            Github Source
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 text-xs font-mono text-gray-600 uppercase tracking-[0.2em]">
        Design by Antigravity AI
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-slide-up { animation: slide-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>
    </main>
  );
}
