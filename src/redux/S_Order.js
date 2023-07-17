import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import baseURL from '../API/baseURL';

const config = {headers:{Authorization :`Bearer ${localStorage.getItem("token")}`}}


export const POST_Order = createAsyncThunk("POST_Order", async ({id , ...send}) => {
  return baseURL.post(`/api/v1/orders/${id}`,send , config)
    .then(res => res.data).catch(err => err.response.data)
})

export const GET_Order = createAsyncThunk("GET_Order", async () => {
  return baseURL.get(`/api/v1/orders`, config)
    .then(res => res.data).catch(err => err.response.data)
})
export const GET_ID_Order = createAsyncThunk("GET_ID_Order", async (id) => {
  return baseURL.get(`/api/v1/orders/${id}`, config)
    .then(res => res.data).catch(err => err.response.data)
})

export const PUT_Paid = createAsyncThunk("PUT_Paid", async ({id , ...send}) => {
  return baseURL.put(`/api/v1/orders/pay/${id}` , send, config)
    .then(res => res.data).catch(err => err.response.data)
})

export const PUT_deliver = createAsyncThunk("PUT_deliver", async ({id , ...send}) => {
  return baseURL.put(`/api/v1/orders/deliver/${id}`,send, config)
    .then(res => res.data).catch(err => err.response.data)
})





const SliceOrder = createSlice({
  name: "Order", 
  initialState: {},
  reducers: {},
  
  extraReducers: {

    [POST_Order.pending]  : (state)          => {state.load = true },
    [POST_Order.fulfilled]: (state, action)  => {
      state.Order = action.payload
      state.load = false
    }, 
    [POST_Order.rejected]: (state, action)  => {
      state.Order = action.payload
      state.load = false
    }, 

    
    [GET_Order.pending]  : (state)          => {state.load = true },
    [GET_Order.fulfilled]: (state, action)  => {
      state.Order = action.payload
      state.load = false
    }, 
    [GET_Order.rejected]: (state, action)  => {
      state.Order = action.payload
      state.load = false
    }, 
    
    [GET_ID_Order.pending]  : (state)          => {state.load = true },
    [GET_ID_Order.fulfilled]: (state, action)  => {
      state.Order = action.payload
      state.load = false
    }, 
    [GET_ID_Order.rejected]: (state, action)  => {
      state.Order = action.payload
      state.load = false
    }, 
    // [PUT_deliver.pending]  : (state)          => {state.load = true },
    // [PUT_deliver.fulfilled]: (state, action)  => {
    //   state.Order = action.payload
    //   state.load = false
    // }, 
    // [PUT_deliver.rejected]: (state, action)  => {
    //   state.Order = action.payload
    //   state.load = false
    // }, 
    [PUT_Paid.pending]  : (state)          => {state.load = true },
    [PUT_Paid.fulfilled]: (state, action)  => {
      state.isPaid = action.payload
      state.load = false
    }, 
    [PUT_Paid.rejected]: (state, action)  => {
      state.isPaid = action.payload
      state.load = false
    }, 

  }
})

export default SliceOrder.reducer