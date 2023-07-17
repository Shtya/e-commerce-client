import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GET_Review } from '../../redux/S_Review';


const H_GetReview = (id) => {

  const dispatch = useDispatch()
  const Review = useSelector(state => state.SliceReview.GetReview)
  const load = useSelector(state => state.SliceReview.load)
  let items_Review = []
  
  useEffect(_ => dispatch(GET_Review(id)), [])
  Review && Review.data ? items_Review =  Review.data  : items_Review = []
  
  return [items_Review  ,load]
}

export default H_GetReview