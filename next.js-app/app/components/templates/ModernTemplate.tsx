// components/templates/ModernTemplate.tsx
export default function ModernTemplate({ data }: { data: any }) {
  const { personalInfo, education, skills, experience } = data;

  return (
    <div className="w-full h-fit max-w-[210mm] mx-auto bg-white shadow-xl min-h-[297mm] text-slate-800 font-sans border border-slate-100">
      {/* Top Banner Accent */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 h-4 w-full" />

      {/* Header */}
      <div className="p-8 border-b border-slate-100">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
          {personalInfo.firstName || "First"} <span className="text-blue-600">{personalInfo.lastName || "Last"}</span>
        </h1>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-600">
          {personalInfo.email && <span>📧 {personalInfo.email}</span>}
          {personalInfo.phone && <span>📱 {personalInfo.phone}</span>}
          {personalInfo.location && <span>📍 {personalInfo.location}</span>}
          {personalInfo.portfolioUrl && (
            <a href={personalInfo.portfolioUrl} target="_blank" className="text-blue-600 hover:underline">
              🔗 Portfolio
            </a>
          )}
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-3 gap-8 p-8">
        {/* Left Column (Main Content) */}
        <div className="col-span-2 space-y-8">
          {/* Summary */}
          {personalInfo.summary && (
            <div>
              <h2 className="text-lg font-bold uppercase tracking-wider text-blue-600 mb-2">Professional Summary</h2>
              <p className="text-slate-600 leading-relaxed text-sm">{personalInfo.summary}</p>
            </div>
          )}

          {/* Experience */}
          <div>
            <h2 className="text-lg font-bold uppercase tracking-wider text-blue-600 mb-4">Work Experience</h2>
            <div className="space-y-6">
              {experience.map((exp: any) => (
                <div key={exp.id} className="relative pl-4 border-l-2 border-slate-200">
                  <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-1.5" />
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-slate-900">{exp.role || "Job Role"}</h3>
                    <span className="text-xs font-semibold px-2 py-1 bg-slate-100 rounded text-slate-600">
                      {exp.startDate || "Start"} — {exp.endDate || "Present"}
                    </span>
                  </div>
                  <h4 className="text-sm font-medium text-indigo-600">{exp.company || "Company Name"}</h4>
                  <p className="text-sm text-slate-600 mt-2 whitespace-pre-line">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-1 space-y-8 bg-slate-50 p-6 rounded-xl h-fit">
          {/* Skills */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-200 pb-2 mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.length > 0 ? (
                skills.map((skill: string, index: number) => (
                  <span key={index} className="text-xs bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-md font-medium shadow-sm">
                    {skill}
                  </span>
                ))
              ) : (
                <span className="text-xs text-slate-400 italic">No skills added</span>
              )}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-200 pb-2 mb-3">Education</h2>
            <div className="space-y-4">
              {education.map((edu: any) => (
                <div key={edu.id}>
                  <h3 className="text-sm font-bold text-slate-800">{edu.degree || "Degree"}</h3>
                  <p className="text-xs text-slate-600">{edu.school || "School / University"}</p>
                  <p className="text-[11px] font-medium text-slate-400 mt-0.5">{edu.graduationDate}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
