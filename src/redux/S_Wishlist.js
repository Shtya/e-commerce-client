import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import baseURL from '../API/baseURL';

const config = {headers:{Authorization :`Bearer ${localStorage.getItem("token")}`}}
const limit = 5


export const GET_Wishlist = createAsyncThunk("GET_Wishlist", async () => {
  const res = await baseURL.get("/api/v1/wishlist" ,config)
  return res.data
})



export const POST_Wishlist = createAsyncThunk("POST_Wishlist", async (send) => {
  return baseURL.post("/api/v1/wishlist", send, config)
    .then(res => res.data).catch(err => err.response.data)
})

export const DELETE_Wishlist = createAsyncThunk("DELETE_Wishlist", async ({id, ...send}) => {
  return baseURL.delete(`/api/v1/wishlist/${id}`, config)
    .then(res => res.data).catch(err => err.response.data)
})




const SliceWishlist = createSlice({
  name: "Wishlist", 
  initialState: {},
  reducers: {},
  
  extraReducers: {
    [GET_Wishlist.pending]  : (state)          => {state.load = true },
    [GET_Wishlist.fulfilled]: (state, action)  => {
      state.Wishlist = action.payload
      state.load = false
    }, 
    

    [POST_Wishlist.pending]  : (state)          => {state.load = true },
    [POST_Wishlist.fulfilled]: (state, action)  => {
      state.Wishlist = action.payload
      state.load = false} , 
    

  }
})

export default SliceWishlist.reducer