import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import baseURL from '../API/baseURL';

const config = {headers:{Authorization :`Bearer ${localStorage.getItem("token")}`}}


export const GET_Address = createAsyncThunk("GET_Address", async () => {
  const res = await baseURL.get("/api/v1/addresses" ,config)
  return res.data
})



export const PUT_Address = createAsyncThunk("PUT_Address", async({id , ...send}) => {
  return baseURL.put(`/api/v1/addresses/${id}`, send, config).then(res => res.data).catch(err => err.response.data)
})

export const POST_Address = createAsyncThunk("POST_Address", (send) => {
  return baseURL.post(`/api/v1/addresses`, send, config).then(res => res.data).catch(err => err.response.data)
})


export const DELETE_Address = createAsyncThunk("DELETE_Address", async (id) => {
  const res = await baseURL.delete(`/api/v1/addresses/${id}` ,config)
  return res.data
})




const SliceAddress = createSlice({
  name: "Address", 
  initialState: {},
  reducers: {},
  
  extraReducers: {
    [GET_Address.pending]  : (state)          => {state.load = true },
    [GET_Address.fulfilled]: (state, action)  => {
      state.Address = action.payload
      state.load = false
    }, 
    [GET_Address.rejected]: (state, action)  => {
      state.Address = action.payload
      state.load = false
    }, 

    [POST_Address.pending]  : (state)          => {state.load = true },
    [POST_Address.fulfilled]: (state, action)  => {
      state.Address = action.payload
      state.load = false
    }, 
    [POST_Address.rejected]: (state, action)  => {
      state.Address = action.payload
      state.load = false
    }, 

    [PUT_Address.pending]  : (state)          => {state.load = true },
    [PUT_Address.fulfilled]: (state, action)  => {
      state.PutAddress = action.payload
      state.load = false
    }, 
    [PUT_Address.rejected]: (state, action)  => {
      state.PutAddress = action.payload
      state.load = false
    }, 



  }
})

export default SliceAddress.reducer