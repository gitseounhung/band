import React from 'react'
import { Link } from 'react-router-dom'
import RightMessage from './rightMessage'
import RightNotification from './rightNotification'
import RightProfile from './rightProfile'
import { useAppSelector } from '@zio/shared/redux/hooks';

const Right = () => {
  const isSession = useAppSelector(state=>state.session.isSession)
  
  return (
    <div className="navbar-right">
      {
        isSession && (
          <>
            <RightMessage />
            <RightNotification />
            <RightProfile />
          </>
          )
        }
      {
        !isSession && (
          <Link to="/signin" className="btn btn-buy">로그인</Link>
        )
      }
    </div>

  )
}

export default Right