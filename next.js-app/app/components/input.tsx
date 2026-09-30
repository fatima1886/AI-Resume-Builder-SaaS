"use client"

import React from 'react'
import { useState } from 'react'

const Inputsection = () => {
    const itemlist = {
        template: '',
         personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
      location: '',    
    portfolioUrl: '',  
    linkedinUrl: '',
    githubUrl: '',
    summary: '',
  },
  skills: [], // Array of strings: ['React', 'Node.js']
  experience: [
    { id: '1', company: '', role: '', startDate: '', endDate: '', description: '' }
  ],
  education: [
    { id: '1', school: '', degree: '', graduationDate: '' }
  ]
    }
const [resumeitem, setresumeitem] = useState(itemlist)
  return (
    <div>
        <h1>Cammand section</h1>
        <div>
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {['Modern', 'Minimalist', 'Professional'].map((tpl) => (
            <label key={tpl} className="relative flex flex-col p-4 border border-slate-200 rounded-xl cursor-pointer hover:border-sky-500 hover:bg-sky-50/20 transition-all group">
              <input type="radio" name="template" value={tpl.toLowerCase()} className="absolute top-4 right-4 accent-sky-600" />
              <span className="font-semibold text-slate-800 text-sm">{tpl} Layout</span>
              <span className="text-xs text-slate-400 mt-1">Clean corporate design</span>
            </label>
          ))}
        </div>
      </div>

      {/* =========================================================================
          2. PERSONAL INFORMATION SECTION
         ========================================================================= */}
      <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Personal Information</h2>
          <p className="text-sm text-slate-500">Enter your core contact and professional profile details.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600 tracking-wide uppercase">First Name</label>
            <input type="text" name="firstName" placeholder="Fatima" className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all text-slate-800" />
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Last Name</label>
            <input type="text" name="lastName" placeholder="Ali" className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all text-slate-800" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Email Address</label>
            <input type="email" name="email" placeholder="fatima@example.com" className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all text-slate-800" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Phone Number</label>
            <input type="tel" name="phone" placeholder="+92 300 1234567" className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all text-slate-800" />
          </div>

          <div className="md:col-span-2 flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Professional Summary</label>
            <textarea name="summary" rows={4} placeholder="Briefly describe your career goals and standout capabilities..." className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all text-slate-800 resize-none" />
          </div>
        </div>

      {/* =========================================================================
          3. SKILLS SECTION
         ========================================================================= */}
      <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Core Skills</h2>
          <p className="text-sm text-slate-500">List core tech tools, frameowrks or certifications.</p>
        </div>
        
        <div className="flex gap-2">
          <input type="text" placeholder="Add a skill (e.g., React, TypeScript)" className="flex-1 px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all text-slate-800" />
          <button type="button" className="px-5 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-xl transition-colors shrink-0">
            Add
          </button>
        </div>

        {/* Visual Pill Badges container placeholder */}
        <div className="flex flex-wrap gap-2 pt-2">
          {['React', 'Next.js', 'Tailwind CSS'].map((skill) => (
            <span key={skill} className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 font-medium text-xs rounded-lg transition-all cursor-pointer group">
              {skill}
              <span className="text-slate-400 group-hover:text-red-500 text-[10px]">✕</span>
            </span>
          ))}
        </div>
      </div>

      {/* =========================================================================
          4. WORK EXPERIENCE SECTION
         ========================================================================= */}
      <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Work Experience</h2>
            <p className="text-sm text-slate-500">Detail your dynamic career positions and history.</p>
          </div>
          <button type="button" className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors uppercase tracking-wider">
            ➕ Add Job
          </button>
        </div>

        {/* Individual Item Block */}
        <div className="p-5 border border-slate-200 rounded-xl bg-slate-50/30 space-y-4 relative group">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Company Name</label>
              <input type="text" placeholder="e.g., Google" className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 transition-all text-slate-800" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Job Role / Title</label>
              <input type="text" placeholder="e.g., Frontend Engineer" className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 transition-all text-slate-800" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Start Date</label>
              <input type="date" className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 transition-all text-slate-800" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-600 tracking-wide uppercase">End Date</label>
              <input type="date" className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 transition-all text-slate-800" />
            </div>

            <div className="md:col-span-2 flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Job Description / Achievements</label>
              <textarea rows={3} placeholder="Describe your primary ownership metrics and tech implementations..." className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 transition-all text-slate-800 resize-none" />
            </div>
          </div>
          
          <button type="button" className="absolute top-2 right-2 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity text-xs p-1">
            Remove Item
          </button>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Inputsection