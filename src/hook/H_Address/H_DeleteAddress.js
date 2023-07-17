import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { DELETE_Address } from '../../redux/S_Address';
import { useState } from 'react';



const H_DeleteAddress = (e) => {
  const [showDelete , setshowDelete] = useState(false)

  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(DELETE_Address(e && e._id))
    toast.success("تم حذف العنوان بنجاح")
    setTimeout(() => {
      
      window.location.reload(false)
    }, 1000);
  }


  return [handleDelete  ,setshowDelete , showDelete]
}

export default H_DeleteAddress