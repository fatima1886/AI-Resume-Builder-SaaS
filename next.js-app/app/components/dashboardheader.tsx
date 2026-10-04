



// 'use client'
// import React, { useState, useEffect } from 'react'
// import { useResume } from '../context/ResumeContext'
// import Link from 'next/link'

// // Define the blueprint structure matching your saved history records
// interface SavedResume {
//   id: string
//   title: string
//   updatedAt: string
//   content: any // Holds the full resumeitem state structure
// }

// const DashboardHeader = () => {
//   const {resumeitems , setresumeitems} = useResume()
//   const [resumes, setResumes] = useState<SavedResume[]>([])
//   const [isLoading, setIsLoading] = useState(true)

//   // 1. Client-Side Lifecycle Load Handler
//   useEffect(() => {
//     try {
//       const storedHistory = localStorage.getItem('resume_history')
//       if (storedHistory) {
//         setResumes(JSON.parse(storedHistory))
//       }
//     } catch (error) {
//       console.error("Failed parsing localized data registry registry:", error)
//     } finally {
//       setIsLoading(false)
//     }
//   }, [])

//   // 2. Clear individual items out of localized browser memory storage registry
//   const handleDeleteResume = (e: React.MouseEvent, targetId: string) => {
//     e.stopPropagation() // Prevents clicking the delete icon from accidentally triggering card actions
    
//     if (!confirm("Are you sure you want to permanently delete this resume from your history?")) return;

//     const updatedList = resumes.filter(item => item.id !== targetId)
//     setResumes(updatedList)
//     localStorage.setItem('resume_history', JSON.stringify(updatedList))
//   }

//   const handleEdit = (targetId: string) => {
//     const selectedResume = resumes.find(item => item.id === targetId)
//     if (selectedResume) {
//       setresumeitems(selectedResume.content)

//     }
//   }

//   return (
//     <div className='max-w-6xl mx-auto px-4 py-8 space-y-10 relative z-40'>
      
//       {/* 1. Greet Component Row */}
//       <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-6 border-b border-slate-100'>
//         <div className='space-y-1.5'>
//           <h1 className='text-3xl font-bold tracking-tight text-slate-900 md:text-4xl'>
//             Welcome Back, <span className='text-sky-600 font-extrabold'>Fatima</span>
//           </h1>
//           <p className='text-base text-slate-500'>
//             Ready to land your dream job? Pick up right where you left off or start fresh.
//           </p>
//         </div>

//         <div className='flex items-center shrink-0'>
//           <Link href={"/dashboard/create"} className='w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-medium text-sm py-2.5 px-5 rounded-xl shadow-sm transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0'>
//             <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//             </svg>
//             Build New Resume
//           </Link>
//         </div>
//       </div>

//       {/* 2. Resume History Section */}
//       <div className='space-y-4'>
//         <div className='flex items-center justify-between'>
//           <h2 className='text-xl font-bold text-slate-900'>Recent Resumes</h2>
//           <span className='text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full'>
//             Total: {resumes.length}
//           </span>
//         </div>

//         {isLoading ? (
//           /* Loading Placeholder State */
//           <div className='text-center py-12 text-slate-400 text-sm font-medium animate-pulse'>
//             Reading local workspace history...
//           </div>
//         ) : resumes.length === 0 ? (
//           /* Empty State if user has no resumes saved in their browser */
//           <div className='flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center bg-slate-50/50'>
//             <p className='text-slate-500 font-medium mb-1'>No resumes built yet</p>
//             <p className='text-sm text-slate-400 mb-4'>Create your first professional resume in minutes.</p>
//             <Link href="/dashboard/create" className='text-sm font-bold text-sky-600 hover:text-sky-700 underline'>
//               Get started now &rarr;
//             </Link>
//           </div>
//         ) : (
//           /* Grid list of dynamic local storage drafts */
//           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
//             {resumes.map((resume) => (
//               <div 
//                 key={resume.id} 
//                 className='group relative flex flex-col justify-between p-5 border border-slate-200 rounded-2xl bg-white hover:border-sky-500 hover:shadow-md hover:shadow-sky-50/50 transition-all duration-200 cursor-pointer'
//               >
//                 <div>
//                   <div className='flex items-start justify-between mb-4'>
//                     {/* Miniature Resume Icon Representation */}
//                     <div className='w-10 h-12 bg-slate-50 border border-slate-200 rounded flex items-center justify-center group-hover:bg-sky-50 group-hover:border-sky-200 transition-colors'>
//                       <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-slate-400 group-hover:text-sky-600">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
//                       </svg>
//                     </div>

//                     {/* Trash Delete Action Asset */}
//                     <button
//                       type="button"
//                       onClick={(e) => handleDeleteResume(e, resume.id)}
//                       className='p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all active:scale-95'
//                       title="Delete Resume"
//                     >
//                       <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
//                       </svg>
//                     </button>
//                   </div>
                  
//                   <h3 className='font-semibold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1'>
//                     {resume.title}
//                   </h3>
//                   <p className='text-xs text-slate-400 mt-1'>Saved on {resume.updatedAt}</p>
//                 </div>

//                 {/* Status Indicator Badge Asset */}
//                 <div className='mt-6 pt-3 border-t border-slate-50 flex items-center justify-between'>
//                   <span className='text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md'>
//                     Stored in Browser
//                   </span>
//                   <Link href='/dashboard/create' onClick={() => handleEdit(resume.id)} className='text-xs font-semibold text-sky-600 group-hover:underline flex items-center gap-0.5'>
//                     Edit &rarr;
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//     </div>
//   )
// }

// export default DashboardHeader





'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useResume } from '../context/ResumeContext'
import { History, Plus, Trash2, FileText, ArrowRight, Sparkles, LayoutGrid } from 'lucide-react'
// 1. IMPORT THE CLERK HOOK AT THE TOP
import { useUser } from '@clerk/nextjs'

interface SavedResume {
  id: string
  title: string
  updatedAt: string
  content: any 
}

const DashboardHeader = () => {

  const {setresumeitems} = useResume()
  // 2. INITIALIZE THE USER DATA MATRIX OBJ VIA HOOK
  const { isLoaded, isSignedIn, user } = useUser()
  
  const [resumes, setResumes] = useState<SavedResume[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem('resume_history')
      if (storedHistory) setResumes(JSON.parse(storedHistory))
    } catch (error) {
      console.error("Failed parsing localized data:", error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleDeleteResume = (e: React.MouseEvent, targetId: string) => {
    e.stopPropagation()
    if (!confirm("Are you sure you want to permanently delete this resume from your history?")) return
    const updatedList = resumes.filter(item => item.id !== targetId)
    setResumes(updatedList)
    localStorage.setItem('resume_history', JSON.stringify(updatedList))
  }


  const handleEdit = (targetId: string) => {
    const selectedResume = resumes.find(item => item.id === targetId)
    if (selectedResume) {
      setresumeitems(selectedResume.content)

    }
  }

  // 3. DEFINE A DYNAMIC DISPLAY NAME STRING BASE
  // Fallback string logic resolves to 'Guest User' if names aren't set in their profile configuration
  let displayName = "Guest User"
  if (isLoaded && isSignedIn && user) {
    displayName = user.fullName || user.firstName || "User"
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 relative z-40 bg-slate-50/30 rounded-3xl min-h-screen'>
      
      {/* 1. Modern SaaS Welcome Banner */}
      <div className='relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-10 rounded-3xl shadow-xl shadow-slate-950/20 border border-slate-800 flex flex-col md:flex-row md:items-center md:justify-between gap-8'>
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className='space-y-3 relative z-10 max-w-2xl'>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-full backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" /> AI POWERED PLATFORM
          </div>
          
          {/* 4. RENDER THE REACTIVE DYNAMIC USERNAME TEXT ASSET */}
          <h1 className='text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl'>
            Welcome Back, <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-300 font-black'>{displayName}</span>
          </h1>
          
          <p className='text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal'>
            Ready to stand out? Create a beautiful, high-converting resume instantly or launch right back into your active drafts below.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto relative z-10'>
          <a 
            href="#history-section" 
            className='w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/60 hover:bg-slate-800 active:bg-slate-700/80 text-slate-200 font-semibold text-sm py-3 px-6 rounded-2xl border border-slate-700 transition-all duration-200 shadow-md backdrop-blur-sm group'
          >
            <History className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition-colors" />
            View History
          </a>

          <Link 
            href={"/dashboard/create"} 
            className='w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm py-3 px-6 rounded-2xl shadow-lg shadow-sky-600/20 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0 active:scale-98'
          >
            <Plus className="w-4 h-4" />
            Build New Resume
          </Link>
        </div>
      </div>

      {/* 2. Dynamic Local Workspace Grid Section */}
      <div id="history-section" className='space-y-6 scroll-mt-10'>
        <div className='flex items-center justify-between pb-3 border-b border-slate-200/60'>
          <div className='flex items-center gap-3'>
            <div className="p-2 bg-sky-50 border border-sky-100 rounded-xl">
              <LayoutGrid className="w-5 h-5 text-sky-600" />
            </div>
            <h2 className='text-2xl font-bold tracking-tight text-slate-900'>Your Saved Documents</h2>
          </div>
          <span className='text-xs font-bold text-sky-700 bg-sky-50 border border-sky-100 px-3 py-1.5 rounded-xl shadow-inner'>
            Active Drafts: {resumes.length}
          </span>
        </div>

        {isLoading ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[1, 2, 3].map((n) => (
              <div key={n} className='h-48 border border-slate-200 rounded-3xl bg-white p-6 space-y-4 animate-pulse shadow-sm'>
                <div className="flex justify-between"><div className="w-10 h-12 bg-slate-100 rounded-xl" /><div className="w-8 h-8 bg-slate-100 rounded-xl" /></div>
                <div className="h-5 bg-slate-100 rounded-lg w-2/3" />
                <div className="h-4 bg-slate-100 rounded-lg w-1/3" />
              </div>
            ))}
          </div>
        ) : resumes.length === 0 ? (
          <div className='flex flex-col items-center justify-center border-2 border-dashed border-slate-200/80 rounded-3xl p-16 text-center bg-white shadow-inner max-w-xl mx-auto mt-6'>
            <div className='w-16 h-16 bg-sky-50 border border-sky-100 rounded-2xl flex items-center justify-center mb-6 text-sky-600 shadow-sm'>
              <FileText className="w-8 h-8" />
            </div>
            <h3 className='text-lg font-bold text-slate-900 mb-1.5'>Your local vault is clean</h3>
            <p className='text-sm text-slate-500 max-w-sm mb-6 leading-relaxed'>
              Resumes built here are locked safely inside your device browser storage, keeping your credentials 100% private.
            </p>
            <Link href="/dashboard/create" className='inline-flex items-center gap-1.5 text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 py-2.5 px-5 rounded-xl transition-all shadow-md shadow-sky-600/10'>
              Create First Template <Plus className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {resumes.map((resume) => (
              <div 
                key={resume.id} 
                className='group relative flex flex-col justify-between p-6 border border-slate-200 rounded-3xl bg-white hover:border-sky-500 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer shadow-sm'
              >
                <div>
                  <div className='flex items-start justify-between mb-5'>
                    <div className='w-12 h-14 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center group-hover:bg-sky-50 group-hover:border-sky-200 transition-all duration-300 shadow-sm'>
                      <FileText className="w-6 h-6 text-slate-400 group-hover:text-sky-600 transition-colors" />
                    </div>

                    <button
                      type="button"
                      onClick={(e) => handleDeleteResume(e, resume.id)}
                      className='p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 border border-transparent hover:border-red-100 transition-all active:scale-90 shadow-sm bg-slate-50/50'
                      title="Delete Resume"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <h3 className='font-bold text-slate-900 group-hover:text-sky-600 tracking-tight text-lg transition-colors line-clamp-1'>
                    {resume.title}
                  </h3>
                  <p className='text-xs font-medium text-slate-400 mt-1.5 flex items-center gap-1.5'>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-300" />
                    Saved {resume.updatedAt}
                  </p>
                </div>

                <div className='mt-6 pt-4 border-t border-slate-100 flex items-center justify-between'>
                  <span className='inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-lg shadow-sm'>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Browser Stored
                  </span>
                  
                  <Link href='/dashboard/create' onClick={() => handleEdit(resume.id)} className='inline-flex items-center gap-1 text-xs font-bold text-sky-600 bg-sky-50 group-hover:bg-sky-600 group-hover:text-white border border-sky-100 group-hover:border-transparent px-3 py-1.5 rounded-xl transition-all duration-300 shadow-sm'>
                    Edit Draft &rarr;
                  </Link>
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
