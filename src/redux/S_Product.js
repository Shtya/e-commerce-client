import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from '../API/baseURL';


const config = {headers:{Authorization :`Bearer ${localStorage.getItem("token")}`}}
const limit = 10



export const POST_product = createAsyncThunk("POST_product", async (send) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization :`Bearer ${localStorage.getItem("token")}`
    }
  }
  return baseURL.post(`/api/v1/products`, send, config).then(res=> res.data).catch(err=> err.response.data)
})


export const GET_Search = createAsyncThunk("GET_product_Category", async (word) => {
  const res = await baseURL.get(`/api/v1/products?keyword=${word}&limit=${limit}`,config)
  return res.data
})
export const GET_product_Category = createAsyncThunk("GET_product_Category", async (id) => {
  const res = await baseURL.get(`/api/v1/products?category=${id}`,config)
  return res.data
})
export const GET_product = createAsyncThunk("GET_product", async () => {
  const res = await baseURL.get(`/api/v1/products?limit=50`,config)
  return res.data
})
export const GET_product_Limit = createAsyncThunk("GET_product", async () => {
  const res = await baseURL.get(`/api/v1/products?limit=4`,config)
  return res.data
})

export const GET_product_sort = createAsyncThunk("GET_product", async(ele) => {
  const res = await baseURL.get(`/api/v1/products?limit=50&sort=${ele}` ,config)
  return res.data
})


export const DELETE_product = createAsyncThunk("DELETE_product", async (id) => {
  const res = await baseURL.delete(`/api/v1/products/${id}` ,config)
  return res.data
})

export const PUT_product = createAsyncThunk("PUT_product", async ({id, ...send}) => {
  const config = {
    headers: {"Content-Type": "multipart/form-data",
      Authorization :`Bearer ${localStorage.getItem("token")}`
    }
  }
  return baseURL.put(`/api/v1/products/${id}`, send, config).then(res => {
    return res.data
  }).catch(err => err.response.data)
})


export const GET_Page_product = createAsyncThunk("GET_product_page", async (page=1) => {
  const res = await baseURL.get(`/api/v1/products?limit=${limit}&page=${page}` ,config)
  return res.data
})

export const GET_ID_product = createAsyncThunk("GET_product_ID", async (id) => {
  const res = await baseURL.get(`/api/v1/products/${id}` , config)
  return res.data
})




const SliceProduct = createSlice({
  name: "product",
  initialState: {},
  reducers:{},
  extraReducers: {
    [GET_product.pending]: (state) => {state.load = true},
    [GET_product.fulfilled]: (state, action) => {
      state.load = false
      state.product = action.payload
    },



    [POST_product.pending]: (state) => {state.load = true},
    [POST_product.fulfilled]: (state, action) => {
      state.load = false
      state.product = action.payload
    },
    [POST_product.rejected]: (state, action) => {
      state.load = false
      state.product = action.payload
    },



    [PUT_product.pending]: (state) => {state.load = true},
    [PUT_product.fulfilled]: (state, action) => {
      state.load = false
      state.product = action.payload
    },
    [PUT_product.rejected]: (state, action) => {
      state.load = false
      state.product = action.payload
    },



    [GET_product_sort.pending]: (state) => {state.load = true},
    [GET_product_sort.fulfilled]: (state, action) => {
      state.load = false
      state.product = action.payload
    },

    [GET_ID_product.pending]: (state) => {state.load = true},
    [GET_ID_product.fulfilled]: (state, action) => {
      state.load = false
      state.productID = action.payload
    },

    [GET_Page_product.pending]: (state) => {state.load = true},
    [GET_Page_product.fulfilled]: (state, action) => {
      state.load = false
      state.product = action.payload
    },
    [GET_product_Limit.pending]: (state) => {state.load = true},
    [GET_product_Limit.fulfilled]: (state, action) => {
      state.load = false
      state.product = action.payload
    },
    [GET_product_Category.pending]: (state) => {state.load = true},
    [GET_product_Category.fulfilled]: (state, action) => {
      state.load = false
      state.product = action.payload
    },


  }
})


export default SliceProduct.reducer
