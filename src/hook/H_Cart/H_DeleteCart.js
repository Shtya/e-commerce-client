import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DELETE_Cart, POST_Cart } from '../../redux/S_Cart';
import { useEffect } from 'react';

const H_DeleteCart = (Get_ID_Prod) => {

const dispatch = useDispatch()
  const DeleteCart = async () => {
    await dispatch(DELETE_Cart())
    toast.success("تم الازاله بنجاح")
    setTimeout(() => {
      window.location.reload(false)
    }, 1000);
  }


  return [DeleteCart]
}

export default H_DeleteCart