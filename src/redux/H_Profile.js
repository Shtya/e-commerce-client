import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import baseURL from '../API/baseURL';

const config = {headers:{Authorization :`Bearer ${localStorage.getItem("token")}`}}


export const PUT_user = createAsyncThunk("PUT_user", async({id ,...send}) => {
  return baseURL.put(`/api/v1/users/${id}`, send, config)
    .then(res => res.data).catch(err => err.response.data)
})


export const PUT_password = createAsyncThunk("PUT_password", async({id ,...send}) => {
  return baseURL.put(`/api/v1/users/change-password/${id}`, send, config)
    .then(res => res.data).catch(err => err.response.data)
})




const SliceProfile = createSlice({
  name: "User", 
  initialState: {},
  reducers: {},
  
  extraReducers: {
    [PUT_user.pending]  : (state)          => {state.load = true },
    [PUT_user.fulfilled]: (state, action)  => {
      state.Profile = action.payload
      state.load = false
    }, 
    [PUT_user.rejected]: (state, action)  => {
      state.Profile = action.payload
      state.load = false
    }, 


    [PUT_password.pending]  : (state)          => {state.load = true },
    [PUT_password.fulfilled]: (state, action)  => {
      state.Profile = action.payload
      state.load = false
    }, 
    [PUT_password.rejected]: (state, action)  => {
      state.Profile = action.payload
      state.load = false
    }, 



  }
})

export default SliceProfile.reducer