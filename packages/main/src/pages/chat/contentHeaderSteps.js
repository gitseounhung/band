import React from 'react'
import { useAppSelector } from '@zio/shared/redux/hooks'
import ContentHeaderStepsDoc from './contentHeaderStepsDoc'
import ContentHeaderStepsChat from './contentHeaderStepsChat'

const ContentHeaderSteps = () => {
  const leftSidebar = useAppSelector(state=>state?.chatUI?.leftSidebar)

  return (
    <div className="dropdown dropdown-steps">
      {
        leftSidebar==='doc' && (
          <ContentHeaderStepsDoc />
        )
      }
      {
        leftSidebar==='chat' && (
          <ContentHeaderStepsChat />
        )
      }

    </div>

    
  )
}

export default ContentHeaderSteps