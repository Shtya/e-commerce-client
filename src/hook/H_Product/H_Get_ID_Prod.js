import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_ID_product } from '../../redux/S_Product';



const H_Get_ID_Prod = (id) => {

  const dispatch = useDispatch()
  const Product = useSelector(state => state.SliceProduct)
  let Get_ID_Prod = []
  let Load_ID_Prod = Product.load


  useEffect(_ => dispatch(GET_ID_product(id)), [])
  Product.productID ? Get_ID_Prod = Product.productID.data : Get_ID_Prod = []
  
  return [Get_ID_Prod , Load_ID_Prod ]
}

export default H_Get_ID_Prod
