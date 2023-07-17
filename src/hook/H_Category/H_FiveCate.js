import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import avatar from '../../images/avatar.png'
import { GET_Cate } from '../../redux/S_Category';


const H_FiveCate = () => {
  const dispatch = useDispatch()
  const Category = useSelector(state => state.SliceCategory)
  let Fiveitems = []
  let FiveLoad = Category.load
  useEffect(_ => dispatch(GET_Cate()), [])
  if (Category.Category) {
    Fiveitems = Category.Category.data.slice(0, 5)
  } else {
    Fiveitems = []
  }
  
  return [Fiveitems , FiveLoad]
}

export default H_FiveCate