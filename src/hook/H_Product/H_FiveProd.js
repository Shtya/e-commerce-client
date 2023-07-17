import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_product_Limit } from '../../redux/S_Product';


const H_FiveProd = () => {
  const dispatch = useDispatch()
  const Product = useSelector(state => state.SliceProduct)
  let All_items_Prod = []
  let All_load_Prod = Product.load
  useEffect(_ => dispatch(GET_product_Limit()), [])
  if (Product.product) {
      All_items_Prod = Product.product.data.slice(0,4)
  } else {
    All_items_Prod = []
  }

  return [All_items_Prod , All_load_Prod]
}

export default H_FiveProd