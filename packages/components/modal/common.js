import React from 'react'
import ModalConfirm from './confirm'

const ModalCommon = ({modal, onClose}) => {
  return (
    <>
      <ModalConfirm modal={modal} onClose={onClose}/>           
      <div className={`modal-backdrop fade ${modal!=="" ? "show" : "d-none"}`}></div>
    </>
  )
}

export default ModalCommon