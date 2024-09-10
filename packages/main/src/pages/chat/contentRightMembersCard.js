import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@zio/components'
import { RiAddFill, RiUserAddLine, RiCheckFill, RiCloseFill } from 'react-icons/ri'
import Swal from 'sweetalert2'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useAppDispatch } from '@zio/shared/redux/hooks'
import { setSearchTxt } from '../../redux/slices/band'

const ContentRightMembersCard = ({
  channelId, 
  user, 
  isMember, 
  setChannelMembers, 
}) => {
  const dispatch = useAppDispatch()
  const handleClick = () => {
    Swal.fire({
      title: `대화 상대 ${isMember ? "삭제" : "추가"}`,
      text: `대화 상대 ${user.name}님을 ${isMember ? "삭제" : "추가"}하시겠습니까 ?`,
      showCancelButton: true,
      confirmButtonText: "승인"
    }).then((result)=>{
      if (result.isConfirmed) {
        handleJoinMember()
      }
    })
  }
  const handleJoinMember = async() => {
    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/joinMember`
    try{
      const response = await axios.post(URL,{
        isMember: isMember,
        channelId: channelId,
        userId: user._id,
        userName: user.name,
        profile_pic: user.profile_pic,
      })
      console.log('response.data.data',response.data.data)
      setChannelMembers((prev)=>{
        if (isMember) {
          const reload = prev.filter((f)=>{
            return f._id !== response.data.data.userId
          })
          return reload
        } else {
          return [
            ...prev,
            response.data.data
          ]
        }
      })
      dispatch(setSearchTxt('')) // 검색어를 없앤다.
      toast.success(`${user.name}님을 대화 상대로 ${isMember ? "삭제" : "추가"}했습니다.`)
    }catch(error){
      console.log('error',error)
      toast.error(error?.response?.data?.message)
    }
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
            <span data-bs-toggle="tooltip">
              {!isMember ? <RiAddFill size={20}/> : <RiCloseFill size={20}/>}
            </span>
          </div>
      </div>
    </div>

  )
}

export default ContentRightMembersCard