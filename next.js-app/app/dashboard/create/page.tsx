
// 'use client'
// import React from 'react'
// import { useResume } from '@/app/context/ResumeContext'
// import { Eye, Download, Save, ArrowRightLeft } from 'lucide-react'
// import Link from 'next/link'
// import Inputsection from '@/app/components/input'
// import { useState, useRef } from 'react'
// import Preview from '@/app/components/preview'

// const Page = () => {

//   // const itemlist = {
//   //   colors: '',
//   //   template: '',
//   //   personalInfo: {
//   //     firstName: '',
//   //     lastName: '',
//   //     email: '',
//   //     phone: '',
//   //     location: '',    
//   //     portfolioUrl: '',  
//   //     summary: '',
//   //   },
//   //   education: [
//   //     { id: crypto.randomUUID(), school: '', degree: '', graduationDate: '' }
//   //   ],
//   //   skills: [] as string[], // Array of strings: ['React', 'Node.js']
//   //   experience: [
//   //     { id: crypto.randomUUID() , company: '', role: '', startDate: '', endDate: '', description: '' }
//   //   ],
//   // }

//   // const [resumeitems, setresumeitems] = useState(itemlist)
//   const {resumeitems, setresumeitems} = useResume()
//   const [showFullPreview, setShowFullPreview] = useState(false)
//   const resumePrintRef = useRef<HTMLDivElement>(null)

//   // FIXED & INTEGRATED: Modernized color-safe PDF download function
//   const handleDownloadPDF = async () => {
//     if (!resumePrintRef.current) return;

//     try {
//       const html2PDF = (await import('jspdf-html2canvas')).default;

//       await html2PDF(resumePrintRef.current, {
//         jsPDF: {
//           unit: 'mm',
//           format: 'a4',
//           orientation: 'portrait'
//         },
//         html2canvas: {
//           scale: 2,        // Ensures high-resolution, sharp text scaling
//           useCORS: true,   // Bypasses cross-origin image policy limitations
//           logging: false   // Disables framework logs from cluttering the terminal
//         },
//         imageType: 'image/jpeg',
//         imageQuality: 0.98,
//         margin: {
//           top: 0,
//           right: 0,
//           bottom: 0,
//           left: 0
//         },
//         output: `${resumeitems.personalInfo.firstName || 'Resume'}_CV.pdf`
//       });
//     } catch (error) {
//       console.error("PDF Generation failed:", error);
//     }
//   };

//   // NEW: Save to LocalStorage History function
//  function handleSaveToHistory() {
  
//  }


//   function removeitem() {
//     setresumeitems((current) => ({
//       ...current,
//       colors: '',
//       template: '',
//       personalInfo: {
//         ...current.personalInfo,
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         location: '',
//         portfolioUrl: '',
//         summary: '',
//       },
//       education: current.education.map((item) => ({
//         ...item,
//         school: '',
//         degree: '',
//         graduationDate: '',
//       })),
//       skills: [],
//       experience: current.experience.map((item) => ({
//         ...item,
//         company: '',
//         role: '',
//         startDate: '',
//         endDate: '',
//         description: '',
//       })),
//     }))
//   }

//   return (
//     <div className='mt-8 w-full'>
//       <h1 className='text-3xl font-bold text-center text-sky-600 '>Build Resume</h1>
      
//       <div className="flex flex-col md:flex-row gap-10 p-10 mb-30">
//         <Inputsection/>
        
//         <div>
//           {/* Default inline layout panel preview tracker container */}
//           <div ref={resumePrintRef} className='bg-white'>
//             <Preview />
//           </div>
          
//           <div className="mt-5 flex flex-wrap items-center gap-3.5 p-4 bg-slate-50/50 border border-slate-200 rounded-2xl shadow-sm">
//   {/* 1. Preview Button (Orange / Secondary Color) */}
//   <button
//     type="button"
//     onClick={() => setShowFullPreview(true)}
//     className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-xl transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-orange-200"
//   >
//     <Eye className="w-4 h-4 shrink-0" />
//     Preview Resume
//   </button>

//   {/* 2. Download Button (Sky Blue / Primary Color) */}
//   <button
//     type="button"
//     onClick={handleDownloadPDF} 
//     className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-xl transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-sky-200"
//   >
//     <Download className="w-4 h-4 shrink-0" />
//     Download PDF
//   </button>

//   {/* 3. Save to History Button (Sky Blue Outline / Variant) */}
//   <button
//     type="button"
//     onClick={handleSaveToHistory} 
//     className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-sky-600 bg-white border border-sky-200 hover:bg-sky-50 active:bg-sky-100 rounded-xl transition-all duration-200 shadow-sm hover:border-sky-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-sky-100"
//   >
//     <Save className="w-4 h-4 shrink-0" />
//     Save to History
//   </button>

//   {/* 4. Move to History Button (Sky Blue Outline / Variant) */}
//   <Link
//   onClick={removeitem}
//     type="button"
//     href='/dashboard'
//     className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-sky-600 bg-white border border-sky-200 hover:bg-sky-50 active:bg-sky-100 rounded-xl transition-all duration-200 shadow-sm hover:border-sky-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-sky-100"
//   >
//     <ArrowRightLeft className="w-4 h-4 shrink-0" />
//     Move to History
//   </Link>
// </div>

//         </div>
//       </div>

//       {/* ========================================================== */}
//       {/* CONDITIONAL OVERLAY MODAL FOR LIVE FULL PREVIEW             */}
//       {/* ========================================================== */}
//       {showFullPreview && (
//         <div 
//           className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 md:p-8 overflow-y-auto cursor-zoom-out"
//           onClick={() => setShowFullPreview(false)}
//         >
//           <div 
//             className="relative w-full max-w-5xl bg-slate-100 p-4 md:p-8 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh] cursor-default"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Elegant Fixed Top-Right Close Button Action Asset */}
//             <button
//               type="button"
//               onClick={() => setShowFullPreview(false)}
//               className="absolute top-4 right-4 z-10 h-9 w-9 flex items-center justify-center rounded-full bg-slate-900/80 hover:bg-black text-white font-bold transition-all shadow-lg text-sm"
//               title="Close Preview"
//             >
//               ✕
//             </button>

//             {/* Container mapping active preview component layout with all live reactive properties */}
//             <div className="pt-6">
//               <Preview />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Page




'use client'
import React from 'react'
import { useResume } from '@/app/context/ResumeContext'
import { Eye, Download, Save, ArrowRightLeft } from 'lucide-react'
import Link from 'next/link'
import Inputsection from '@/app/components/input'
import { useState, useRef } from 'react'
import Preview from '@/app/components/preview'

const Page = () => {
  const { resumeitems, setresumeitems } = useResume()
  const [showFullPreview, setShowFullPreview] = useState(false)
  const resumePrintRef = useRef<HTMLDivElement>(null)

  // FIXED & INTEGRATED: Modernized color-safe PDF download function
  const handleDownloadPDF = async () => {
    if (!resumePrintRef.current) return;
    const { firstName, lastName, email, phone } = resumeitems.personalInfo;
    
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim()) {
      alert('⚠️ Missing Required Fields! Please fill out your First Name, Last Name, Email, and Phone Number before downloading.');
      return; // Stop execution right here
    }

    try {
      const html2PDF = (await import('jspdf-html2canvas')).default;

      await html2PDF(resumePrintRef.current, {
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait'
        },
        html2canvas: {
          scale: 2,        // Ensures high-resolution, sharp text scaling
          useCORS: true,   // Bypasses cross-origin image policy limitations
          logging: false   // Disables framework logs from cluttering the terminal
        },
        imageType: 'image/jpeg',
        imageQuality: 0.98,
        margin: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        output: `${resumeitems.personalInfo.firstName || 'Resume'}_CV.pdf`
      });
    } catch (error) {
      console.error("PDF Generation failed:", error);
    }
  };

  // RESTORED, VALIDATED & OPTIMIZED: LocalStorage history backup handler
  function handleSaveToHistory() {
    // 1. Validation Check: Ensure core personal layout details are filled
    const { firstName, lastName, email, phone } = resumeitems.personalInfo;
    
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim()) {
      alert('⚠️ Missing Required Fields! Please fill out your First Name, Last Name, Email, and Phone Number before saving.');
      return; // Stop execution right here
    }

    try {
      // 2. Fetch current workspace history array out of local browser registry
      const existingHistoryJson = localStorage.getItem('resume_history');
      const existingHistory = existingHistoryJson ? JSON.parse(existingHistoryJson) : [];

      // 3. Format a unified entry package wrapping the global context content
      const resumeToSave = {
        id: Date.now().toString(), // Generates an explicit routing reference key
        title: `${firstName || 'Untitled'}'s Resume`,
        updatedAt: new Date().toLocaleDateString(),
        content: resumeitems // Backs up the entire reactive form structure
      };

      // 4. Push data package to the beginning of the history list array
      existingHistory.unshift(resumeToSave);

      // 5. Save back into the browser local memory workspace register stringify matrix
      localStorage.setItem('resume_history', JSON.stringify(existingHistory));

      // 6. Success UI Alert Notification Feedback
      alert('📝 Resume successfully saved to your browser history!');
    } catch (error) {
      console.error("Error writing data matrix to local storage context:", error);
      alert('⚠️ Failed to save resume history to browser local storage.');
    }
  }

  function removeitem() {
    setresumeitems((current) => ({
      ...current,
      colors: '',
      template: '',
      personalInfo: {
        ...current.personalInfo,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        portfolioUrl: '',
        summary: '',
      },
      education: current.education.map((item) => ({
        ...item,
        school: '',
        degree: '',
        graduationDate: '',
      })),
      skills: [],
      experience: current.experience.map((item) => ({
        ...item,
        company: '',
        role: '',
        startDate: '',
        endDate: '',
        description: '',
      })),
    }))
  }

  return (
    <div className='mt-8 w-full'>
      <h1 className='text-3xl font-bold text-center text-sky-600 '>Build Resume</h1>
      
      <div className="flex flex-col md:flex-row gap-10 p-10 mb-30">
        <Inputsection/>
        
        <div>
          {/* Default inline layout panel preview tracker container */}
          <div ref={resumePrintRef} className='bg-white'>
            <Preview />
          </div>
          
          <div className="mt-5 flex flex-wrap items-center gap-3.5 p-4 bg-slate-50/50 border border-slate-200 rounded-2xl shadow-sm">
            {/* 1. Preview Button (Orange / Secondary Color) */}
            <button
              type="button"
              onClick={() => setShowFullPreview(true)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-xl transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-orange-200"
            >
              <Eye className="w-4 h-4 shrink-0" />
              Preview Resume
            </button>

            {/* 2. Download Button (Sky Blue / Primary Color) */}
            <button
              type="button"
              onClick={handleDownloadPDF} 
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-xl transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-sky-200"
            >
              <Download className="w-4 h-4 shrink-0" />
              Download PDF
            </button>

            {/* 3. Save to History Button (Sky Blue Outline / Variant) */}
            <button
              type="button"
              onClick={handleSaveToHistory} 
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-sky-600 bg-white border border-sky-200 hover:bg-sky-50 active:bg-sky-100 rounded-xl transition-all duration-200 shadow-sm hover:border-sky-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-sky-100"
            >
              <Save className="w-4 h-4 shrink-0" />
              Save to History
            </button>

            {/* 4. Move to History Link Button (Sky Blue Outline / Variant) */}
            <Link
              href='/dashboard'
              onClick={removeitem}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-sky-600 bg-white border border-sky-200 hover:bg-sky-50 active:bg-sky-100 rounded-xl transition-all duration-200 shadow-sm hover:border-sky-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-sky-100"
            >
              <ArrowRightLeft className="w-4 h-4 shrink-0" />
              Move to History
            </Link>
          </div>

        </div>
      </div>

      {/* ========================================================== */}
      {/* CONDITIONAL OVERLAY MODAL FOR LIVE FULL PREVIEW             */}
      {/* ========================================================== */}
      {showFullPreview && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 md:p-8 overflow-y-auto cursor-zoom-out"
          onClick={() => setShowFullPreview(false)}
        >
          <div 
            className="relative w-full max-w-5xl bg-slate-100 p-4 md:p-8 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh] cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Elegant Fixed Top-Right Close Button Action Asset */}
            <button
              type="button"
              onClick={() => setShowFullPreview(false)}
              className="absolute top-4 right-4 z-10 h-9 w-9 flex items-center justify-center rounded-full bg-slate-900/80 hover:bg-black text-white font-bold transition-all shadow-lg text-sm"
              title="Close Preview"
            >
              ✕
            </button>

            {/* Container mapping active preview component layout with all live reactive properties */}
            <div className="pt-6">
              <Preview />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Page
