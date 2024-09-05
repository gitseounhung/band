import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchTxt: "", // 검색어
  docUrl: "about:blank", // 문서URL
  inputMessage: {}
}

const bandSlice = createSlice({
  name: "band",
  initialState,
  reducers: {
    setSearchTxt(state,action){
      state.searchTxt = action.payload
    },
    setDocUrl(state,action){
      state.docUrl = action.payload
    },
    setInputMessage(state,action){
      state.inputMessage = action.payload
    },
  },
})

export const {
  setSearchTxt,
  setDocUrl,
  setInputMessage
} = bandSlice.actions
export default bandSlice.reducer