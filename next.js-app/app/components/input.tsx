"use client"

import React from 'react'
import { useState } from 'react'

type ResumeItem = {
  template: string
  personalInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
    location: string
    portfolioUrl: string
    summary: string
  }
  education: { id: string; school: string; degree: string; graduationDate: string }[]
  skills: string[]
  experience: {
    id: string
    company: string
    role: string
    startDate: string
    endDate: string
    description: string
  }[]
}

type InputsectionProps = {
  resumeitem: ResumeItem
  setresumeitem: React.Dispatch<React.SetStateAction<ResumeItem>>
}

const Inputsection = ({resumeitem, setresumeitem}: InputsectionProps) => {
//     const itemlist = {
//         template: '',
//          personalInfo: {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//       location: '',    
//     portfolioUrl: '',  
//     summary: '',
//   },
//    education: [
//     { id: crypto.randomUUID(), school: '', degree: '', graduationDate: '' }
//   ],
//   skills: [] as string[], // Array of strings: ['React', 'Node.js']
//   experience: [
//     { id:crypto.randomUUID() , company: '', role: '', startDate: '', endDate: '', description: '' }
//   ],
 
//     }
// const [resumeitem, setresumeitem] = useState(itemlist)
const [skillInput, setSkillInput] = useState('')

function handleAdd() {
 setresumeitem(prev => ({
    ...prev, // Copy all other sections intact (like personalInfo, experience, etc.)
    education: [
      ...prev.education, // Copy all existing education entries
      { id: crypto.randomUUID(), school: '', degree: '', graduationDate: '' } // Add the new entry safely
    ]
  }));
}

function hangleEducation(currentid: string, parameter: string, value: string) {
  setresumeitem(prev =>({
    ...prev,
    education: prev.education.map(item =>
      item.id === currentid ? { ...item, [parameter]: value } : item
    )
  }));
}

function handleExperience() {
  setresumeitem(prev => ({
    ...prev,
    experience: [
      ...prev.experience,
      { id: crypto.randomUUID(), company: '', role: '', startDate: '', endDate: '', description: '' }
    ]
  }));
}


function handlechangeexp(specificid:string, parameter:string , value:string) {
  setresumeitem(prev => ({
    ...prev,
    experience: prev.experience.map(item =>
      item.id === specificid ? { ...item, [parameter]: value } : item
    )
  }));
}



function removeitem(targetid: string) {
  setresumeitem(prev => ({
    ...prev,
    experience: prev.experience.filter(item => item.id !== targetid)
  }));
}

function handleremove(targetindex: number) {
  setresumeitem(prev => ({
    ...prev,
    skills: prev.skills.filter((_, index) => index !== targetindex)
  }))
}



  return (
    <div className="space-y-8">
      <h1>Cammand section</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {['Modern', 'Minimalist', 'Professional'].map((tpl) => {
          const value = tpl.toLocaleLowerCase();
          const isSelected = resumeitem.template === value;
console.log(resumeitem);
          return (
            <label
              key={tpl}
              className={`relative flex flex-col p-4 border rounded-xl cursor-pointer transition-all group ${
                isSelected
                  ? 'border-sky-500 bg-sky-50/30 ring-2 ring-sky-100'
                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
              }`}
            >
              <input
                type="radio"
                name="template"
                value={value}
                checked={isSelected}
                onChange={(e) => setresumeitem((prev) => ({ ...prev, template: e.target.value }))}
                className="absolute top-4 right-4 accent-sky-600"
              />
              <span className="font-semibold text-slate-800 text-sm">{tpl}</span>
              <span className="text-xs text-slate-400 mt-1">Clean corporate design</span>
            </label>
          );
        })}
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
            <input type="text" name="firstName" onChange={(e) => setresumeitem((prev) => ({ ...prev, personalInfo: { ...prev.personalInfo, firstName: e.target.value } }))} placeholder="Ali" className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all text-slate-800" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Last Name</label>
            <input type="text" name="lastName" onChange={(e)=>setresumeitem((prev)=>({...prev, personalInfo: {...prev.personalInfo, lastName: e.target.value}}))} placeholder="Raza" className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all text-slate-800" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Email Address</label>
            <input type="email" name="email" onChange={(e)=>setresumeitem((prev)=> ({...prev, personalInfo: {...prev.personalInfo, email: e.target.value}}))} placeholder="Ali@example.com" className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all text-slate-800" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Phone Number</label>
            <input type="tel" name="phone" onChange={(e)=>setresumeitem((prev)=>({...prev, personalInfo: {...prev.personalInfo, phone: e.target.value}}))} placeholder="+92 300 1234567" className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all text-slate-800" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Location</label>
            <input type="text" name="location" onChange={(e)=>setresumeitem((prev)=>({...prev, personalInfo: {...prev.personalInfo, location: e.target.value}}))} placeholder="Gulberg, Lahore" className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all text-slate-800" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Portfolio URL</label>
            <input type="text" name="portfolioUrl" onChange={(e)=>setresumeitem((prev)=>({...prev, personalInfo: {...prev.personalInfo, portfolioUrl:e.target.value}}))} placeholder="www.google.com" className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all text-slate-800" />
          </div>

          <div className="md:col-span-2 flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Professional Summary</label>
            <textarea name="summary" rows={4} onChange={(e)=>setresumeitem((prev)=>({...prev, personalInfo: {...prev.personalInfo, summary: e.target.value }}))} placeholder="Briefly describe your career goals and standout capabilities..." className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all text-slate-800 resize-none" />
          </div>
        </div>
      </div>

      {/* ================================ */}
      {/* Education */}
      {/* ====================================== */}
      <div className="flex flex-col gap-4 p-6 mt-6 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Education History</h2>
          <button
            type="button"
            className="text-xs font-semibold text-sky-600 hover:text-sky-700 transition-colors flex items-center gap-1"
            onClick={handleAdd}
          >
            + Add Education
          </button>
        </div>
{resumeitem.education.map((obj) => (
            <div key={obj.id} className="p-4 bg-white border border-slate-200 rounded-2xl relative flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-xs font-semibold text-slate-600 tracking-wide uppercase">School / University</label>
                  <input
                    type="text"
                    name="school"
                    placeholder="e.g. Stanford University"
                    value={obj.school}
                    onChange={(e) => {
                      hangleEducation(obj.id, 'school', e.target.value)
                    }}
                    className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all text-slate-800"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Degree / Major</label>
                  <input
                    type="text"
                    name="degree"
                    placeholder="e.g. M.S. in Data Science"
                    value={obj.degree}
                    onChange={(e) => {
                      hangleEducation(obj.id, 'degree', e.target.value)
                    }}
                    className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all text-slate-800"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Graduation Date</label>
                  <input
                    type="text"
                    name="graduationDate"
                    placeholder="e.g. May 2026"
                    value={obj.graduationDate}
                    onChange={(e) => {
                      hangleEducation(obj.id, 'graduationDate', e.target.value)
                    }}
                    className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all text-slate-800"
                  />
                </div>
              </div>
            </div>
          ))}
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
          <input type="text" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} placeholder="Add a skill (e.g., React, TypeScript)" className="flex-1 px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all text-slate-800" />
          <button
            type="button"
            className="text-xs font-semibold text-sky-600 hover:text-sky-700 transition-colors flex items-center gap-1"
            onClick={() => {
              const skill = skillInput.trim()
              if (!skill) return
              setresumeitem((prev) => ({ ...prev, skills: [...prev.skills, skill] }))
              setSkillInput('')
            }}
          >
            + Add skill
          </button>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {resumeitem.skills.map((skill,index) => (
            <span key={skill} className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 font-medium text-xs rounded-lg transition-all cursor-pointer group">
              {skill}
              <span onClick={()=> handleremove(index)} className="text-slate-400 group-hover:text-red-500 text-[10px]">✕</span>
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
          <button
            type="button"
            className="text-xs font-semibold text-sky-600 hover:text-sky-700 transition-colors flex items-center gap-1"
            onClick={handleExperience}
          >
            + Add Job
          </button>
        </div>

{resumeitem.experience.map((item) => (
        <div key={item.id} className="p-5 border border-slate-200 rounded-xl bg-slate-50/30 space-y-4 relative group">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Company Name</label>
              <input value={item.company} type="text" placeholder="e.g., Google" onChange={(e)=> handlechangeexp(item.id , 'company' , e.target.value)} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 transition-all text-slate-800" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Job Role / Title</label>
              <input value={item.role ?? ''}  type="text"  onChange={(e)=> handlechangeexp(item.id , 'role' , e.target.value)} placeholder="e.g., Frontend Engineer" className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 transition-all text-slate-800" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Start Date</label>
              <input value={item.startDate} type="date"  onChange={(e)=> handlechangeexp(item.id , 'startDate' , e.target.value)} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 transition-all text-slate-800" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-600 tracking-wide uppercase">End Date</label>
              <input value={item.endDate} type="date"  onChange={(e)=> handlechangeexp(item.id , 'endDate' , e.target.value)} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 transition-all text-slate-800" />
            </div>

            <div className="md:col-span-2 flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Job Description / Achievements</label>
              <textarea value={item.description}  onChange={(e)=> handlechangeexp(item.id , 'description' , e.target.value)} rows={3} placeholder="Describe your primary ownership metrics and tech implementations..." className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 transition-all text-slate-800 resize-none" />
            </div>
          </div>

          <button onClick={()=>removeitem(item.id)} type="button" className="absolute top-2 right-2 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity text-xs p-1">
            Remove Item
          </button>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Inputsection;

