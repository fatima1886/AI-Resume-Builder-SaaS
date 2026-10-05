'use client'
import { useResume } from "../context/ResumeContext"
import ModernTemplate from "./templates/ModernTemplate"
import MinimalistTemplate from "./templates/MinimalistTemplate"
import ProfessionalTemplate from "./templates/ProfessionalTemplate"



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