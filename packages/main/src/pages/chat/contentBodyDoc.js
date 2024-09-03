import React, { Fragment, useState } from 'react'
import { useAppSelector } from '@zio/shared/redux/hooks'
import { Spinner } from '@zio/components'

const ContentBodyDoc = ({leftSidebar}) => {
  const [loading, setLoading] = useState(false)
  const docUrl = useAppSelector(state=>state?.band?.docUrl)

  return (
    <Fragment>
      {
        loading && (
          <p className='text-center m-5'><Spinner/></p>
        )
      }
      {
        !loading && (
          <iframe 
            className={`w-100 h-100 p-3 ${leftSidebar==='doc' ? "" : "d-none"}`}
            src={docUrl}
          />
        )  
      }
    </Fragment>
  )
}

export default ContentBodyDoc