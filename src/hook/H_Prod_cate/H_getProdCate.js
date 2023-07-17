import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_product_Category } from '../../redux/S_Product';



const H_getProdCate = (id) => {

  const dispatch = useDispatch()
  useEffect(_ => dispatch(GET_product_Category(id)), [])
  const Product = useSelector(state => state.SliceProduct)
  let prod_cate = []
  let prod_cate_load = Product.load
  if (Product.product) { prod_cate = Product.product.data }
  else {prod_cate = []}


  return [prod_cate , prod_cate_load ]
}

export default H_getProdCate
