import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  _id: "", // 상대방ID
  name: "", // 상대방명
  email: "", // 상대방이메일
  profile_pic: "", // 상대방사진
  online: false, // 온라인여부
}

const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    setChannel: (state,action)=>{
      state._id = action.payload._id
      state.name = action.payload.name
      state.email = action.payload.email
      state.profile_pic = action.payload.profile_pic
    },
  },
})

export const {
  setChannel
} = channelSlice.actions
export default channelSlice.reducer