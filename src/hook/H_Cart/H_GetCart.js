import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GET_Cart, POST_Cart } from '../../redux/S_Cart';
import { useEffect } from 'react';

const H_GetCart = () => {

  const dispatch = useDispatch()
  const Cart = useSelector(state=> state.SliceCart.Cart)
  const Cartload = useSelector(state=> state.SliceCart.load)
  
  useEffect(_ => dispatch(GET_Cart()), [])
  let countCart;
  let totalPrice;
  let totalCartDiscount;

  let itemsCart = []
  let itemsCart_All = []
  if (Cart) {
    if (Cart.data) {
      itemsCart_All = Cart.data
      itemsCart = Cart.data.cartItems
      totalPrice =Cart.data.totalCartPirce
      if(Cart && Cart.data && Cart.data.totalCartDiscount  ) totalCartDiscount = Cart.data.totalCartDiscount
    }
    countCart = Cart.countProduct
  } else { itemsCart = [] }



  return [ itemsCart , countCart , totalPrice , Cartload , totalCartDiscount , itemsCart_All]
}

export default H_GetCart