import React from 'react'
import FeatherIcon from 'feather-icons-react';
import { foldersData } from '@zio/shared/data'

const SidebarBodyChannelDoc = () => {
  return (
    <div className="pd-y-20 pd-x-10">

    
      <nav id="allChannels" className="nav flex-column nav-chat">
        <a href="#general" className="nav-link mg-b-4">
          <div className="align-self-baseline"><FeatherIcon icon="more-horizontal" size={20} className='tx-color-03'/></div>
          <div className="media-body mg-l-10">
            <h6 className="mg-b-0 tx-color-03">상위 폴더로 이동</h6>
          </div>
        </a>          
      {
        foldersData.map((folder)=>{
          return (
            <a href="#general" className="nav-link">
              <div className="align-self-baseline"><FeatherIcon icon="folder" size={20}/></div>
              <div className="media-body mg-l-10">
                <h6 className="mg-b-0">{folder.foldername}</h6>
                <small className="d-block tx-color-04">{folder.alter}</small>
              </div>
            </a>
          )
        })
      }
      </nav>
    </div>
  )
}

export default SidebarBodyChannelDoc