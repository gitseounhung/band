import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    _id: "",
    name: "",
    email: "",
    profile_pic: "",
    token: "",
    onlineUser: [],
    socketConnection: null
}

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setUser: (state,action)=>{
            state._id = action.payload._id
            state.name = action.payload.name
            state.email = action.payload.email
            state.profile_pic = action.payload.profile_pic
        },
        setToken: (state,action)=>{
            state.token = action.payload
        },
        logout: (state,action)=>{
            state._id = ""
            state.name = ""
            state.email = ""
            state.profile_pic = ""
            state.token = ""
            state.socketConnection = null
        },
        setOnlineUser: (state,action)=>{
            state.onlineUser = action.payload
        },
        setSocketConnection: (state,action)=>{
            state.socketConnection = action.payload
            //soketConnection오타로 하루 밤샘(c자빠짐)
        }
    },
})

// 각 케이스 리듀서 함수에 대해 액션 생성자가 생성됩니다.
export const { setUser, setToken, logout, setOnlineUser, setSocketConnection } = sessionSlice.actions

export default sessionSlice.reducer