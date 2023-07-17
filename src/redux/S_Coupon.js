import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import baseURL from '../API/baseURL';

const config = {headers:{Authorization :`Bearer ${localStorage.getItem("token")}`}}
const limit = 5


export const GET_Coupon = createAsyncThunk("GET_Coupon", async () => {
  const res = await baseURL.get("/api/v1/coupons" ,config)
  return res.data
})



export const ApplyCoupon = createAsyncThunk("ApplyCoupon", async (send) => {
  return baseURL.put("/api/v1/cart/applyCoupon", send, config)
    .then(res => res.data).catch(err => err.response.data)
})


export const POST_Coupon = createAsyncThunk("POST_Coupon", async (send) => {
  return baseURL.post("/api/v1/coupons", send, config)
    .then(res => res.data).catch(err => err.response.data)
})


export const PUT_Coupon = createAsyncThunk("PUT_Coupon", async ({id,...data}) => {
  
  return baseURL.put(`/api/v1/coupons/${id}`, data, config)
    .then(res => res.data).catch(err => err.response.data)
})



export const DELETE_Coupon = createAsyncThunk("DELETE_Coupon", async (id) => {
  const res = await baseURL.delete(`/api/v1/coupons/${id}` ,config)
  return res.data
})




const SliceCoupon = createSlice({
  name: "Coupon", 
  initialState: {},
  reducers: {},
  
  extraReducers: {
    [GET_Coupon.pending]  : (state)          => {state.load = true },
    [GET_Coupon.fulfilled]: (state, action)  => {
      state.Coupon = action.payload
      state.load = false
    }, 
    [GET_Coupon.rejected]: (state, action)  => {
      state.Coupon = action.payload
      state.load = false
    }, 

    [POST_Coupon.pending]  : (state)          => {state.load = true },
    [POST_Coupon.fulfilled]: (state, action)  => {
      state.Coupon = action.payload
      state.load = false
    }, 
    [POST_Coupon.rejected]: (state, action)  => {
      state.Coupon = action.payload
      state.load = false
    }, 


    [PUT_Coupon.pending]  : (state)          => {state.load = true },
    [PUT_Coupon.fulfilled]: (state, action)  => {
      state.PUTCoupon = action.payload
      state.load = false
    }, 
    [PUT_Coupon.rejected]: (state, action)  => {
      state.PUTCoupon = action.payload
      state.load = false
    }, 
    
    [ApplyCoupon.pending]  : (state)          => {state.load = true },
    [ApplyCoupon.fulfilled]: (state, action)  => {
      state.applyCoupon = action.payload
      state.load = false
    }, 
    [ApplyCoupon.rejected]: (state, action)  => {
      state.applyCoupon = action.payload
      state.load = false
    }, 
    

  }
})

export default SliceCoupon.reducer