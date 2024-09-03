import React from 'react'
import FeatherIcon from 'feather-icons-react';
import { Dropdown, DropdownMenu } from '@zio/components'

const ContentFooterPlus = () => {
  return (
    <Dropdown className="dropdown dropup dropdown-chatplus">
      <a href="#" className="dropdown-link chat-plus" data-bs-toggle="dropdown" style={{height:"60px"}}>
        <FeatherIcon icon="plus"/>
      </a>
      <DropdownMenu className="dropdown-menu tx-13" style={{position:"absolute",inset:"auto auto 26px 6px",margin:"0px",transform:"translate3d(0px, -40px, 0px)"}} data-popper-placement="top-start">
        <a className="dropdown-item" href="#">이미지 파일</a>
        <a className="dropdown-item" href="#">동영상 파일</a>
        <a className="dropdown-item" href="#">이모티콘</a>
      </DropdownMenu>
    </Dropdown>
  )
}

export default ContentFooterPlus

