import { createSlice , createAsyncThunk  } from "@reduxjs/toolkit";
import baseURL from '../API/baseURL';




export const SignUP = createAsyncThunk("signUp", async (data) => {
  return baseURL.post("/api/v1/auth/signup", data)
    .then(res => res.data).catch(err => err.response.data)
})


export const Login = createAsyncThunk("Login", async (data) => {
    return baseURL.post("/api/v1/auth/login",data).then(res => res.data).catch(err=>err.response.data)

})

export const ForgetPass = createAsyncThunk("ForgetPass", async (data) => {
  return await baseURL.post("/api/v1/auth/forgotPasswords", data)
    .then(res => res.data).catch(err=> err.response.data)
})

const SliceRegister = createSlice({
  name: "register",
  initialState: {},
  extraReducers: {
    [SignUP.pending]: (state)=> {state.load = true},
    [SignUP.fulfilled]: (state, action) => {
      state.user = action.payload
      state.load = false
    },
    [SignUP.rejected]: (state, action) => {
      state.user = action.payload
      state.load = false
    },


    [Login.pending]: (state)=> {state.load = true},
    [Login.fulfilled]: (state, action) => {
      state.user = action.payload
      state.load = false
    },
    [Login.rejected]: (state, action) => {
      state.user =action.payload
      state.load = false
    },



    [ForgetPass.pending]: (state)=> {state.load = true},
    [ForgetPass.fulfilled]: (state, action) => {
      state.user = action.payload
      state.load = false
    },
    [ForgetPass.rejected]: (state, action) => {
      state.user =action.payload
      state.load = false
    },





  }
})

export default  SliceRegister.reducer