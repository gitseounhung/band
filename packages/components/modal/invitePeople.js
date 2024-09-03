import React from 'react'

const ModalInvitePeople = ({modal, onClose}) => {
  return (
    <div 
      className={`modal fade effect-scale ${modal==='InvitePeople' ? "show" : "d-none"}`}
      style={{display:`${modal==='InvitePeople' ? "block" : "none"}`}}
      id="modalInvitePeople" 
      tabIndex="-1" 
      role="dialog" 
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body pd-20 pd-sm-30">
            <button 
              type="button" 
              className="btn-close pos-absolute t-20 r-20" 
              data-dismiss="modal" 
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true"></span>
            </button>

            <h6 className="tx-18 tx-sm-20 mg-b-5">회원 초대</h6>
            <p className="tx-color-03 mg-b-20">아래 링크를 친구에게 공유하여 채널에 가입시키세요.</p>
            <div className="input-group mg-b-5">
              <input type="text" className="form-control" value="http://themepixels.me/dashforge" readonly/>
              <div className="input-group-append">
                <button className="btn btn-outline-light" type="button" id="button-addon2">복사</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalInvitePeople