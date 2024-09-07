import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@zio/shared/redux/hooks'
import { setUser } from '@zio/shared/redux/slices/session'
import axios from 'axios'

const SessionReload = async() => {
  console.log('세션리로드함수안으로')
  const URL = `${process.env.REACT_APP_BACKEND_URL}/api/user-details`
  const dispatch = useAppDispatch()
  const response = await axios({
    url: URL,
    withCredentials: true // 이 부분 넘겨줘야 서버에서 브라우저에 쿠키를 읽어옴
  })
  if (response?.data?.data?.logout) { // 쿠키가 지워졌을 때
    return false
  }
  dispatch(setUser(response?.data?.data))
  return true
}

export const IsSession = () => {
  if (!localStorage.getItem('token')) return false
  if (localStorage.getItem('token')==='') return false
  return true
}
export const IsSession2 = (email) => {
  const URL = `${process.env.REACT_APP_BACKEND_URL}/api/user-details`
  const navigate = useNavigate()
  if (email!==''&& email!==undefined) return // 나가기
  axios({
    url: URL,
    withCredentials: true // 이 부분 넘겨줘야 서버에서 브라우저에 쿠키를 읽어옴
  })
  .then((response)=>{
    if (response?.data?.data?.logout) { // 쿠키가 지워졌을 때
      navigate('/signin')
    }
    console.log('세션값',response)
    dispatch(setUser(response?.data?.data))
  })
  .catch(()=>{
    console.log('오류?')
    // navigate('/signin')
  })
}
