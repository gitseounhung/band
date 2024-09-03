import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@zio/shared/redux/hooks'
import { setUser } from '@zio/shared/redux/slices/session'
import axios from 'axios'

const SessionReload = async() => {
  const URL = `${process.env.REACT_APP_BACKEND_URL}/api/user-details`
  const dispatch = useAppDispatch()
  const response = await axios({
    url: URL,
    withCredentials: true // 이 부분 넘겨줘야 서버에서 브라우저에 쿠키를 읽어옴
  })
  if (response?.data?.data?.logout) { // 쿠키가 지워졌을 때
    return false
  }
  console.log('shindalsoo',response?.data?.data)
  dispatch(setUser(response?.data?.data))
  return true
}

export const IsSession = () => {
  const navigate = useNavigate()
  const { email } = useAppSelector((state)=>state.session)  
 
  if (!localStorage.getItem('token')) {  // 로컬스토리지가 없을 때
    navigate('/signin')
  } else if (email===''){ // 토큰은 있으나. 세션이 없는 경우 세션복원
    console.log('세션복원')
    SessionReload()
      .then((result)=>{
        if (!result) navigate('/signin')
      })
      .catch((err)=>{console.log('프로미스에러',err)})
  }
}
