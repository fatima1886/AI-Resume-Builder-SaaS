import React from 'react'
import Link from 'next/link'
import App from 'next/app'

// Mock Data - replace this with your real server data/props later
const mockResumes = [
  { id: '1', title: 'Software Engineer Resume', updatedAt: '2 hours ago', completion: 90 },
  { id: '2', title: 'Product Manager Draft', updatedAt: '3 days ago', completion: 45 },
]

const DashboardHeader = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 py-8 space-y-10 relative z-40'>
      
      {/* 1. Greet Component Row */}
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-6 border-b border-slate-100'>
        <div className='space-y-1.5'>
          <h1 className='text-3xl font-bold tracking-tight text-slate-900 md:text-4xl'>
            Welcome Back, <span className='text-sky-600 font-extrabold'>Fatima</span>
          </h1>
          <p className='text-base text-slate-500'>
            Ready to land your dream job? Pick up right where you left off or start fresh.
          </p>
        </div>

        <div className='flex items-center shrink-0'>
          <Link href={"/dashboard/create"}  className='w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-medium text-sm py-2.5 px-5 rounded-xl shadow-sm transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0'>
            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Build New Resume
          </Link>
        </div>
      </div>

      {/* 2. Resume History Section */}
      <div className='space-y-4'>
        <div className='flex items-center justify-between'>
          <h2 className='text-xl font-bold text-slate-900'>Recent Resumes</h2>
          <button className='text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors'>
            View all ({mockResumes.length})
          </button>
        </div>

        {mockResumes.length === 0 ? (
          /* Empty State if user has no resumes */
          <div className='flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center bg-slate-50/50'>
            <p className='text-slate-500 font-medium mb-1'>No resumes built yet</p>
            <p className='text-sm text-slate-400 mb-4'>Create your first professional resume in minutes.</p>
          </div>
        ) : (
          /* Grid list of active drafts */
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {mockResumes.map((resume) => (
              <div 
                key={resume.id} 
                className='group relative flex flex-col justify-between p-5 border border-slate-200 rounded-2xl bg-white hover:border-sky-500 hover:shadow-md hover:shadow-sky-50/50 transition-all duration-200 cursor-pointer'
              >
                <div>
                  {/* Miniature Resume Icon Representation */}
                  <div className='w-10 h-12 bg-slate-50 border border-slate-200 rounded mb-4 flex items-center justify-center group-hover:bg-sky-50 group-hover:border-sky-200 transition-colors'>
                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-slate-400 group-hover:text-sky-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                  </div>
                  
                  <h3 className='font-semibold text-slate-900 group-hover:text-sky-600 transition-colors'>
                    {resume.title}
                  </h3>
                  <p className='text-xs text-slate-400 mt-1'>Edited {resume.updatedAt}</p>
                </div>

                {/* Micro Progress Bar (Shows completion status) */}
                <div className='mt-6 space-y-1.5'>
                  <div className='flex justify-between text-xs font-medium text-slate-500'>
                    <span>Strength</span>
                    <span>{resume.completion}%</span>
                  </div>
                  <div className='w-full h-1.5 bg-slate-100 rounded-full overflow-hidden'>
                    <div 
                      className='h-full bg-sky-500 transition-all duration-300' 
                      style={{ width: `${resume.completion}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default DashboardHeader
