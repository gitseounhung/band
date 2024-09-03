import React from 'react'
import { Link,useParams } from 'react-router-dom'

const SettingsSidebarMenu = () => {
  const params = useParams()
  console.log('params.page1', params.page)

  return (
    <div id="sidebarMenu" className="sidebar sidebar-fixed sidebar-components">
      <div className="sidebar-header">
        <a href="#" id="mainMenuOpen"><i data-feather="menu"></i></a>
        <h5>환경설정</h5>
        <a href="#" id="sidebarMenuClose"><i data-feather="x"></i></a>
      </div>
      <div className="sidebar-body">
        <ul className="sidebar-nav">
          <li className="nav-label mg-b-15">Settings</li>
          <li className="nav-item"><Link to="skin" className={`nav-link ${params.page==='skin' ? "active" : ""}`}><i data-feather="layout"></i>스킨 변경</Link></li>
          <li className="nav-item"><Link to="main" className="nav-link tx-color-02"><i data-feather="monitor"></i> 비밀번호 변경</Link></li>
          <li className="nav-item"><Link to="main" className="nav-link"><i data-feather="copy"></i> 개인정보 변경</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default SettingsSidebarMenu