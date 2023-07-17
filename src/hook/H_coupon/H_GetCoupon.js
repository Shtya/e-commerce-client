import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { GET_Coupon } from "../../redux/S_Coupon";
import React, { useEffect, useRef, useState } from "react";



const H_GetCoupon = () => {

  const dispatch = useDispatch()
  const Coupon = useSelector(state => state.SliceCoupon)
  let itemsCoupon = []
  let loadCoupon = Coupon.load
  
  useEffect(_ => dispatch(GET_Coupon()), [])
  if (Coupon.Coupon) {
    itemsCoupon = Coupon.Coupon.data
  } else { itemsCoupon = [] }
  
  
  return [loadCoupon , itemsCoupon]
}

export default H_GetCoupon