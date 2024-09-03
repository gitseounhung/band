import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchTxt: "", // 검색어
  docUrl: "about:blank", // 문서URL
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
  },
})

export const {
  setSearchTxt,
  setDocUrl
} = bandSlice.actions
export default bandSlice.reducer