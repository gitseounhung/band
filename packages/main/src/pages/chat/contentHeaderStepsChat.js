import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { Avatar } from '@zio/components'
import { useAppSelector } from '@zio/shared/redux/hooks'

const ContentHeaderStepsChat = () => {
  const params = useParams()
  const channel = useAppSelector(state=>state.channel)
  
  return (
    <Fragment>
      {
        !params.channelId && (
          <div className="media align-items-center">
            <span className="tx-color-04">최근 대화 또는 멤버를 선택하세요.</span>
          </div>
        )
      }
      {
        params.channelId && (
          <div className="media align-items-center">
            <Avatar
              userId={channel?._id}
              name={channel?.name}
              imageUrl={channel?.channel_pic}
              width={32}
              height={32}
            />
            <div className="media-body mg-l-10">
              <h6 className="mg-b-0">{channel?.name}<span className="mg-l-10 tx-color-04">{params.channelId}</span></h6>         
            </div>
          </div>
        )
      }
    </Fragment>
  )
}

export default ContentHeaderStepsChat