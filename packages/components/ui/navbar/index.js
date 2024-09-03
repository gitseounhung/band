import { useCallback } from 'react'
import { getSiblings } from '../../../shared/methods'
import { useClickOutside } from '../../../shared/hooks'
import { Link } from 'react-router-dom'

const Navbar = ({menus}) => {
  const clickHandler = (e,hasChildren) => {
    if (hasChildren){
      e.preventDefault()
      let target = e.currentTarget
      target?.classList.toggle('show')
      const siblings = getSiblings(target)
      siblings.forEach((sib)=>{
        sib?.classList?.remove("show")
      })
    }
  }
  const onClose = useCallback(()=>{
    const nav = document.querySelector('.navbar-menu')
    const submenu = nav?.querySelectorAll('.nav-item')
    submenu?.forEach((el)=>el.classList.remove("show"))
  },[])
  const containerRef = useClickOutside(onClose)

  return (
    <ul ref={containerRef} className="nav navbar-menu">
      <li className="nav-label pd-l-20 pd-lg-l-25 d-lg-none">Main Navigation</li>
      { 
        menus.map((nav)=>{
          const {
            submenu,
            megamenu,
            id: navId,
            Icon: NavIcon, // 아이콘 객체임
            label: navLabel,
          } = nav
          const hasSubmenu = !!submenu?.length //!!뜻 (undefined, "", 0일때 false 그외는 true)
          const hasMegamenu = !!megamenu?.length
          const hasChildren = hasSubmenu || hasMegamenu
          return (
            <li key={navId} className={`nav-item ${hasChildren ? "with-sub" : ""}`} onClick={(e)=>clickHandler(e,hasChildren)}>
              <Link to={nav.url} className="nav-link">{<NavIcon/>} {navLabel}</Link>
              {
                submenu && (
                  <ul className="navbar-menu-sub">
                    {
                      submenu.map(({id,label,url,Icon})=>{
                        if (label==='divider'){
                          return (
                            <li className="nav-sub-divider"></li>
                          )
                        }else{
                          return (
                            <li key={id} className="nav-sub-item"><Link to={url} className="nav-sub-link">{<Icon/>}{label}</Link></li>
                          )
                        }
                      })
                    }
                  </ul>
                )
              }
              {
                megamenu && (
                  <div className="navbar-menu-sub">
                    <div className="d-lg-flex">
                      {
                        megamenu.map((megaNav)=>{
                          return (
                            <ul>
                              <li key={megaNav.id} className="nav-label">{megaNav.title}</li>
                              {
                                megaNav.submenu.map(({id,label,url,Icon})=>{
                                  return (
                                    <li key={id} className="nav-sub-item"><Link to={url} className="nav-sub-link">{<Icon/>} {label}</Link></li>
                                  )
                                })
                              }                                                          
                            </ul>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              }
            </li>
          )
        })
      }
    </ul>
  )
}

export default Navbar