'use client'
import { useResume } from "../context/ResumeContext"
import ModernTemplate from "./templates/ModernTemplate"
import MinimalistTemplate from "./templates/MinimalistTemplate"
import ProfessionalTemplate from "./templates/ProfessionalTemplate"

// type ResumeItem = {
//     colors: string
//   template: string
//   personalInfo: {
//     firstName: string
//     lastName: string
//     email: string
//     phone: string
//     location: string
//     portfolioUrl: string
//     summary: string
//   }
//   education: { id: string; school: string; degree: string; graduationDate: string }[]
//   skills: string[]
//   experience: {
//     id: string
//     company: string
//     role: string
//     startDate: string
//     endDate: string
//     description: string
//   }[]
// }

const Preview = () => {
  const {resumeitems} = useResume()
  switch (resumeitems.template?.toLowerCase()) {
    case "modern":
      return <ModernTemplate />
    case "minimalist":
      return <MinimalistTemplate />
    case "professional":
    default:
      return <ProfessionalTemplate />
  }
}

export default Preview