import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_Page_product, GET_product, GET_product_sort, GET_Search } from '../../redux/S_Product';



const H_AllProduct = (keyword) => {

  const dispatch = useDispatch()
  const Product = useSelector(state => state.SliceProduct)
  let All_items_Prod = []
  let All_load_Prod = Product.load
  let countPage;
  const numberOfPages = (num) => dispatch(GET_Page_product(num))
  
  useEffect(_ => dispatch(GET_product()), [])
  if (Product.product) {
    All_items_Prod = Product.product.data
    if (Product.product.paginationResult) {
      countPage = Product.product.paginationResult.numberOfPages
      
    }
  } else {
    All_items_Prod = []
  }


  const handleSend = (e) => {
    if(e.currentTarget.innerHTML === "الاكثر مبيعا") dispatch(GET_product_sort("-sold"))
    if (e.currentTarget.innerHTML === "الاعلي تقييما") dispatch(GET_product_sort("-ratingsAverage"))
    if (e.currentTarget.innerHTML === "السعر من الاقل للاعلي") dispatch(GET_product_sort("price"))
    if (e.currentTarget.innerHTML === "السعر من الاعلي للاقل") dispatch(GET_product_sort("-price"))
    
  }
  

  useEffect(_ => {
    if (keyword !== undefined) {
      setTimeout(() => {
        dispatch(GET_Search(keyword))
      }, 1000);
      }
    
  } , [keyword])


  return [All_items_Prod , All_load_Prod , numberOfPages , countPage , handleSend ]
}

export default H_AllProduct
