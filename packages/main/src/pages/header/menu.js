import React from 'react'
import FeatherIcon from 'feather-icons-react';
import { Navbar } from '@zio/components'
import { menuDataOut, menuDataIn } from '@zio/main/src/data'
import { useAppSelector } from '@zio/shared/redux/hooks';

const Menu = () => {
  const isSession = useAppSelector(state=>state.session.isSession)

  const handleNavbarMenuHide = (e) => {
    e.preventDefault()
    console.log('handleNavbarMenuHide 반복되서 호출되나 보세요.')
    document.body.classList.toggle('navbar-nav-show', false)
  }

  return (
    <div id="navbarMenu" className="navbar-menu-wrapper" >
      <div className="navbar-menu-header">
        <a href="#" className="df-logo">zio.<span>ject</span></a>
        <a onClick={handleNavbarMenuHide} href="#"><FeatherIcon icon="x"/></a>
      </div>
      <Navbar menus={isSession ? menuDataIn : menuDataOut}/>
    </div>
  )
}

export default Menu