import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import baseURL from '../API/baseURL';

const config = {headers:{Authorization :`Bearer ${localStorage.getItem("token")}`}}
const limit = 10


export const POST_Cate = createAsyncThunk("POST_Cate", async (send) => {
  const config = {headers : {
    "Content-Type":"multipart/form-data",
    Authorization :`Bearer ${localStorage.getItem("token")}`
  }}
  return baseURL.post("/api/v1/categories", send, config).then(res => res.data).catch(err=> err.response.data)
})


export const GET_Cate = createAsyncThunk("GET_cat", async () => {
  const res = await baseURL.get(`/api/v1/categories?limit=${limit}&page=1` ,config)
  return res.data
})


export const GET_Page_Cate = createAsyncThunk("GET_Cate_page", async (num) => {
  const res = await baseURL.get(`/api/v1/categories?limit=${limit}&page=${num}`, config)
  return res.data
})



export const GET_ID_Cate = createAsyncThunk("GET_cat_ID", async (id) => {
  const res = await baseURL.get(`/api/v1/categories/${id}` ,config)
  return res.data
})




const SliceCategory = createSlice({
  name: "Category", 
  initialState: {},
  reducers: {},
  
  extraReducers: {
    [GET_Cate.pending]  : (state)          => {state.load = true },
    [GET_Cate.fulfilled]: (state, action)  => {
      state.Category = action.payload
      state.load = false
    }, 
    

    [GET_Page_Cate.pending]  : (state)          => {state.load = true },
    [GET_Page_Cate.fulfilled]: (state, action)  => {
      state.Category = action.payload
      state.load = false} , 
    
    
    [POST_Cate.pending]  : (state)          => {state.load = true },
    [POST_Cate.fulfilled]: (state, action)  => {
      state.Category = action.payload
      state.load = false
    },
    [POST_Cate.rejected]: (state, action)  => {
      state.Category = action.payload
      state.load = true
    },

    
    [GET_ID_Cate.pending]  : (state)          => {state.load = true },
    [GET_ID_Cate.fulfilled]: (state, action)  => {
      state.Category = action.payload
      state.load = false
    },

    
  }
})

export default SliceCategory.reducer