import React, {Fragment} from 'react'
import { useParams } from 'react-router-dom'

const ContentHeaderStepsChat = () => {
  const params = useParams()
  
  return (
    <Fragment>
      <a className="tx-13 dropdown-title breadcrumb-title" data-toggle="dropdown">
        <span>{params.userId}</span> 
      </a>
    </Fragment>
  )
}

export default ContentHeaderStepsChat