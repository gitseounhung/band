import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  darkMode: true, //true, false
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode(state,action){
      state.darkMode = action.payload
    },
  },
})

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer
