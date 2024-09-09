import React from 'react'
import ContentBodyChat from './contentBodyChat'
import ContentBodyDoc from './contentBodyDoc'
import { ScrollBar } from '@zio/components'

const ContentBody = () => {

  return (
    <div className="chat-content-body">
      <ContentBodyDoc />
      <ScrollBar>
        <ContentBodyChat />
      </ScrollBar>
    </div>
  )
}

export default ContentBody