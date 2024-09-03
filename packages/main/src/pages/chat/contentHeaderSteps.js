import React, { Fragment } from 'react'
import { useAppSelector } from '@zio/shared/redux/hooks'
import ContentHeaderStepsDoc from './contentHeaderStepsDoc'
import ContentHeaderStepsChat from './contentHeaderStepsChat'

const ContentHeaderSteps = () => {
  const leftSidebar = useAppSelector(state=>state?.chatUI?.leftSidebar)

  return (
    <Fragment>
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
    </Fragment>
  )
}

export default ContentHeaderSteps