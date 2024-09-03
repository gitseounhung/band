import React, { useCallback } from 'react'
import Brand from './brand.js'
import Menu from './menu.js'
import Right from './right.js'
import { IsSession } from '@zio/shared/methods/session'

const Header = () => {
  // useCallback(()=>{
  //     IsSession()
  // },[])

  return (
    <header className="navbar navbar-header navbar-header-fixed">
      <Brand />
      <Menu />
      <Right />
    </header>
  )
}

export default Header