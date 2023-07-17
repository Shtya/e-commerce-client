import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GET_Order } from '../../redux/S_Order';


const H_GetOrder = () => {
  const dispatch = useDispatch()
  const Order = useSelector(state => state.SliceOrder)

  let items_Order = []
  let load_Order = Order.load

  useEffect(_ => dispatch(GET_Order()), [])
  if (Order.Order) {
    items_Order = Order.Order.data
  } else {
    items_Order = []
  }
  return [items_Order , load_Order ]
}

export default H_GetOrder