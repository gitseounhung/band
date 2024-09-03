import React, { useState } from 'react'
import FeatherIcon from 'feather-icons-react';
import { useAppDispatch } from '@zio/shared/redux/hooks'
import { toggleModal } from '@zio/shared/redux/slices/ui'

const SidebarHeaderDoc = () => {
  const [openMenu,setOpenMenu] = useState(false)
  const dispatch = useAppDispatch()
  const handleModal = () => {
    dispatch(toggleModal({modal:"confirm"}))
  }  

  return (
    <div className="chat-sidebar-header">
      <a onClick={()=>setOpenMenu(preve=>!preve)} data-bs-toggle="dropdown" className={`cursor-pointer dropdown-link ${openMenu ? "show" : ""}`}>
        <span className="tx-color-01 tx-semibold">내 폴더</span>
        <span><FeatherIcon icon="chevron-down"/></span>
      </a>
      <div 
        className={`dropdown-menu dropdown-menu-end shadow ${openMenu ? "show" : ""}`} 
        style={{
          position:"absolute",
          // inset:"0px 0px auto auto",
          margin:"0px",
          transform:"translate3d(0px,61.8182px,0px)"
        }}
      >
        <a href="#" className="dropdown-item"><FeatherIcon icon="plus-square"/> 하위 폴더 만들기</a>
        <div className="dropdown-divider"></div>
        <a href="#" onClick={handleModal} className="dropdown-item"><FeatherIcon icon="shield-off"/> 폴더 삭제</a>
        <a href="#" className="dropdown-item"><FeatherIcon icon="edit-3"/> 폴더 속성</a>
      </div>
    </div>
  )
}

export default SidebarHeaderDoc

