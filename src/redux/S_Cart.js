import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import baseURL from '../API/baseURL';

const config = {headers:{Authorization :`Bearer ${localStorage.getItem("token")}`}}
const limit = 5


export const GET_Cart = createAsyncThunk("GET_Cart", async () => {
  return baseURL.get("/api/v1/cart" ,config).then(res=> res.data) .catch(err=>err.response.data)
})

export const DELETE_Cart_ID = createAsyncThunk("DELETE_Cart_ID", async (id ) => {
  const res = await baseURL.delete(`/api/v1/cart/${id}` ,config)
  return res.data
})

export const PUT_Cart_ID = createAsyncThunk("PUT_Cart_ID", async ({id , ...send}) => {
  return baseURL.put(`/api/v1/cart/${id}`, send, config)
    .then(res => res.data).catch(err => err.response.data)
})



export const POST_Cart = createAsyncThunk("POST_Cart", async (send) => {
  return baseURL.post("/api/v1/cart", send, config)
    .then(res => res.data).catch(err => err.response.data)
})

export const DELETE_Cart = createAsyncThunk("DELETE_Cart", async (id) => {
  const res = await baseURL.delete(`/api/v1/cart` ,config)
  return res.data
})




const SliceCart = createSlice({
  name: "Cart", 
  initialState: {},
  reducers: {},
  
  extraReducers: {
    [GET_Cart.pending]  : (state)          => {state.load = true },
    [GET_Cart.fulfilled]: (state, action)  => {
      state.Cart = action.payload
      state.load = false
    }, 
    [GET_Cart.rejected]: (state, action)  => {
      state.Cart = action.payload
      state.load = false
    }, 
    

    [POST_Cart.pending]  : (state)          => {state.load = true },
    [POST_Cart.fulfilled]: (state, action)  => {
      state.Cart = action.payload
      state.load = false} , 
    
    [POST_Cart.rejected]: (state, action)  => {
      state.Cart = action.payload
      state.load = false} , 
    
    [PUT_Cart_ID.pending]  : (state)          => {state.load = true },
    [PUT_Cart_ID.fulfilled]: (state, action)  => {
      state.CartPut = action.payload
      state.load = false} , 
    
    [PUT_Cart_ID.rejected]: (state, action)  => {
      state.CartPut = action.payload
      state.load = false} , 
    

  }
})

export default SliceCart.reducer