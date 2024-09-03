import React from 'react'
import ContentBodyChat from './contentBodyChat'
import ContentBodyDoc from './contentBodyDoc'
import { ScrollBar } from '@zio/components'
import { useAppSelector } from '@zio/shared/redux/hooks'

const ContentBody = () => {
  const { leftSidebar } = useAppSelector((state)=>state.chatUI)

  return (
    <div className="chat-content-body">
      <ContentBodyDoc leftSidebar={leftSidebar} />
      <ScrollBar>
        <ContentBodyChat leftSidebar={leftSidebar} />
      </ScrollBar>
    </div>
  )
}

export default ContentBody