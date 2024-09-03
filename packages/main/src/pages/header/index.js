import React, { useCallback, useEffect, useMemo } from 'react'
import Brand from './brand.js'
import Menu from './menu.js'
import Right from './right.js'


const Header = () => {
  //여기에서 세션체크하는 자리로...

  return (
    <header className="navbar navbar-header navbar-header-fixed">
      <Brand />
      <Menu />
      <Right />
    </header>
  )
}

export default Header