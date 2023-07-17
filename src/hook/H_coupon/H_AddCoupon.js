import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { POST_Coupon } from "../../redux/S_Coupon";
import React, { useEffect, useRef, useState } from "react";



const H_Addcounpon = () => {
  const [name , setname] = useState("")
  const [expire , setexpire] = useState("")
  const [discount, setdiscount] = useState("")
  const [isload, setisload] = useState(true)
  const dispatch = useDispatch()
  const Coupon = useSelector(state => state.SliceCoupon.Coupon)
  const CurrentType = useRef()

  const handleSub = async() => {
    setisload(true)
    await dispatch(POST_Coupon({ name, expire, discount }))
    setisload(false)
  }

  useEffect(_ => {
    if (isload === false) {
      if (Coupon.error){
        if (Coupon.error.code === 11000) return toast.error("هذا الكوبون موجود بالفعل")
      } else {
        toast.success("تم اضافه الكوبون بنجاح")
        setname("")
        setexpire("")
        setdiscount("")
        window.location.reload(false)
      }
    }
  }, [isload])
  
  return [name , setname , expire ,setexpire , discount , setdiscount , handleSub ,CurrentType]
}

export default H_Addcounpon