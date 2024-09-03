import React from 'react'

const ModalCreateChannel = ({modal, onClose}) => {
  return (
    <div 
      className={`modal fade effect-scale ${modal==='CreateChannel' ? "show" : "d-none"}`}
      style={{display:`${modal==='CreateChannel' ? "block" : "none"}`}}
      id="modalCreateChannel" 
      tabIndex="-1" 
      role="dialog" 
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div className="modal-content">
          <div className="modal-body pd-20">
            <button 
              type="button" 
              className="btn-close pos-absolute t-15 r-15" 
              data-dismiss="modal" 
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true"></span>
            </button>
            <h6 className="tx-uppercase tx-spacing-1 tx-semibold mg-b-20">채널 만들기</h6>
            <input type="text" className="form-control" placeholder="채널명을 입력하세요." value="" />
          </div>
          <div className="modal-footer pd-x-20 pd-b-20 pd-t-0 bd-t-0">
            <button type="button" className="btn btn-secondary tx-13" data-dismiss="modal" onClick={onClose}>취소</button>
            <button type="button" className="btn btn-primary tx-13">생성</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ModalCreateChannel