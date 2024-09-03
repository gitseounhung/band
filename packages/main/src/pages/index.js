import '@zio/shared/css/dashforge.landing.css';
import React from 'react'
import Header from './header'
import BodyHome from './home'

const Home = () => {
  return (
    <div className="home-body">
      <Header />
      <BodyHome />
    </div>
  )
}

export default Home
