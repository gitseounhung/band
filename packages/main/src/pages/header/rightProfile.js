import { useNavigate, Link } from 'react-router-dom'
import { Dropdown, DropdownMenu } from '@zio/components'
import FeatherIcon from 'feather-icons-react';
import nobodyman from '@zio/shared/images/nobodyman.jpg'
import { useAppSelector, useAppDispatch } from '@zio/shared/redux/hooks'
import { logout } from '@zio/shared/redux/slices/session'
import axios from 'axios'

const RightProfile = () => {
  const { _id, name,profile_pic } = useAppSelector((state)=>state.session)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSignOut = async() => {
    console.log('로그아웃눌렀지유?')
    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/logout`
    const response = await axios({
      url: URL,
      withCredentials: true
    })
    dispatch(logout())
    localStorage.clear()
    navigate('/')
  }  

  return (
    <Dropdown className="dropdown dropdown-profile">
      <a href="#" className="dropdown-link" data-bs-toggle="dropdown" data-display="static">
        <div className="avatar avatar-sm"><img src={`${profile_pic ? profile_pic : nobodyman}`} className="rounded-circle" alt="" /></div>
      </a>
      <DropdownMenu className="dropdown-menu dropdown-menu-end" data-bs-popper="static">
        <div className="avatar avatar-lg mg-b-15"><img src={`${profile_pic ? profile_pic : nobodyman}`} className="rounded-circle" alt="" /></div>
        <h6 className="tx-semibold mg-b-5">{`${name ? name : "홍길동"}`}</h6>
        <p className="mg-b-25 tx-12 tx-color-03">{_id}</p>

        <Link to="/settings/skin" className="dropdown-item"><FeatherIcon icon="edit-3"/> 개인정보 변경</Link>
        <Link to="/settings/skin" className="dropdown-item"><FeatherIcon icon="user"/> View Profile</Link>
        <div className="dropdown-divider"></div>
        <a href="https://help.zioject.com" target="_new" className="dropdown-item"><FeatherIcon icon="help-circle"/> Help Center</a>
        <Link to="/settings/skin" className="dropdown-item"><FeatherIcon icon="settings"/>스킨변경</Link>
        <Link to="#" className="dropdown-item"><FeatherIcon icon="settings"/>Privacy Settings</Link>
        <a 
          href="#" 
          className="dropdown-item"
          onClick={handleSignOut}
        >
          <FeatherIcon icon="log-out"/>
          Sign Out
        </a>
      </DropdownMenu>
    </Dropdown>
  )
}

export default RightProfile