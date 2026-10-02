'use client'
import React from 'react'
import Inputsection from '@/app/components/input'
import { useState } from 'react'
import Preview from '@/app/components/preview'

const Page = () => {

   const itemlist = {
    colors: '',
          template: '',
           personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
        location: '',    
      portfolioUrl: '',  
      summary: '',
    },
     education: [
      { id: crypto.randomUUID(), school: '', degree: '', graduationDate: '' }
    ],
    skills: [] as string[], // Array of strings: ['React', 'Node.js']
    experience: [
      { id:crypto.randomUUID() , company: '', role: '', startDate: '', endDate: '', description: '' }
    ],
   
      }
  const [resumeitems, setresumeitems] = useState(itemlist)
  const InputsectionWithProps = Inputsection as unknown as React.ComponentType<{
    resumeitem: typeof resumeitems
    setresumeitem: React.Dispatch<React.SetStateAction<typeof resumeitems>>
  }>

  return (
   <div className='mt-8 w-full'>
<h1 className='text-4xl text-semibold text-center text-gray-500 '>Build Resume</h1>
<div className="flex flex-col md:flex-row gap-10 p-10 mb-30">
<Inputsection resumeitem={resumeitems} setresumeitem={setresumeitems} />
<Preview {...resumeitems} />
</div>
   </div>
  )
}

export default Page