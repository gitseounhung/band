import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '@zio/shared/redux/hooks'
import FeatherIcon from 'feather-icons-react';

const ContentHeaderStepsChat = () => {
  const params = useParams()
  const channel = useAppSelector(state=>state.channel)
  
  return (

    <div className="dropdown dropdown-steps">
      {
        !params.channelId && (
          <a className="tx-13 dropdown-title breadcrumb-title" data-toggle="dropdown">
            <span>최근 대화 선택, 또는 새 채널을 만드세요.</span> 
          </a>
        )
      }
      {
        params.channelId && (
          <Fragment>
            <a className="tx-13 dropdown-title breadcrumb-title" data-toggle="dropdown">
              <span>지오젝</span> 
            </a>
            <span className="m-lg-2 tx-color-03"><FeatherIcon icon="chevron-right"/></span>
            <a className="tx-13 ficon-15 dropdown-title breadcrumb-title" data-toggle="dropdown">
              <span>스크럼</span>
            </a>
            <span className="m-lg-2 tx-color-03"><FeatherIcon icon="chevron-right"/></span>
            <a className="tx-13 dropdown-title breadcrumb-title" data-toggle="dropdown">
              <span>{channel?.name}</span> 
            </a>
          </Fragment>
        )
      }
    </div>

  )
}

export default ContentHeaderStepsChat