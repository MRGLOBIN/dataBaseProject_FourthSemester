import { createContext, useState } from 'react'

export const MilestoneContext = createContext({
  milestoneDesc: [],
  setMilestoneDesc: () => null,
})

export const MilestoneProvider = ({ children }) => {
  const [milestoneDesc, setMilestoneDesc] = useState([])

  const value = {
    milestoneDesc,
    setMilestoneDesc,
  }

  return (
    <MilestoneContext.Provider value={value}>
      {children}
    </MilestoneContext.Provider>
  )
}
