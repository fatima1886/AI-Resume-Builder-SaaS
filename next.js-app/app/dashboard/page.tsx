import React from 'react'
// import Greet from '../components/Greet'
import VignetteGradientMesh from "@/app/components/ui/background"
import DashboardHeader from '../components/dashboardheader'



// type ResumeItem = {
//   colors: string
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

// type InputsectionProps = {
//   resumeitem: ResumeItem
//   setresumeitem: React.Dispatch<React.SetStateAction<ResumeItem>>
// }

const Dashboard = () => {
  return (
    <div className='p-10 pb-20'><VignetteGradientMesh variant="hero"/>
    {/* <Greet/> */}
    <DashboardHeader/>
    </div>
  )
}

export default Dashboard