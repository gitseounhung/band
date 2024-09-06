import React from 'react'
import FeatherIcon from 'feather-icons-react';
import { Dropdown, DropdownMenu } from '@zio/components'

const ContentFooterPlus = ({handleUploadFile}) => {
  return (
    <Dropdown className="dropdown dropup dropdown-chatplus">
      <a href="#" className="dropdown-link chat-plus" data-bs-toggle="dropdown" style={{height:"60px"}}>
        <FeatherIcon icon="plus"/>
      </a>
      <DropdownMenu className="dropdown-menu tx-13" style={{position:"absolute",inset:"auto auto 26px 6px",margin:"0px",transform:"translate3d(0px, -40px, 0px)"}} data-popper-placement="top-start">
        <div className="dropdown-item">
          <label htmlFor='uploadImage'>이미지 파일</label>
          <input
            type='file'
            id='uploadImage'
            className='d-none'
            onChange={(e)=>handleUploadFile('imageUrl',e)}
          />
        </div>        
        <div className="dropdown-item">
          <label htmlFor='uploadVideo'>동영상 파일</label>
          <input
            type='file'
            id='uploadVideo'
            className='d-none'
            onChange={(e)=>handleUploadFile('videoUrl',e)}
          />
        </div>        
        <div className="dropdown-item">
          <label>이모티콘</label>
        </div>

      </DropdownMenu>
    </Dropdown>
  )
}

export default ContentFooterPlus

