import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../API/baseURL";


const config = {headers:{Authorization :`Bearer ${localStorage.getItem("token")}`}}

export const GET_Brand = createAsyncThunk("GET_Brand", async () => {
  const res = await baseURL.get("/api/v1/brands?limit=10&page=1" ,config)
  return res.data
})

export const GET_page_Brand = createAsyncThunk("GET_Brand_page", async (page) => {
  const res = await baseURL.get(`/api/v1/brands?limit=10&page=${page}`,config)
  return res.data
})

export const POST_Brand = createAsyncThunk("POST_Brand", async (send) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization :`Bearer ${localStorage.getItem("token")}`
    }
  }
  return baseURL.post(`/api/v1/brands` , send , config).then(res=> res.data).catch(err=> err.response.data)
})


const SliceBrand = createSlice({
  name: "Brand",
  initialState: {},
  extraReducers: {
    [GET_Brand.pending]: (state) =>{ state.load = true},
    [GET_Brand.fulfilled]: (state, action) => {
      state.Brand = action.payload
      state.load = false
    },

    [GET_page_Brand.pending]: (state) =>{ state.load = true},
    [GET_page_Brand.fulfilled]: (state, action) => {
      state.Brand = action.payload
      state.load = false
    },

    [POST_Brand.pending]: (state) =>{ state.load = true},
    [POST_Brand.fulfilled]: (state, action) => {
      state.Brand = action.payload
      state.load = false
    },
    [POST_Brand.rejected]: (state, action) => {
      state.Brand = action.payload
      state.load = false
    },

  }
})

export default SliceBrand.reducer