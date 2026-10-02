// components/templates/ProfessionalTemplate.tsx
// export default function ProfessionalTemplate({ data }: { data: any }) {
//   const { personalInfo, education, skills, experience } = data;

//   return (
//     <div className="w-full max-w-4xl mx-auto bg-white shadow-xl min-h-[297mm] p-10 text-neutral-800 font-sans border border-neutral-200">
//       {/* Top Header Section */}
//       <div className="flex justify-between items-end border-b-2 border-neutral-900 pb-4 mb-6">
//         <div>
//           <h1 className="text-3xl font-bold tracking-tight text-neutral-900 uppercase">
//             {personalInfo.firstName || "First"} {personalInfo.lastName || "Last"}
//           </h1>
//         </div>
//         <div className="text-right text-xs text-neutral-600 space-y-0.5">
//           {personalInfo.email && <p>{personalInfo.email}</p>}
//           {personalInfo.phone && <p>{personalInfo.phone}</p>}
//           {personalInfo.location && <p>{personalInfo.location}</p>}
//           {personalInfo.portfolioUrl && <p className="underline text-neutral-700">{personalInfo.portfolioUrl}</p>}
//         </div>
//       </div>

//       {/* Core Body Container */}
//       <div className="space-y-6">
//         {/* Summary */}
//         {personalInfo.summary && (
//           <div>
//             <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">Professional Summary</h2>
//             <p className="text-xs leading-relaxed text-neutral-700">{personalInfo.summary}</p>
//           </div>
//         )}

//         {/* Professional Experience */}
//         <div>
//           <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-3">Experience</h2>
//           <div className="space-y-4">
//             {experience.map((exp: any) => (
//               <div key={exp.id} className="text-xs">
//                 <div className="flex justify-between font-bold text-neutral-900">
//                   <span>{exp.role || "Position Title"}</span>
//                   <span className="font-normal text-neutral-600">{exp.startDate || "Date"} — {exp.endDate || "Date"}</span>
//                 </div>
//                 <div className="italic text-neutral-700 mb-1">{exp.company || "Company Details"}</div>
//                 <p className="text-neutral-600 whitespace-pre-line leading-relaxed">{exp.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Education */}
//         <div>
//           <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-3">Education</h2>
//           <div className="space-y-2">
//             {education.map((edu: any) => (
//               <div key={edu.id} className="flex justify-between items-start text-xs">
//                 <div>
//                   <span className="font-bold text-neutral-900">{edu.degree || "Degree Plan"}</span>
//                   <span className="text-neutral-400 mx-2">|</span>
//                   <span className="text-neutral-700">{edu.school || "Institution"}</span>
//                 </div>
//                 <span className="text-neutral-600">{edu.graduationDate}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Key Expertise (Skills) */}
//         <div>
//           <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">Skills & Expertise</h2>
//           <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-neutral-700">
//             {skills.length > 0 ? (
//               skills.map((skill: string, index: number) => (
//                 <div key={index} className="flex items-center gap-1.5">
//                   <span className="inline-block w-1 h-1 bg-neutral-900 rounded-full" />
//                   <span>{skill}</span>
//                 </div>
//               ))
//             ) : (
//               <span className="text-neutral-400 italic">No skills indexed</span>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// components/templates/ProfessionalTemplate.tsx
export default function ProfessionalTemplate({ data }: { data: any }) {
  const { personalInfo, education, skills, experience } = data;

  return (
    <div className="w-full max-w-[210mm] mx-auto bg-white shadow-xl h-fit text-slate-800 font-sans border border-slate-200 rounded-md overflow-hidden">
      
      {/* Executive Header Block with Corporate Slate Background */}
      <div className="bg-slate-900 text-white p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b-4 border-indigo-600">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight uppercase">
            {personalInfo.firstName || "First"}{" "}
            <span className="text-indigo-400">{personalInfo.lastName || "Last"}</span>
          </h1>
          {experience?.[0]?.role && (
            <p className="text-sm font-medium tracking-widest text-slate-400 uppercase mt-1">
              {experience[0].role}
            </p>
          )}
        </div>

        {/* Structured Contact Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-300 font-mono">
          {personalInfo.email && <div className="flex items-center gap-2">✉️ <span>{personalInfo.email}</span></div>}
          {personalInfo.phone && <div className="flex items-center gap-2">📱 <span>{personalInfo.phone}</span></div>}
          {personalInfo.location && <div className="flex items-center gap-2">📍 <span>{personalInfo.location}</span></div>}
          {personalInfo.portfolioUrl && (
            <div className="flex items-center gap-2">
              🔗{" "}
              <a href={personalInfo.portfolioUrl} target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">
                {personalInfo.portfolioUrl.replace(/(^\w+:|^)\/\//, "")}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Main Core Content Container */}
      <div className="p-8 md:p-10 space-y-8 bg-slate-50/50">
        
        {/* Professional Summary Section */}
        {personalInfo.summary && (
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-600 rounded-full" /> Executive Summary
            </h2>
            <p className="text-xs leading-relaxed text-slate-600 text-justify">{personalInfo.summary}</p>
          </div>
        )}

        {/* Work Experience Section */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-200 pb-2 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-indigo-600 rounded-full" /> Professional Experience
          </h2>
          <div className="space-y-4">
            {experience.map((exp: any) => (
              <div key={exp.id} className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm transition-all hover:border-indigo-200">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="font-bold text-sm text-slate-900">{exp.role || "Position Title"}</span>
                  <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md font-mono">
                    {exp.startDate || "Date"} — {exp.endDate || "Date"}
                  </span>
                </div>
                <div className="text-xs font-medium text-slate-500 italic mt-0.5 mb-3">{exp.company || "Company Details"}</div>
                {exp.description && (
                  <p className="text-xs text-slate-600 whitespace-pre-line leading-relaxed border-t border-slate-50 pt-2">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Two-Column Block for Education & Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Education Block */}
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-600 rounded-full" /> Education & Credentials
            </h2>
            <div className="space-y-4">
              {education.map((edu: any) => (
                <div key={edu.id} className="text-xs">
                  <div className="flex justify-between items-start gap-2">
                    <span className="font-bold text-slate-900">{edu.degree || "Degree Plan"}</span>
                    <span className="text-[11px] font-medium text-slate-400 font-mono shrink-0">{edu.graduationDate}</span>
                  </div>
                  <p className="text-slate-600 mt-0.5">{edu.school || "Institution"}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Skills & Expertise Block */}
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-600 rounded-full" /> Core Competencies
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.length > 0 ? (
                skills.map((skill: string, index: number) => (
                  <span 
                    key={index} 
                    className="text-xs bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 transition-colors text-slate-700 px-3 py-1.5 rounded font-medium border border-slate-200"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <span className="text-xs text-slate-400 italic">No assets indexed</span>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

