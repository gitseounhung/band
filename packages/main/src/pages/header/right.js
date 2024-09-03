import React from 'react'
import { Link } from 'react-router-dom'
import RightMessage from './rightMessage'
import RightNotification from './rightNotification'
import RightProfile from './rightProfile'
import { useAppSelector } from '@zio/shared/redux/hooks'

const Right = () => {
  const { email } = useAppSelector((state)=>state.session)
  
  return (
    <div className="navbar-right">
      {
        email && (
          <>
            <RightMessage />
            <RightNotification />
            <RightProfile />
          </>
          )
        }
      {
        !email && (
          <Link to="/signin" className="btn btn-buy">로그인</Link>
        )
      }
    </div>

  )
}

export default Right