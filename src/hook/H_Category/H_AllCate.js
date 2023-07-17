import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GET_Cate, GET_Page_Cate } from '../../redux/S_Category';


const H_AllCate = () => {

  const dispatch = useDispatch()
  const Category = useSelector(state => state.SliceCategory)
  let AllitemsCate = []
  let AllCateLoad = Category.load
  let countPage = 0
  const numberOfPages = (num) => dispatch(GET_Page_Cate(num))
  

  useEffect(_ => dispatch(GET_Cate()), [])
  if (Category.Category) {
    AllitemsCate = Category.Category.data
    countPage = Category.Category.paginationResult.numberOfPages
  } else {
    AllitemsCate = []
  }

  return [AllitemsCate , AllCateLoad , numberOfPages , countPage]
}

export default H_AllCate
