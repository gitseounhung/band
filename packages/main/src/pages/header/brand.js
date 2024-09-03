import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';

const Brand = () => {
  const handleNavbarMenuShow = (e) => {
    e.preventDefault()
    console.log('handleNavbarMenuShow 반복되서 호출되나 보세요.')
    document.body.classList.toggle('navbar-nav-show', true)
  }
      
  return (
    <>
      <Link to="/" onClick={handleNavbarMenuShow} className="burger-menu"><FeatherIcon icon="menu"/></Link>
      <Link to="/" id="chatContentClose" className="burger-menu d-none"><FeatherIcon icon="arrow-left"/></Link>
      <div className="navbar-brand">
          <Link to="/" className="df-logo">zio.<span>ject</span></Link>
      </div>
    </>
  )
}

export default Brand