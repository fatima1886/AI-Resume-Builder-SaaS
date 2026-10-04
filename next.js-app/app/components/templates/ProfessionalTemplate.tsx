
import { useResume } from "@/app/context/ResumeContext";

export default function ProfessionalTemplate() {
    const {resumeitems} = useResume()
    // 1. Destructure the "colors" state parameter from incoming data
    const { personalInfo, education, skills, experience, colors } = resumeitems;

    // 2. Safe mapping dictionary linking color IDs to direct Tailwind utility variations
    const themeStyles: Record<
        string,
        { text: string; bg: string; border: string; badgeText: string; badgeBg: string; hoverText: string; hoverBg: string }
    > = {
        slateBlue: { text: "text-[#1E3A8A]", bg: "bg-[#1E3A8A]", border: "border-[#1E3A8A]", badgeText: "text-[#1E3A8A]", badgeBg: "bg-[#1E3A8A]/5", hoverText: "hover:text-[#1E3A8A]", hoverBg: "hover:bg-[#1E3A8A]/5" },
        forest: { text: "text-[#064E3B]", bg: "bg-[#064E3B]", border: "border-[#064E3B]", badgeText: "text-[#064E3B]", badgeBg: "bg-[#064E3B]/5", hoverText: "hover:text-[#064E3B]", hoverBg: "hover:bg-[#064E3B]/5" },
        burgundy: { text: "text-[#4C0519]", bg: "bg-[#4C0519]", border: "border-[#4C0519]", badgeText: "text-[#4C0519]", badgeBg: "bg-[#4C0519]/5", hoverText: "hover:text-[#4C0519]", hoverBg: "hover:bg-[#4C0519]/5" },
        royal: { text: "text-[#1E40AF]", bg: "bg-[#1E40AF]", border: "border-[#1E40AF]", badgeText: "text-[#1E40AF]", badgeBg: "bg-[#1E40AF]/5", hoverText: "hover:text-[#1E40AF]", hoverBg: "hover:bg-[#1E40AF]/5" },
        teal: { text: "text-[#115E59]", bg: "bg-[#115E59]", border: "border-[#115E59]", badgeText: "text-[#115E59]", badgeBg: "bg-[#115E59]/5", hoverText: "hover:text-[#115E59]", hoverBg: "hover:bg-[#115E59]/5" },
        plum: { text: "text-[#3B0764]", bg: "bg-[#3B0764]", border: "border-[#3B0764]", badgeText: "text-[#3B0764]", badgeBg: "bg-[#3B0764]/5", hoverText: "hover:text-[#3B0764]", hoverBg: "hover:bg-[#3B0764]/5" },
        ashGray: { text: "text-[#1F2937]", bg: "bg-[#F3F4F6]", border: "border-[#D1D5DB]", badgeText: "text-[#374151]", badgeBg: "bg-[#E5E7EB]", hoverText: "hover:text-[#111827]", hoverBg: "hover:bg-[#E5E7EB]" },

    };

    // 3. Fallback to default theme (e.g., slateBlue) if state field initializes blank or empty
    const activeTheme = themeStyles[colors] ?? themeStyles.slateBlue;

    return (
        <div className="w-full max-w-[210mm] mx-auto bg-white shadow-xl h-fit text-slate-800 font-sans border border-slate-200 rounded-md overflow-hidden">

            {/* Executive Header Block with Corporate Slate Background */}
            {/* DYNAMIC IMPLEMENTATION: Changes thick header bottom accent border color */}
            <div className={`bg-slate-900 text-white p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b-4 ${activeTheme.border}`}>
                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight uppercase">
                        {personalInfo.firstName || "First"}{" "}
                        {/* DYNAMIC IMPLEMENTATION: Changes last name dynamic accent text color */}
                        <span className={activeTheme.text}>{personalInfo.lastName || "Last"}</span>
                    </h1>
                    {experience?.[0]?.role && (
                        <p className="text-sm font-medium tracking-widest text-slate-400 uppercase mt-1">
                            {experience[0].role}
                        </p>
                    )}
                </div>

                {/* Structured Contact Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-300 font-mono">
                    {personalInfo.email && <div className="flex items-center gap-1">✉️ <span>{personalInfo.email}</span></div>}
                    {personalInfo.phone && <div className="flex items-center gap-2">📱 <span>{personalInfo.phone}</span></div>}
                    {personalInfo.location && <div className="flex items-center gap-1">📍 <span>{personalInfo.location}</span></div>}
                    {personalInfo.portfolioUrl && (
                        <div className="flex items-center gap-1">
                            🔗{" "}
                            {/* DYNAMIC IMPLEMENTATION: Changes portfolio link text color */}
                            <a href={personalInfo.portfolioUrl} target="_blank" rel="noreferrer" className={`${activeTheme.text} hover:underline`}>
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
                            {/* DYNAMIC IMPLEMENTATION: Dot accent changes background color */}
                            <span className={`w-2 h-2 ${activeTheme.bg} rounded-full`} /> Executive Summary
                        </h2>
                        <p className="text-xs leading-relaxed text-slate-600 text-justify">{personalInfo.summary}</p>
                    </div>
                )}

                {/* Work Experience Section */}
                <div>
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-200 pb-2 mb-4 flex items-center gap-2">
                        {/* DYNAMIC IMPLEMENTATION: Dot accent changes background color */}
                        <span className={`w-2 h-2 ${activeTheme.bg} rounded-full`} /> Professional Experience
                    </h2>
                    <div className="space-y-4">
                        {experience.map((exp: any) => (
                            <div key={exp.id} className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm transition-all hover:border-slate-300">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                                    <span className="font-bold text-sm text-slate-900">{exp.role || "Position Title"}</span>
                                    {/* DYNAMIC IMPLEMENTATION: Experience date pill theme coloring updates */}
                                    <span className={`text-xs font-semibold ${activeTheme.badgeText} ${activeTheme.badgeBg} px-2.5 py-1 rounded-md font-mono`}>
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
                            {/* DYNAMIC IMPLEMENTATION: Dot accent changes background color */}
                            <span className={`w-2 h-2 ${activeTheme.bg} rounded-full`} /> Education & Credentials
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
                            {/* DYNAMIC IMPLEMENTATION: Dot accent changes background color */}
                            <span className={`w-2 h-2 ${activeTheme.bg} rounded-full`} /> Core Competencies
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.length > 0 ? (
                                skills.map((skill: string, index: number) => (
                                    /* DYNAMIC IMPLEMENTATION: Skills items receive structural layout active hover transitions */
                                    <span
                                        key={index}
                                        className={`text-xs bg-slate-100 ${activeTheme.hoverBg} ${activeTheme.hoverText} transition-colors text-slate-700 px-3 py-1.5 rounded font-medium border border-slate-200`}
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
