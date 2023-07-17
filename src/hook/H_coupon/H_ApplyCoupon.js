import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { ApplyCoupon, POST_Coupon } from "../../redux/S_Coupon";
import React, { useEffect, useRef, useState } from "react";



const H_ApplyCoupon = () => {
  const [nameCoupon , setnameCoupon] = useState("")
  const [isload , setisload] = useState(true)
  const Coupon = useSelector(state => state.SliceCoupon.applyCoupon)
  const dispatch = useDispatch()
  const handleSub = async() => {
    setisload(true)
    await dispatch(ApplyCoupon({ coupon:nameCoupon }))
    setisload(false)
  }

  useEffect(_ => {
    if (isload === false) {
      if (Coupon.error ) {
        if (Coupon.error.statusCode === 500) return toast.error("هذا الكوبون غير صالح")
      }
      else {
        toast.success("تم اضافه الخصم بنجاح")
        window.location.reload(false)
      }
    }
  }, [isload])
  
  return [ handleSub , nameCoupon , setnameCoupon]
}

export default H_ApplyCoupon