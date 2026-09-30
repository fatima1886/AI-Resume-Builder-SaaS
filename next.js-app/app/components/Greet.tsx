// import React from 'react'

// const Greet = () => {
//   return (
//     <div className='flex flex-col md:flex-row gap-4 pb-30'>
// <div>
//     <h1 className='text-4xl text-slate-900'>Welcome Back, <span className='text-sky-500'>Fatima</span></h1>
//     <p>Ready to land your dream job? Choose your next step</p>
// </div>
// <div>
//     <button className='bg-sky-500 hover:bg-sky-600 py-10 px-20'>Start Resume</button>
// </div>
//     </div>
//   )
// }

// export default Greet


import React from 'react'

const Greet = () => {
  return (
    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-8 border-b border-slate-100 mb-8 pb-20'>
      {/* Left Column: Heading and Subheading */}
      <div className='space-y-1.5'>
        <h1 className='text-3xl font-bold tracking-tight text-slate-900 md:text-4xl'>
          Welcome Back, <span className='text-sky-600 font-extrabold'>Fatima</span>
        </h1>
        <p className='text-base text-slate-500'>
          Ready to land your dream job? Pick up right where you left off or start fresh.
        </p>
      </div>

      {/* Right Column: Call to Action Button */}
      <div className='flex items-center shrink-0'>
        <button className='w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-medium text-sm py-2.5 px-5 rounded-xl shadow-sm shadow-sky-100 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]'>
          <svg 
            xmlns="http://w3.org" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Build New Resume
        </button>
      </div>
    </div>
  )
}

export default Greet
