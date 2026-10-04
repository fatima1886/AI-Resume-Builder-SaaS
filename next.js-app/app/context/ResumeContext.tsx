'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

// 1. Define the interface structure matching your state layout
export interface ResumeData {
  colors: string
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
  education: Array<{ id: string; school: string; degree: string; graduationDate: string }>
  skills: string[]
  experience: Array<{ id: string; company: string; role: string; startDate: string; endDate: string; description: string }>
}

interface ResumeContextType {
  resumeitems: ResumeData
  setresumeitems: React.Dispatch<React.SetStateAction<ResumeData>>
  resetResume: () => void
}

// 2. Define the structural default state template values
const defaultResumeState: ResumeData = {
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
  skills: [],
  experience: [
    { id: crypto.randomUUID(), company: '', role: '', startDate: '', endDate: '', description: '' }
  ],
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined)

// 3. The Provider Component wrapper layout container
export const ResumeProvider = ({ children }: { children: ReactNode }) => {
  const [resumeitems, setresumeitems] = useState<ResumeData>(defaultResumeState)

  const resetResume = () => setresumeitems(defaultResumeState)

  return (
    <ResumeContext.Provider value={{ resumeitems, setresumeitems, resetResume }}>
      {children}
    </ResumeContext.Provider>
  )
}

// 4. Custom Hook for clean visual integration access points
export const useResume = () => {
  const context = useContext(ResumeContext)
  if (!context) {
    throw new Error('useResume must be safely invoked within an active global ResumeProvider wrapper context.')
  }
  return context
}
