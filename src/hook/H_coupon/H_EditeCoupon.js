import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { PUT_Coupon} from "../../redux/S_Coupon";
import React, { useEffect, useRef, useState } from "react";



const H_EditeCoupon = (e) => {
  const CurrentType = useRef()
  const [name ,setname] = useState()
  const [expire ,setexpire] = useState()
  const [discount ,setdiscount] = useState()
  const [isload ,setisload] = useState(true)
  const [showUpdate, setshowUpdate] = useState(false)
  const dispatch = useDispatch()
  const Coupon = useSelector(state => state.SliceCoupon.PUTCoupon)

  const handleUpdate = async () => {
    setisload(true)
    console.log("here", { name, expire, discount });
    console.log(e._id)
    await dispatch(PUT_Coupon({ id:e._id,name , expire , discount} ))
    setisload(false)
  }

  useEffect(_ => {
    if (isload === false) {
      console.log(Coupon)
    }
  }, [isload])

  return [CurrentType , name ,setname , expire ,setexpire , discount , setdiscount , showUpdate , setshowUpdate , handleUpdate]


}

export default H_EditeCoupon