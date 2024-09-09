import React from 'react'
import { ScrollBar } from '@zio/components'
import ContentRightMembers from './contentRightMembers'

const ContentRight = () => {
  return (
    <div className="chat-sidebar-right">
      <ScrollBar>  
        <ContentRightMembers/>
      </ScrollBar>
    </div>
  )
}

export default ContentRight