import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  leftSidebar: "chat", // chat,doc
  rightSidebar: true, // 보이고,안보이고
}

const chatUISlice = createSlice({
  name: "chatUI",
  initialState,
  reducers: {
    toggleLeftSidebar(state,action){
      const {payload:{mode},} = action
      state.leftSidebar = mode
    },
    toggleRightSidebar(state){
      state.rightSidebar = !state.rightSidebar
    },
  },
})

export const {
  toggleLeftSidebar,
  toggleRightSidebar
} = chatUISlice.actions
export default chatUISlice.reducer