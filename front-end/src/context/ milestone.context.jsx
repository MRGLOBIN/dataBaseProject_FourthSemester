import { createContext, useState } from 'react'

// const testValues = [
//   {
//     id: 1,
//     deadline: '26 MAY',
//     title: 'Master Piece',
//     subHeading: 'A Ture Art',
//     desc: 'this is a hello world project',
//   },
// ]

export const MilestoneContext = createContext({
  milestones: [],
  setMilestones: () => null,
})

export const MilestoneProvider = ({ children }) => {
  const [milestones, setMilestones] = useState(null)

  const value = {
    milestones,
    setMilestones,
  }

  return (
    <MilestoneContext.Provider value={value}>
      {children}
    </MilestoneContext.Provider>
  )
}
