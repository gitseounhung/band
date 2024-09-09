import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@zio/components'
import { RiAddFill, RiUserAddLine, RiCheckFill, RiSubtractFill } from 'react-icons/ri'
import Swal from 'sweetalert2'

const ContentRightMembersCard = ({user,icon}) => {
  const handleClick = () => {
    Swal.fire({
      title: "초대",
      text: "신달수를 채널에 초대하시겠습니까 ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "승인",
      denyButtonText: `취소`
    }).then((result)=>{
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success")
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info")
      }
    })
  }
  
  return (
    <div className="media">
      <Avatar
        userId={user._id}
        name={user.name}
        imageUrl={user.profile_pic}
        width={32}
        height={32}
      />
      <div className="media-body mg-l-10 d-flex justify-content-between align-items-center">
          <h6 className="mg-b-0">{user?.name}</h6>
          <div  
            className="chat-btn-add" 
            onClick={handleClick}
          >
            <span data-bs-toggle="tooltip" title="대화 상대 추가"><RiAddFill size={20}/></span>
          </div>
      </div>
    </div>

  )
}

export default ContentRightMembersCard