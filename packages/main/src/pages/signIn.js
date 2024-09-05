import '@zio/shared/css/dashforge.auth.css'
import Header from './header'
import Footer from './footer'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useAppDispatch } from '@zio/shared/redux/hooks'
import { setUser,setToken } from '@zio/shared/redux/slices/session'

const SignIn = () => {
  const [data,setData] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleOnChange = (e) => {
    const {name, value} = e.target
    setData((preve)=>{
      return{
        ...preve,
        [name]: value
      }
    })
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    e.stopPropagation()
    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/signin`
    try {
      const response = await axios({
        method: 'post',
        url: URL,
        data: data,
        withCredentials: true // 이 부분 넘겨줘야 서버에서 브라우저에 쿠키를 구움
      })
      toast.success(response.data.message)
      if (response.data.success){
        // 1. 리덕스에 넣고
        dispatch(setUser(response?.data?.data))
        dispatch(setToken(response?.data?.token))
        // 2. 로컬스토리지에 넣고
        localStorage.setItem('token', response?.data?.token)
        setData({
          email: "",
          password: ""
        })
        navigate('/chat',{
          state: response?.data?.data
        })
      }
    } catch(error){
      toast.error(error?.response?.data?.message)
    }
  }

  return (
    <div>
      <Header />    
      
      <div className="content content-fixed content-auth">
        <div className="container">
          <div className="media align-items-stretch justify-content-center ht-100p pos-relative">
            <div className="media-body align-items-center d-none d-lg-flex">
              <div className="mx-wd-600">
                <img src="https://placehold.co/1260x900" className="img-fluid" alt=""/>
              </div>
              <div className="pos-absolute b-0 l-0 tx-12 tx-center">
                Workspace design vector is created by <a href="https://www.freepik.com/pikisuperstar" target="_blank">pikisuperstar (freepik.com)</a>
              </div>
            </div>
            <div className="sign-wrapper mg-lg-l-50 mg-xl-l-60">
              <div className="wd-100p">
                <h3 className="tx-color-01 mg-b-5">Sign In</h3>
                <p className="tx-color-03 tx-16 mg-b-40">Welcome back! Please signin to continue.</p>

                <div className="form-group">
                  <label>Email address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    className="form-control" 
                    placeholder="yourname@yourmail.com"
                    value={data.email}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <div className="d-flex justify-content-between mg-b-5">
                    <label className="mg-b-0-f">Password</label>
                    <a href="" className="tx-13" tabIndex={-1}>Forgot password?</a>
                  </div>
                  <input 
                    type="password" 
                    id="password"
                    name="password"
                    className="form-control" 
                    placeholder="Enter your password"
                    value={data.password}
                    onChange={handleOnChange}
                  />
                </div>
                <button 
                  className="btn btn-brand-02 w-100"
                  onClick={handleSubmit}
                >Sign In</button>

                <div className="divider-text">or</div>
                <div className="d-grid gap-2">
                  <button className="btn btn-outline-facebook btn-block">Sign In With Facebook</button>
                  <button className="btn btn-outline-twitter btn-block">Sign In With Twitter</button>
                </div>
                <div className="tx-13 mg-t-20 tx-center">Don't have an account? <a href="page-signup.html">Create an Account</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <Footer />
    </div>
  )
}

export default SignIn