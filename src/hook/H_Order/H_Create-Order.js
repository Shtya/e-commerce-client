import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { POST_Order } from "../../redux/S_Order";
import { ToastContainer, toast } from 'react-toastify';
import H_GetCart from "../H_Cart/H_GetCart";


const H_Create_Order = () => {
  const [, , , , , itemsCart_All] = H_GetCart()

  const navigat = useNavigate()
  const dispatch = useDispatch()
  const Order = useSelector(state => state.SliceOrder.Order)

  const [isload , setisload] = useState(true)
  const handlePayment = async () => {
    setisload(true)
    await dispatch(POST_Order({id:itemsCart_All._id , name:""}))
    setisload(false)
  }


  useEffect(_ => {
    if (isload === false) {
      // if (Order.status === "success") {
        toast.success("سيتم العمل علي الطلب")
        setTimeout(() => {
          navigat("/user/allorders")
        }, 1000);

      // } else {
      //   toast.error("ادخل الطلب بشكل صحيح")
      // }
    }
  }, [isload])
  
  return [handlePayment]
}

export default H_Create_Order