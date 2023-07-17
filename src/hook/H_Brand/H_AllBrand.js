import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GET_Brand, GET_page_Brand } from '../../redux/S_Brand';


const H_AllBrand = () => {
  const dispatch = useDispatch()
  const Brand = useSelector(state => state.SliceBrand)

  let items_Brand = []
  let load_Brand = Brand.load
  let countPage = 0
  const numberOfPages = (num) => dispatch(GET_page_Brand(num))
  
  useEffect(_ => dispatch(GET_Brand()), [])
  if (Brand.Brand) {
    items_Brand = Brand.Brand.data.slice(0, 5)
    countPage = Brand.Brand.paginationResult.numberOfPages

  } else {
    items_Brand = []
  }
  
  return [items_Brand , load_Brand , numberOfPages , countPage]
}

export default H_AllBrand