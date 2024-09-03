import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '@zio/shared/redux/hooks'
import { Avatar } from '@zio/components'
import { RiSearchLine } from "react-icons/ri"

const SidebarBodyMessageChat = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()  
  const [allUser,setAllUser] = useState([])
  const user = useAppSelector(state => state?.session)
  const socketConnection = useAppSelector(state=>state?.session?.socketConnection)

  useEffect(()=>{
    if (socketConnection){
      socketConnection.emit('sidebar',user._id)
      socketConnection.on('conversation',(data)=>{
        const conversationUserData = data.map((conversationUser,index)=>{
          // console.log('conversationUser',conversationUser)

          // 1. 발신자==수신자==내게쓴메시지
          if(conversationUser?.sender?._id === conversationUser?.receiver?._id){
            return{
              ...conversationUser,
              userDetails : conversationUser?.sender
            }
          }
          // 2.수신자가 내가 아니면
          else if(conversationUser?.receiver?._id && conversationUser?.receiver?._id !== user?._id){
            return{
              ...conversationUser,
              userDetails : conversationUser.receiver
            }
          } else { // 3. 그외 (다른 사람이 나에게 보낸 경우)
            return{
              ...conversationUser,
              userDetails : conversationUser.sender
            }
          }
        })
        setAllUser(conversationUserData)
      })
    }
  },[socketConnection, user])

  const handleRoomLink = (e, convId) => {
    e.preventDefault()
    e.stopPropagation()
    navigate('/chat/'+convId)
  }

  return (
    <div className="flex-fill pd-y-20 pd-x-10 bd-t">
      <p className="tx-10 tx-uppercase tx-medium tx-color-03 tx-sans tx-spacing-1 pd-l-10 mg-b-10">최근 대화</p>
      <div id="chatDirectMsg" className="chat-msg-list">
        {
          allUser.length === 0 && (
            <div className='mt-12'>
              <div className='text-center m-5 tx-color-03'><RiSearchLine size={40}/></div>
              <p className='text-center m-5 tx-color-03'>대화를 시작할 사용자를 탐색하세요.</p>
            </div>
          )
        }
        {/* 방목록 표시 */}
        {
          allUser.map((conv,index)=>{
            return (
              <div
                  key={conv?._id} 
                  onClick={(e)=>{handleRoomLink(e, conv?.userDetails?._id)}} 
                  className='media'
                >
                  <Avatar
                      imageUrl={conv?.userDetails?.profile_pic}
                      name={conv?.userDetails?.name}
                      width={32}
                      height={32}
                  />
                  
                  <div className="media-body mg-l-10">
                      <h6 className="d-flex mg-b-0">
                        {conv?.userDetails?.name}
                        {
                          Boolean(conv?.unseenMsg) && (
                            <span className="badge text-bg-danger" style={{marginLeft:"auto"}}>5</span>
                          )
                        }                        
                      </h6>
                      <small className="d-block tx-color-04">1 시간 전, {conv?.lastMsg?.text}</small>
                  </div>
              </div>
            )
          })
        }


      </div>
    </div>
  )
}

export default SidebarBodyMessageChat