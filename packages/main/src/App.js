import { useEffect } from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import '@zio/shared/css/dashforge.css';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '@zio/shared/redux/hooks'
import { setUser } from '@zio/shared/redux/slices/session';

function App() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { email } = useAppSelector((state)=>state.session)  

  useEffect(()=>{
    console.log('App()실행이 얼마나 자주있나요?')
    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/user-details`
    if (email!==''&& email!==undefined) return // 나가기
    axios({
      url: URL,
      withCredentials: true // 이 부분 넘겨줘야 서버에서 브라우저에 쿠키를 읽어옴
    })
    .then((response)=>{
      if (response?.data?.data?.logout) { // 쿠키가 지워졌을 때
        navigate('/signin')
      }
      dispatch(setUser(response?.data?.data))
    })
    .catch(()=>{
      navigate('/signin')
    })    
  },[]) // 한번만 호출

  const { darkMode } = useAppSelector((state)=>state.theme)
  if (darkMode===undefined || darkMode) {
    import('@zio/shared/css/skin.dark.css').then(() => {
      console.log('dark');
    });
    import('@sweetalert2/theme-dark/dark.css')
  }
  
  return (
    <>
      <Toaster position="top-right" reverseOrder={false}/>
      <Outlet/>
    </>
  );
}

export default App;
