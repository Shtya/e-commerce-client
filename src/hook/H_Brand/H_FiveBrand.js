import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GET_Brand } from '../../redux/S_Brand';


const H_FiveBrand = () => {
  const dispatch = useDispatch()
  const Brand = useSelector(state => state.SliceBrand)

  let Five_I_Brand = []
  let Five_L_Brand = Brand.load

  useEffect(_ => dispatch(GET_Brand()), [])
  if (Brand.Brand) {
    Five_I_Brand = Brand.Brand.data.slice(0, 5)
  } else {
    Five_I_Brand = []
  }
  
  return [Five_I_Brand , Five_L_Brand]
}

export default H_FiveBrand