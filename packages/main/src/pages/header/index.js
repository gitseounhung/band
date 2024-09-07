import Brand from './brand.js'
import Menu from './menu.js'
import Right from './right.js'

const Header = () => {

  return (
    <header className="navbar navbar-header navbar-header-fixed">
      <Brand />
      <Menu/>
      <Right/>
    </header>
  )
}

export default Header