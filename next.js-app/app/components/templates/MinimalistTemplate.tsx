// components/templates/MinimalistTemplate.tsx
// export default function MinimalistTemplate({ data }: { data: any }) {
//   const { personalInfo, education, skills, experience } = data;

//   return (
//     <div className="w-full max-w-4xl mx-auto bg-white shadow-xl min-h-[297mm] p-12 text-zinc-800 font-serif border border-zinc-100">
//       {/* Header */}
//       <div className="text-center space-y-2 mb-10">
//         <h1 className="text-3xl font-light tracking-wide text-zinc-950 uppercase">
//           {personalInfo.firstName || "First"} {personalInfo.lastName || "Last"}
//         </h1>
//         <div className="text-xs tracking-wider text-zinc-500 font-sans space-x-3 divide-x divide-zinc-200">
//           {personalInfo.email && <span>{personalInfo.email}</span>}
//           {personalInfo.phone && <span className="pl-3">{personalInfo.phone}</span>}
//           {personalInfo.location && <span className="pl-3">{personalInfo.location}</span>}
//           {personalInfo.portfolioUrl && <span className="pl-3 text-zinc-900 underline">{personalInfo.portfolioUrl}</span>}
//         </div>
//       </div>

//       <hr className="border-zinc-200 my-6" />

//       {/* Summary */}
//       {personalInfo.summary && (
//         <div className="mb-8">
//           <p className="italic text-zinc-600 text-center max-w-2xl mx-auto text-sm leading-relaxed">{personalInfo.summary}</p>
//         </div>
//       )}

//       {/* Experience Section */}
//       <div className="space-y-6 font-sans">
//         <h2 className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-4">Experience</h2>
//         {experience.map((exp: any) => (
//           <div key={exp.id} className="grid grid-cols-4 gap-4 text-sm">
//             <div className="col-span-1 text-xs text-zinc-400 font-medium">
//               {exp.startDate || "Start"} — {exp.endDate || "Present"}
//             </div>
//             <div className="col-span-3 space-y-1">
//               <h3 className="font-bold text-zinc-900">{exp.role || "Role Position"}</h3>
//               <h4 className="text-xs text-zinc-500 tracking-wide">{exp.company || "Company"}</h4>
//               <p className="text-zinc-600 text-xs mt-2 whitespace-pre-line leading-relaxed">{exp.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <hr className="border-zinc-100 my-8" />

//       {/* Bottom Grid for Skills & Education */}
//       <div className="grid grid-cols-2 gap-8 font-sans">
//         {/* Education */}
//         <div>
//           <h2 className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-3">Education</h2>
//           <div className="space-y-3">
//             {education.map((edu: any) => (
//               <div key={edu.id} className="text-xs">
//                 <span className="text-zinc-400 float-right">{edu.graduationDate}</span>
//                 <h3 className="font-bold text-zinc-900">{edu.degree || "Degree Title"}</h3>
//                 <p className="text-zinc-600">{edu.school || "School"}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Skills */}
//         <div>
//           <h2 className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-3">Skills</h2>
//           <p className="text-xs text-zinc-600 leading-loose">
//             {skills.length > 0 ? skills.join(" • ") : <span className="text-zinc-400 italic">No skills listed</span>}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



// components/templates/MinimalistTemplate.tsx
// export default function MinimalistTemplate({ data }: { data: any }) {
//   const { personalInfo, education, skills, experience } = data;

//   return (
//     <div className="w-full max-w-[210mm] mx-auto bg-white shadow-xl h-fit p-10 md:p-14 text-slate-700 font-sans border border-slate-100 rounded-sm">
//       {/* Top Header Section */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-200 pb-8 mb-8 gap-4">
//         <div>
//           <h1 className="text-3xl font-light tracking-wide text-slate-900 uppercase">
//             {personalInfo.firstName || "First"}{" "}
//             <span className="font-semibold text-slate-900">{personalInfo.lastName || "Last"}</span>
//           </h1>
//           <p className="text-sm font-medium text-indigo-700 tracking-wider uppercase mt-1">
//             {experience[0]?.role || "Professional"}
//           </p>
//         </div>
        
//         {/* Contact info arranged neatly */}
//         <div className="text-left md:text-right text-xs text-slate-500 space-y-1 font-mono">
//           {personalInfo.email && <div className="flex items-center md:justify-end gap-1.5"><span>{personalInfo.email}</span> ✉️</div>}
//           {personalInfo.phone && <div className="flex items-center md:justify-end gap-1.5"><span>{personalInfo.phone}</span> 📱</div>}
//           {personalInfo.location && <div className="flex items-center md:justify-end gap-1.5"><span>{personalInfo.location}</span> 📍</div>}
//           {personalInfo.portfolioUrl && (
//             <div className="flex items-center md:justify-end gap-1.5">
//               <a href={personalInfo.portfolioUrl} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
//                 {personalInfo.portfolioUrl.replace(/(^\w+:|^)\/\//, "")}
//               </a>
//               🔗
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Main Content Layout */}
//       <div className="space-y-8">
        
//         {/* Summary Statement */}
//         {personalInfo.summary && (
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6">
//             <div className="md:col-span-1">
//               <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase md:pt-0.5">Profile</h2>
//             </div>
//             <div className="md:col-span-3">
//               <p className="text-slate-600 text-sm leading-relaxed text-justify">{personalInfo.summary}</p>
//             </div>
//           </div>
//         )}

//         {personalInfo.summary && <hr className="border-slate-100" />}

//         {/* Experience Section */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6">
//           <div className="md:col-span-1">
//             <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase md:pt-0.5">Experience</h2>
//           </div>
//           <div className="md:col-span-3 space-y-6">
//             {experience.map((exp: any) => (
//               <div key={exp.id} className="group relative">
//                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
//                   <h3 className="font-semibold text-slate-900 text-sm tracking-wide">
//                     {exp.role || "Position Title"}
//                   </h3>
//                   <span className="text-xs font-medium text-slate-400 font-mono">
//                     {exp.startDate || "Start"} — {exp.endDate || "Present"}
//                   </span>
//                 </div>
//                 <h4 className="text-xs font-medium text-indigo-600 mt-0.5">
//                   {exp.company || "Company Identity"}
//                 </h4>
//                 {exp.description && (
//                   <p className="text-slate-600 text-xs mt-2 whitespace-pre-line leading-relaxed pl-3 border-l border-slate-200">
//                     {exp.description}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <hr className="border-slate-100" />

//         {/* Education Section */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6">
//           <div className="md:col-span-1">
//             <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase md:pt-0.5">Education</h2>
//           </div>
//           <div className="md:col-span-3 space-y-4">
//             {education.map((edu: any) => (
//               <div key={edu.id} className="flex justify-between items-baseline text-sm">
//                 <div>
//                   <h3 className="font-semibold text-slate-900 text-xs">{edu.degree || "Degree Title"}</h3>
//                   <p className="text-slate-500 text-xs mt-0.5">{edu.school || "School / University"}</p>
//                 </div>
//                 <span className="text-xs font-medium text-slate-400 font-mono">{edu.graduationDate}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <hr className="border-slate-100" />

//         {/* Skills Section */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6">
//           <div className="md:col-span-1">
//             <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase md:pt-0.5">Expertise</h2>
//           </div>
//           <div className="md:col-span-3">
//             <div className="flex flex-wrap gap-2">
//               {skills.length > 0 ? (
//                 skills.map((skill: string, index: number) => (
//                   <span
//                     key={index}
//                     className="text-xs bg-slate-50 text-slate-700 border border-slate-200 px-2.5 py-1 rounded font-medium shadow-sm"
//                   >
//                     {skill}
//                   </span>
//                 ))
//               ) : (
//                 <span className="text-xs text-slate-400 italic">No credentials catalogued</span>
//               )}
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }



export default function MinimalistTemplate({ data }: { data: any }) {
  // 1. Destructure "colors" state parameter from incoming data alongside the rest
  const { personalInfo, education, skills, experience, colors } = data;

  // 2. Safe mapping dictionary linking color IDs to direct utility variations
  const themeStyles: Record<string, { text: string; bg: string; border: string }> = {
    slateBlue: { text: "text-[#1E3A8A]", bg: "bg-[#1E3A8A]/5", border: "border-[#1E3A8A]/20" },
    forest:    { text: "text-[#064E3B]", bg: "bg-[#064E3B]/5", border: "border-[#064E3B]/20" },
    burgundy:  { text: "text-[#4C0519]", bg: "bg-[#4C0519]/5", border: "border-[#4C0519]/20" },
    royal:     { text: "text-[#1E40AF]", bg: "bg-[#1E40AF]/5", border: "border-[#1E40AF]/20" },
    teal:      { text: "text-[#115E59]", bg: "bg-[#115E59]/5", border: "border-[#115E59]/20" },
    plum:      { text: "text-[#3B0764]", bg: "bg-[#3B0764]/5", border: "border-[#3B0764]/20" },
    ashGray:    { text: "text-gray-800", bg: "bg-gray-200", border: "border-gray-300" }
  };

  // 3. Fallback to default theme (e.g., slateBlue) if state field initializes blank or empty
  const activeTheme = themeStyles[colors] ?? themeStyles.slateBlue;

  return (
    <div className="w-full max-w-[210mm] mx-auto bg-white shadow-xl h-fit p-10 md:p-14 text-slate-700 font-sans border border-slate-100 rounded-sm">
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-200 pb-8 mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-light tracking-wide text-slate-900 uppercase">
            {personalInfo.firstName || "First"}{" "}
            <span className="font-semibold text-slate-900">{personalInfo.lastName || "Last"}</span>
          </h1>
          {/* DYNAMIC IMPLEMENTATION: Subtitle changes color */}
          <p className={`text-sm font-medium ${activeTheme.text} tracking-wider uppercase mt-1`}>
            {experience[0]?.role || "Professional"}
          </p>
        </div>
        
        {/* Contact info arranged neatly */}
        <div className="text-left md:text-right text-xs text-slate-500 space-y-1 font-mono">
          {personalInfo.email && <div className="flex items-center md:justify-end gap-1.5"><span>{personalInfo.email}</span> ✉️</div>}
          {personalInfo.phone && <div className="flex items-center md:justify-end gap-1.5"><span>{personalInfo.phone}</span> 📱</div>}
          {personalInfo.location && <div className="flex items-center md:justify-end gap-1.5"><span>{personalInfo.location}</span> 📍</div>}
          {personalInfo.portfolioUrl && (
            <div className="flex items-center md:justify-end gap-1.5">
              {/* DYNAMIC IMPLEMENTATION: Hyperlink changes color */}
              <a href={personalInfo.portfolioUrl} target="_blank" rel="noreferrer" className={`${activeTheme.text} hover:underline`}>
                {personalInfo.portfolioUrl.replace(/(^\w+:|^)\/\//, "")}
              </a>
              🔗
            </div>
          )}
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="space-y-8">
        
        {/* Summary Statement */}
        {personalInfo.summary && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6">
            <div className="md:col-span-1">
              <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase md:pt-0.5">Profile</h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-slate-600 text-sm leading-relaxed text-justify">{personalInfo.summary}</p>
            </div>
          </div>
        )}

        {personalInfo.summary && <hr className="border-slate-100" />}

        {/* Experience Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6">
          <div className="md:col-span-1">
            <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase md:pt-0.5">Experience</h2>
          </div>
          <div className="md:col-span-3 space-y-6">
            {experience.map((exp: any) => (
              <div key={exp.id} className="group relative">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h3 className="font-semibold text-slate-900 text-sm tracking-wide">
                    {exp.role || "Position Title"}
                  </h3>
                  <span className="text-xs font-medium text-slate-400 font-mono">
                    {exp.startDate || "Start"} — {exp.endDate || "Present"}
                  </span>
                </div>
                {/* DYNAMIC IMPLEMENTATION: Company Identifier changes color */}
                <h4 className={`text-xs font-medium ${activeTheme.text} mt-0.5`}>
                  {exp.company || "Company Identity"}
                </h4>
                {exp.description && (
                  <p className="text-slate-600 text-xs mt-2 whitespace-pre-line leading-relaxed pl-3 border-l border-slate-200">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <hr className="border-slate-100" />

        {/* Education Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6">
          <div className="md:col-span-1">
            <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase md:pt-0.5">Education</h2>
          </div>
          <div className="md:col-span-3 space-y-4">
            {education.map((edu: any) => (
              <div key={edu.id} className="flex justify-between items-baseline text-sm">
                <div>
                  <h3 className="font-semibold text-slate-900 text-xs">{edu.degree || "Degree Title"}</h3>
                  <p className="text-slate-500 text-xs mt-0.5">{edu.school || "School / University"}</p>
                </div>
                <span className="text-xs font-medium text-slate-400 font-mono">{edu.graduationDate}</span>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-slate-100" />

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6">
          <div className="md:col-span-1">
            <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase md:pt-0.5">Expertise</h2>
          </div>
          <div className="md:col-span-3">
            <div className="flex flex-wrap gap-2">
              {skills.length > 0 ? (
                skills.map((skill: string, index: number) => (
                  // DYNAMIC IMPLEMENTATION: Skill badges feature accent background/borders + colored text
                  <span
                    key={index}
                    className={`text-xs ${activeTheme.bg} ${activeTheme.text} border ${activeTheme.border} px-2.5 py-1 rounded font-medium shadow-sm transition-all`}
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <span className="text-xs text-slate-400 italic">No credentials catalogued</span>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


