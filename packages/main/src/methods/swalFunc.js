import axios from "axios"
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

export const CreateChannel = async (sessionId) => {
  const { value: getName } = await Swal.fire({
      title: '새 채널 생성',
      text: '40자 이내로 새로운 채널명을 입력하실 수 있습니다.',
      showCancelButton: true,
      input: 'text',
      inputPlaceholder: '채널명을 입력하세요...'
  })
  if (getName) {
    return CreateChannelSubmit(getName,sessionId)
    // Swal.fire(`: ${getName}`)
  }
}
const CreateChannelSubmit = async(getName,sessionId)=>{
  const URL = `${process.env.REACT_APP_BACKEND_URL}/api/create-channel`
  try {
    const response = await axios.post(URL,{
      userId: sessionId,
      channelName: getName,
    })
    toast.success(response.data.message)
    if (response.data.success){
      return response.data.data._id
    }
  } catch(error){
    toast.error(error?.response?.data?.message)
  }
}
