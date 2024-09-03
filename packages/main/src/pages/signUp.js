import '@zio/shared/css/dashforge.auth.css'
import Header from './header'
import Footer from './footer'
import React from 'react'

const SignUp = () => {
  return (
    <div>
      <Header />    
      


      <div className="content content-fixed content-auth">
        <div className="container">
          <div className="media align-items-stretch justify-content-center ht-100p">
            <div className="sign-wrapper mg-lg-r-50 mg-xl-r-60">
              <div className="pd-t-20 wd-100p">
                <h4 className="tx-color-01 mg-b-5">Create New Account</h4>
                <p className="tx-color-03 tx-16 mg-b-40">It's free to signup and only takes a minute.</p>

                <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control" placeholder="Enter your email address"/>
                </div>
                <div className="form-group">
                  <div className="d-flex justify-content-between mg-b-5">
                    <label className="mg-b-0-f">Password</label>
                  </div>
                  <input type="password" className="form-control" placeholder="Enter your password"/>
                </div>
                <div className="form-group">
                  <label>Firstname</label>
                  <input type="text" className="form-control" placeholder="Enter your firstname"/>
                </div>
                <div className="form-group">
                  <label>Lastname</label>
                  <input type="text" className="form-control" placeholder="Enter your lastname"/>
                </div>
                <div className="form-group tx-12">
                  By clicking <strong>Create an account</strong> below, you agree to our terms of service and privacy statement.
                </div>

                <button className="btn btn-brand-02 w-100">Create Account</button>
                <div className="divider-text">or</div>
                <div className="d-grid gap-2">
                  <button className="btn btn-outline-facebook btn-block">Sign Up With Facebook</button>
                  <button className="btn btn-outline-twitter btn-block">Sign Up With Twitter</button>
                </div>
                <div className="tx-13 mg-t-20 tx-center">Already have an account? <a href="page-signin.html">Sign In</a></div>
              </div>
            </div>
            <div className="media-body pd-y-30 pd-lg-x-50 pd-xl-x-60 align-items-center d-none d-lg-flex pos-relative">
              <div className="mx-lg-wd-500 mx-xl-wd-550">
                <img src="https://placehold.co/1280x1225" className="img-fluid" alt=""/>
              </div>
              <div className="pos-absolute b-0 r-0 tx-12">
                Social media marketing vector is created by <a href="https://www.freepik.com/pikisuperstar" target="_blank">pikisuperstar (freepik.com)</a>
              </div>
            </div>
          </div>
        </div>
      </div>




      <Footer />
    </div>
  )
}

export default SignUp