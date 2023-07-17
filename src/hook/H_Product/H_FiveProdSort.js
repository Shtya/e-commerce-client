import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_product, GET_product_sort } from '../../redux/S_Product';


const H_FiveProdSort = () => {
  const dispatch = useDispatch()
  const Product = useSelector(state => state.SliceProduct)
  let All_items_Prod = []
  let All_load_Prod = Product.load
  useEffect(_ => dispatch(GET_product_sort()), [])
  if (Product.product) {
    All_items_Prod = Product.product.data
  } else {
    All_items_Prod = []
  }
  
  return [All_items_Prod , All_load_Prod]
}

export default H_FiveProdSort