import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../API/baseURL";


const limit = 5
const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }

export const Delete_Review = createAsyncThunk("Delete_review", async (id) => {
    const res = await baseURL.delete(`/api/v1/reviews/${id}` ,config)
    return res.data
})

export const GET_Review = createAsyncThunk("GET_review", async (id) => {
    return baseURL.get(`/api/v1/reviews?product=${id}` ,config).then(res=> res.data)
})
  
export const GET_Page_Review = createAsyncThunk("GET_Page_review", async (id ,page) => {
    const res = await baseURL.get(`/api/v1/products/${id}/reviews?limit=${limit}&page=${page}` ,config)
    return res.data
  })
  
  export const POST_Review = createAsyncThunk("POST_review", async (send ) => {
    return baseURL.post(`/api/v1/reviews`, send, config)
      .then(res => res.data).catch(err => err.response.data)
  })

  export const Edite_Review = createAsyncThunk("Edite_Review", async (RevID ,send ) => {
    return baseURL.put(`/api/v1/reviews/${RevID}`, send, config)
      .then(res => res.data).catch(err => err.response.data)
})


const SliceReview = createSlice({
  name: "Brand",
  initialState: {},
  extraReducers: {


    [GET_Review.pending]: (state) =>{ state.load = true},
    [GET_Review.fulfilled]: (state, action) => {
      state.GetReview = action.payload
      state.load = false
    
    },



    [POST_Review.pending]: (state) =>{ state.load = true},
    [POST_Review.fulfilled]: (state, action) => {
      state.PostReview = action.payload
      state.load = false
    },
    [POST_Review.rejected]: (state, action) => {
      state.Review = action.payload
      state.load = false
    },
    [Delete_Review.pending]: (state) =>{ state.load = true},
    [Delete_Review.fulfilled]: (state, action) => {
      state.ReviewDelete = action.payload
      state.load = false
    },
    [Delete_Review.rejected]: (state, action) => {
      state.ReviewDelete = action.payload
      state.load = false
    },

  }
})

export default SliceReview.reducer