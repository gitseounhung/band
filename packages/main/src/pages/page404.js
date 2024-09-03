import '@zio/shared/css/dashforge.auth.css'
import Img404 from '@zio/shared/images/page404.png'
import React from 'react'
import Header from './header'
import Footer from './footer'

const Page404 = () => {
  const BodyPage = () => {
    return (
      <div className="content content-fixed content-auth-alt">
        <div className="container ht-100p tx-center">
          <div className="ht-100p d-flex flex-column align-items-center justify-content-center">
            <div className="wd-70p wd-sm-250 wd-lg-300 mg-b-50"><img src={Img404} className="img-fluid" alt=""/></div>
            <h1 className="tx-color-01 tx-24 tx-sm-32 tx-lg-36 mg-xl-b-5">404 Page Not Found</h1>
            <h5 className="tx-16 tx-sm-18 tx-lg-20 tx-normal mg-b-20">앗. 아직 리엑트 버전을 만들지 못했네요.</h5>
            <p className="tx-color-03 mg-b-30 mg-l-100 mg-r-100">dashforge ux는 최고의 admin template입니다. 리엑트 버전인 doar 템플릿이 있으나, Styled Template를 사용해서, 매우 소스코드가 복잡합니다. 순순 html 버전으로 제작된 dashforge의 css를 그대로 사용해서 제작된 리엑트 템플릿입니다.</p>
            
            <span className="tx-12 tx-color-03">지오유에서 dashforge 리엑트 버전을 제작. <a href="https://help.zioyou.com" target="_new">zioyou (zioyou.com)</a></span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <BodyPage />
      <Footer />
    </div>
  )
}

export default Page404