import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modal: "", //InvitePeople,CreateChannel
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleModal(state,action){
      const {payload:{modal},}=action
      state.modal = modal
    },
  },
})

export const { toggleModal } = uiSlice.actions;
export default uiSlice.reducer
