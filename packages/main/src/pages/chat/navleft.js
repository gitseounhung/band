import React from 'react'
import FeatherIcon from 'feather-icons-react';

const Navleft = () => {
  return (
    <div className="chat-navleft">
        <nav className="nav flex-column">
          <a href="#" className="nav-link active" data-bs-toggle="tooltip" title="내 폴더" data-placement="right">
            <FeatherIcon icon="folder" />
          </a>
          <div className="divider"></div>
          <a href="#" className="nav-link" data-bs-toggle="tooltip" title="공유 폴더" data-placement="right">
            <FeatherIcon icon="users" />
          </a>
          <a href="#" className="nav-link" data-bs-toggle="tooltip" title="최근 문서함" data-placement="right">
            <FeatherIcon icon="clock" />
          </a>
          <a href="#" className="nav-link" data-bs-toggle="tooltip" title="중요 문서함" data-placement="right">
            <FeatherIcon icon="star" />
          </a>
          <a href="#" className="nav-link" data-bs-toggle="tooltip" title="검색" data-placement="right">
            <FeatherIcon icon="search" />
          </a>
          <a href="#" className="nav-link" data-bs-toggle="tooltip" title="휴지통" data-placement="right">
            <FeatherIcon icon="trash-2" />
          </a>
        </nav>
      </div>
  )
}

export default Navleft