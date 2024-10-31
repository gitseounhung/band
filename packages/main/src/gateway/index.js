import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Gateway = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  // 넘겨받은 데이타
  const q = searchParams.get('q')

  const shindalsoo = async() => {
    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/gateway`
    const response = await axios.post(URL,{
      q: q
    }) 
    console.log('response.data',response.data)
    if (response.data.success==false){
      window.location.href = "http://localhost:3000/signin"
    }

  }
  useEffect(()=>{  
    shindalsoo()
  },[])

  return null
}

export default Gateway