import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GET_Address } from '../../redux/S_Address';


const H_GetAddress = () => {
  const dispatch = useDispatch()
  const Address = useSelector(state => state.SliceAddress)
  useEffect(_ => dispatch(GET_Address()), [])

  let items_Addres = []
  let load_Address = Address.load
  Address && Address.Address ? items_Addres = Address.Address.data : items_Addres = []

  
  return [items_Addres  , load_Address]
}

export default H_GetAddress