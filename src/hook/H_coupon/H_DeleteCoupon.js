import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { DELETE_Coupon } from "../../redux/S_Coupon";
import {  useState } from "react";



const H_DeleteCoupon = (e) => {

  const [showDelete, setshowDelete] = useState(false)
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(DELETE_Coupon(e && e._id))
    toast.success("تم حذف الكوبون بنجاح")
    window.location.reload(false)
  }


  return [showDelete , setshowDelete , handleDelete]
}

export default H_DeleteCoupon