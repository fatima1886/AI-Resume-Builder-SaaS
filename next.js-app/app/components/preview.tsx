'use client'

import ModernTemplate from "./templates/ModernTemplate"
import MinimalistTemplate from "./templates/MinimalistTemplate"
import ProfessionalTemplate from "./templates/ProfessionalTemplate"

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

const Preview = (resumeitem: ResumeItem) => {
  switch (resumeitem.template?.toLowerCase()) {
    case "modern":
      return <ModernTemplate data={resumeitem} />
    case "minimalist":
      return <MinimalistTemplate data={resumeitem} />
    case "professional":
    default:
      return <ProfessionalTemplate data={resumeitem} />
  }
}

export default Preview