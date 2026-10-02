// 'use client'
// import React from 'react'
// import Inputsection from '@/app/components/input'
// import { useState } from 'react'
// import Preview from '@/app/components/preview'

// const Page = () => {

//    const itemlist = {
//     colors: '',
//           template: '',
//            personalInfo: {
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//         location: '',    
//       portfolioUrl: '',  
//       summary: '',
//     },
//      education: [
//       { id: crypto.randomUUID(), school: '', degree: '', graduationDate: '' }
//     ],
//     skills: [] as string[], // Array of strings: ['React', 'Node.js']
//     experience: [
//       { id:crypto.randomUUID() , company: '', role: '', startDate: '', endDate: '', description: '' }
//     ],
   
//       }
//   const [resumeitems, setresumeitems] = useState(itemlist)
//   const InputsectionWithProps = Inputsection as unknown as React.ComponentType<{
//     resumeitem: typeof resumeitems
//     setresumeitem: React.Dispatch<React.SetStateAction<typeof resumeitems>>
//   }>

//   return (
//    <div className='mt-8 w-full'>
// <h1 className='text-3xl font-bold text-center text-sky-600 '>Build Resume</h1>
// <div className="flex flex-col md:flex-row gap-10 p-10 mb-30">
// <Inputsection resumeitem={resumeitems} setresumeitem={setresumeitems} />
// <div>
// <Preview {...resumeitems} />
// <div className="mt-4 flex flex-wrap items-center gap-3 p-4  border border-slate-200 rounded-2xl shadow-sm">
//   {/* 1. Preview Button (Orange / Secondary Color) */}
//   <button
//     type="button"
//     onClick={() => console.log("Preview template triggered")}
//     className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200"
//   >
//     👁️ Preview Resume
//   </button>

//   {/* 2. Download Button (Sky Blue / Primary Color) */}
//   <button
//     type="button"
//     onClick={() => console.log("Download PDF triggered")}
//     className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-200"
//   >
//     📥 Download PDF
//   </button>

//   {/* 3. Save to History Button (Sky Blue Outline / Variant) */}
//   <button
//     type="button"
//     onClick={() => console.log("Save to history triggered")}
//     className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-sky-600 bg-white border border-sky-200 hover:bg-sky-50 active:bg-sky-100 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-100"
//   >
//     💾 Save to History
//   </button>
// </div>

// </div>
// </div>
//    </div>
//   )
// }

// export default Page






// 'use client'
// import React from 'react'
// import Inputsection from '@/app/components/input'
// import { useState,useRef } from 'react'
// import Preview from '@/app/components/preview'

// const Page = () => {

//   const itemlist = {
//     colors: '',
//     template: '',
//     personalInfo: {
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       location: '',    
//       portfolioUrl: '',  
//       summary: '',
//     },
//     education: [
//       { id: crypto.randomUUID(), school: '', degree: '', graduationDate: '' }
//     ],
//     skills: [] as string[], // Array of strings: ['React', 'Node.js']
//     experience: [
//       { id: crypto.randomUUID() , company: '', role: '', startDate: '', endDate: '', description: '' }
//     ],
//   }

//   const [resumeitems, setresumeitems] = useState(itemlist)
//   // 1. ADDED: State to control opening/closing the modal overlay layout canvas
//   const [showFullPreview, setShowFullPreview] = useState(false)


//    const resumePrintRef = useRef<HTMLDivElement>(null)

//     const handleDownloadPDF = async () => {
//     if (!resumePrintRef.current) return;

//     // Dynamically load the library strictly on the client side to bypass Next.js SSR build errors
//     const html2pdf = (await import('html2pdf.js')).default;

//     const options = {
//       margin: 0,
//       filename: `${resumeitems.personalInfo.firstName || 'Resume'}_CV.pdf`,
//       image: { type: 'jpeg' as const, quality: 0.98 },
//       html2canvas: { scale: 2, useCORS: true },
//       jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const },
//     };

//     html2pdf().set(options).from(resumePrintRef.current).save();
//   };

//   return (
//     <div className='mt-8 w-full'>
//       <h1 className='text-3xl font-bold text-center text-sky-600 '>Build Resume</h1>
      
//       <div className="flex flex-col md:flex-row gap-10 p-10 mb-30">
//         <Inputsection resumeitem={resumeitems} setresumeitem={setresumeitems} />
        
//         <div>
//           {/* Default inline layout panel preview tracker */}
//           <div  ref={resumePrintRef} className='bg-white'>

//           <Preview {...resumeitems} />
//           </div>
          
//           <div className="mt-4 flex flex-wrap items-center gap-3 p-4 border border-slate-200 rounded-2xl shadow-sm">
//             {/* 1. Preview Button (Orange / Secondary Color) */}
//             <button
//               type="button"
//               // 2. FIXED: Tied button handler directly to opening our full-screen overlay state toggle
//               onClick={() => setShowFullPreview(true)}
//               className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200"
//             >
//               👁️ Preview Resume
//             </button>

//             {/* 2. Download Button (Sky Blue / Primary Color) */}
//             <button
//               type="button"
//               onClick={handleDownloadPDF}
//               className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-200"
//             >
//               📥 Download PDF
//             </button>

//             {/* 3. Save to History Button (Sky Blue Outline / Variant) */}
//             <button
//               type="button"
//               onClick={() => console.log("Save to history triggered")}
//               className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-sky-600 bg-white border border-sky-200 hover:bg-sky-50 active:bg-sky-100 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-100"
//             >
//               💾 Save to History
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ========================================================== */}
//       {/* 3. CONDITIONAL OVERLAY MODAL FOR LIVE FULL PREVIEW          */}
//       {/* ========================================================== */}
//       {showFullPreview && (
//         <div 
//           className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 md:p-8 overflow-y-auto cursor-zoom-out"
//           onClick={() => setShowFullPreview(false)} // Closes if user clicks outside container background
//         >
//           <div 
//             className="relative w-full max-w-5xl bg-slate-100 p-4 md:p-8 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh] cursor-default"
//             onClick={(e) => e.stopPropagation()} // Prevents closing modal if clicking inside the document view
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
//               <Preview {...resumeitems} />
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
import Inputsection from '@/app/components/input'
import { useState, useRef } from 'react'
import Preview from '@/app/components/preview'

const Page = () => {

  const itemlist = {
    colors: '',
    template: '',
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',    
      portfolioUrl: '',  
      summary: '',
    },
    education: [
      { id: crypto.randomUUID(), school: '', degree: '', graduationDate: '' }
    ],
    skills: [] as string[], // Array of strings: ['React', 'Node.js']
    experience: [
      { id: crypto.randomUUID() , company: '', role: '', startDate: '', endDate: '', description: '' }
    ],
  }

  const [resumeitems, setresumeitems] = useState(itemlist)
  const [showFullPreview, setShowFullPreview] = useState(false)
  const resumePrintRef = useRef<HTMLDivElement>(null)

  // FIXED & INTEGRATED: Modernized color-safe PDF download function
  const handleDownloadPDF = async () => {
    if (!resumePrintRef.current) return;

    try {
      // Dynamically load the library on the client side to prevent server-side errors
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

  return (
    <div className='mt-8 w-full'>
      <h1 className='text-3xl font-bold text-center text-sky-600 '>Build Resume</h1>
      
      <div className="flex flex-col md:flex-row gap-10 p-10 mb-30">
        <Inputsection resumeitem={resumeitems} setresumeitem={setresumeitems} />
        
        <div>
          {/* Default inline layout panel preview tracker container */}
          <div ref={resumePrintRef} className='bg-white'>
            <Preview {...resumeitems} />
          </div>
          
          <div className="mt-4 flex flex-wrap items-center gap-3 p-4 border border-slate-200 rounded-2xl shadow-sm">
            {/* 1. Preview Button (Orange / Secondary Color) */}
            <button
              type="button"
              onClick={() => setShowFullPreview(true)}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200"
            >
              👁️ Preview Resume
            </button>

            {/* 2. Download Button (Sky Blue / Primary Color) */}
            <button
              type="button"
              onClick={handleDownloadPDF} // <-- Connected directly to the new handler
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-200"
            >
              📥 Download PDF
            </button>

            {/* 3. Save to History Button (Sky Blue Outline / Variant) */}
            <button
              type="button"
              onClick={() => console.log("Save to history triggered")}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-sky-600 bg-white border border-sky-200 hover:bg-sky-50 active:bg-sky-100 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-100"
            >
              💾 Save to History
            </button>
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
              <Preview {...resumeitems} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Page
