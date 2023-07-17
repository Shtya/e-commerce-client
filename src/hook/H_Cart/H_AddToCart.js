import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { POST_Cart } from '../../redux/S_Cart';
import { useEffect } from 'react';

const H_AddToCart = (Get_ID_Prod) => {
  const [color, setcolor] = useState("")
  const [indexcolor, setindexcolor] = useState("")
  const [isload, setisload] = useState(true)
  const dispatch = useDispatch()
  const Cart = useSelector(state=> state.SliceCart.Cart)
  
  const handlecolor = (e, index) => {
    setcolor(e)
    setindexcolor(index)
  }


  const handleAdToCart = async () => {
    if (Get_ID_Prod.colors.length >= 1) {
      if(color === "") return toast.error("من فضلك اختر لون")
    }
    setisload(true)
    await dispatch(POST_Cart({ productId: Get_ID_Prod._id, color }))
    setisload(false)
  }


  useEffect(_ => {
    if (isload === false) {
      if (Cart.message) {
        if(Cart.message === "You are not allowed to perform this action") return toast.error("من فضلك سجل الدخول اولا")
        toast.error(Cart.message)
      } else {
        toast.success("تم اضافه المنتج الي العربه")
      }
    }
  } ,[isload])

  return [handleAdToCart, handlecolor, indexcolor ]
}

export default H_AddToCart