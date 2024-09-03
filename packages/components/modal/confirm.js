import React from 'react'

const ModalConfirm = ({modal, onClose}) => {
  return (
    <div 
      className={`modal ${modal==='confirm' ? "show" : "d-none"}`}
      style={{display:`${modal==='confirm' ? "block" : "none"}`}}
      tabIndex="-1" 
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title">확인</h6>
            <button 
              type="button" 
              className="btn-close" 
              data-bs-dismiss="modal" 
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div className="modal-body">
            <p className="mg-b-0">정말로 작업하시려는것이 맞습니까 ? </p>
          </div>
          <div className="modal-footer">
            <button onClick={onClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">아니오</button>
            <button onClick={onClose} type="button" className="btn btn-primary">예</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalConfirm
