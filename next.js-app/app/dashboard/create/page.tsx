import React from 'react'
import Inputsection from '@/app/components/input'

const Page = () => {
  return (
   <div className='mt-8 w-full'>
<h1 className='text-4xl text-semibold text-center text-gray-500 '>Build Resume</h1>
<div className="flex flex-col md:flex-row gap-3">
<Inputsection/>
</div>
   </div>
  )
}

export default Page