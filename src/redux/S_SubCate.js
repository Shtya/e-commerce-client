import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../API/baseURL";

const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }

export const POST_SubCate = createAsyncThunk("POST_SubCate", async (send) => {
  return baseURL.post(`/api/v1/subcategories` , send ,config ).then(res=> res.data).catch(err=> err.response.data)
})

export const GET_Cate_By_Sub = createAsyncThunk("GET_SubCate", async (id) => {
  const res = await baseURL.get(`/api/v1/categories/${id}/subcategories` ,config )
  return res.data
})


const SliceSubCategory = createSlice({
  name: "subCategory",
  initialState: {},
  extraReducers: {

    [POST_SubCate.pending]: (state) =>{ state.load = true},
    [POST_SubCate.fulfilled]: (state, action) => {
      state.SubCate = action.payload
      state.load = false
    },
    [POST_SubCate.rejected]: (state, action) => {
      state.SubCate = action.payload
      state.load = false
    },

    [GET_Cate_By_Sub.pending]: (state) =>{ state.load = true},
    [GET_Cate_By_Sub.fulfilled]: (state, action) => {
      state.SubCate = action.payload
      state.load = false
    },

  }
})

export default SliceSubCategory.reducer