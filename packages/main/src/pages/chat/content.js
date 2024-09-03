import React, { createContext } from 'react'
import ContentHeader from './contentHeader.js'
import ContentBody from './contentBody.js'
import ContentRight from './contentRight.js'
import ContentFooter from './contentFooter.js'

const Content = () => {
  return (
    <div className="chat-content">
        <ContentHeader/>
        <ContentBody />
        <ContentRight/>
        <ContentFooter />
    </div>
  )
}

export default Content