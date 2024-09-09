import React from 'react'
import { useNavigate } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import Swal from 'sweetalert2';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAppSelector } from '@zio/shared/redux/hooks';

const SidebarBodyChannelChat = () => {
  const navigate = useNavigate()
  const session = useAppSelector(state=>state.session)

  const handleCreateChannel = async () => {
    const { value: getName } = await Swal.fire({
        title: '새 채널 생성',
        text: '40자 이내로 새로운 채널명을 입력하실 수 있습니다.',
        showCancelButton: true,
        input: 'text',
        inputPlaceholder: '채널명을 입력하세요...'
    })

    // 이후 처리되는 내용.
    if (getName) {
      createChannelSubmit(getName)
      // Swal.fire(`: ${getName}`)
    }
  }
  const createChannelSubmit = async(getName)=>{
    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/create-channel`
    try {
      const response = await axios.post(URL,{
        userId: session?._id,
        channelName: getName,
      })
      toast.success(response.data.message)
      if (response.data.success){
        console.log('response',response.data.data)
        navigate('/chat/'+response.data.data._id)
      }
    } catch(error){
      console.log('error',error)
      toast.error(error?.response?.data?.message)
    }
  }

  return (
    <div className="flex-fill pd-y-20 pd-x-10">
      <div className="d-flex align-items-center justify-content-between pd-x-10 mg-b-10">
        <span className="tx-10 tx-uppercase tx-medium tx-color-03 tx-sans tx-spacing-1">All Channels</span>
        <div
          className="chat-btn-add" 
          data-bs-toggle="modal"
          onClick={handleCreateChannel}
        >
          <span data-bs-toggle="tooltip" title="Create Channel"><FeatherIcon icon="plus-circle"/></span>
        </div>
      </div>
      <nav id="allChannels" className="nav flex-column nav-chat">
        <a href="#general" className="nav-link active"># general</a>
        <a href="#engineering" className="nav-link"># engineering</a>
        <a href="#products" className="nav-link"># products <span className="badge text-bg-danger">2</span></a>
      </nav>
    </div>    
  )
}

export default SidebarBodyChannelChat