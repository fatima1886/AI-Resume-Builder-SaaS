import React from 'react'
// import Greet from '../components/Greet'
import VignetteGradientMesh from "@/app/components/ui/background"
import DashboardHeader from '../components/dashboardheader'

const Dashboard = () => {
  return (
    <div className='p-10 pb-20'><VignetteGradientMesh variant="hero"/>
    {/* <Greet/> */}
    <DashboardHeader/>
    </div>
  )
}

export default Dashboard