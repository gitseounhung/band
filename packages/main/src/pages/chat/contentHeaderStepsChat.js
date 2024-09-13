import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { Avatar } from '@zio/components'
import { useAppSelector } from '@zio/shared/redux/hooks'

const ContentHeaderStepsChat = () => {
  const params = useParams()
  const channel = useAppSelector(state=>state.channel)
  
  return (
    <div className="media align-items-center">
      {
        !params.channelId && (
          <span className="tx-color-04">최근 대화 또는 멤버를 선택하세요.</span>
        )
      }
      {
        params.channelId && (
          <Fragment>
            <Avatar
              userId={channel?._id}
              name={channel?.name}
              imageUrl={channel?.channel_pic}
              width={32}
              height={32}
            />
            <div className="media-body mg-l-10 mg-t-8">
              <h6 className="d-flex mg-b-0">{channel?.name}</h6>
              <small className="d-block tx-color-04">{params.channelId}</small>
            </div>
          </Fragment>
        )
      }
    </div>
  )
}

export default ContentHeaderStepsChat