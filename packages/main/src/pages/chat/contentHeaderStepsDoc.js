import React, {useState} from 'react'
import FeatherIcon from 'feather-icons-react';

const ContentHeaderStepsDoc = () => {
  const [show,setShow] = useState(false)
  const handleClick = () => {
    setShow((prev)=>!prev)
  }

  return (
    <div className="dropdown dropdown-steps">
      <a className="tx-13 dropdown-title breadcrumb-title" data-toggle="dropdown">
        <span>HOME</span> 
      </a>
      <span className="m-lg-2 tx-color-03"><FeatherIcon icon="chevron-right"/></span>

      <a onClick={handleClick} className="tx-13 ficon-15 dropdown-title breadcrumb-title" data-toggle="dropdown">
        <span>내 폴더</span>
      </a>
      
      <div className={`dropdown-menu tx-13 ${show ? "show" : "d-none"} wd-300 pd-15 mt-3`}>
        <form className="">
          <div className="d-flex rounded mg-b-0">
              <input type="search" className="form-control m-2" placeholder="검색어를 입력하세요." id="search_epic"/>
              <span className="align-self-center"><FeatherIcon icon="search"/></span>
          </div>
        </form>

        <hr className="mg-y-5"/>
        <div id="scroll_epic" className="pos-relative ht-150 ps">
          <ul className="list-group">
            <li className="list-group-item ficon-14 bd-0 pd-3 search-epic"><FeatherIcon icon="arrow-right"/> <a href="#" className="tx-dark search-keyword cls-WBSSelected">개발 계획 수립 및 검토</a></li>
            <li className="list-group-item ficon-14 bd-0 pd-3 search-epic"><FeatherIcon icon="arrow-right"/> <a href="#" className="tx-dark search-keyword cls-WBSSelected">시스템 구성도 검증 및 테스트</a></li>
            <li className="list-group-item ficon-14 bd-0 pd-3 search-epic"><FeatherIcon icon="arrow-right"/> <a href="#" className="tx-dark search-keyword cls-WBSSelected">UI 설계 및 검증 테스트</a></li>
          </ul>
        </div>
      </div>

      <span className="m-lg-2 tx-color-03"><FeatherIcon icon="chevron-right"/></span>
      <a className="tx-13 dropdown-title breadcrumb-title" data-toggle="dropdown">
        <span>2023년도 (주)에이블스토어 납품현황.xls</span> 
      </a>
    </div>
  )
}

export default ContentHeaderStepsDoc