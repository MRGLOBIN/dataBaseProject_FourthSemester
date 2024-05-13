import { createContext, useState } from 'react'

export const ProjectContext = createContext({
  projectDescription: null,
  setProjectDescription: () => null,
})

const projectTestValue = {
  title: 'MASTER PIECE',
  desc: 'THis is the master piece that will be presented inside air university andit is used to show some test values inside the project',
  gmem1: 'Ahmed',
  gmem2: 'not Ahmed',
  gmem3: 'is Ahmed',
  idGmem1: '',
  idGmem2: '',
  idGmem3: '',
  supervisor: 'Anas Bilal',
  status: 'in its initial stage',
}

export const ProjectProvider = ({ children }) => {
  const [projectDescription, setProjectDescription] = useState(null)
  const value = { projectDescription, setProjectDescription }

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  )
}
