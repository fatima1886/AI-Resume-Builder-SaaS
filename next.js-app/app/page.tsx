

import Image from "next/image";
import React from 'react';

const Home = () => {
  return (
    <div className="w-full mt-[-100] py-[400px] min-h-[calc(100vh-4rem)] flex flex-col lg:flex-row justify-between items-center px-6 sm:px-12 lg:px-24 bg-white bg-gradient-to-r from-white via-sky-100/30 to-sky-100 gap-16 py-12 pt-12 lg:py-0">
      <div className="flex-1 max-w-xl text-left flex flex-col items-start pt-40 pb-20">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-amber-500 mb-6">
          <span className="text-[#f59e0b]">✨</span> Next-Gen AI Workspace
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif tracking-normal text-slate-900 leading-[1.15]">
          Build a <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-[#2563eb] to-[#7c3aed]">
            Premium Resume
          </span> <br />
          in Minutes.
        </h1>

        <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg">
          Input your raw details, apply smart structural AI text optimizations, and view your changes live on an interactive blueprint template grid.
        </p>

        <div className="mt-8 flex items-center gap-4 w-full sm:w-auto">
          <a
            href="/resume-builder"
            className="w-full sm:w-auto text-center bg-[#0284c7] hover:bg-sky-700 text-white font-medium px-8 py-4 rounded-xl shadow-lg shadow-sky-600/20 transition transform active:scale-98"
          >
            Sign In
          </a>

          <a
            href="/resume-builder"
            className="w-full sm:w-auto text-center text-sky-700 font-medium px-8 py-4 rounded-xl shadow-lg shadow-sky-600/20 transition transform active:scale-98 border border-[#0284c7] bg-white hover:bg-sky-50"
          >
            Sign Up
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center w-full relative">
        <div className="relative w-full mt-12 aspect-[1/1.414] bg-white rounded-2xl shadow-2xl shadow-sky-900/15 border border-slate-200/60 p-4 transition-all duration-300 transform rotate-5 hover:rotate-0 hover:scale-[1.02] cursor-pointer">
          <Image
            src="/hero-resume.svg.png"
            alt="Premium Resume Blueprint Workspace"
            fill
            sizes="(max-width: 1000px) 100vw, (max-width: 1600px) 80vw, 33vw"
            className="object-contain p-2 shadow-md transition-shadow duration-300 hover:shadow-2xl hover:shadow-amber-500"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

