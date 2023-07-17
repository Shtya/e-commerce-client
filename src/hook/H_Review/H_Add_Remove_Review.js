import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { POST_Wishlist } from '../../redux/S_Wishlist';
import { DELETE_Wishlist } from './../../redux/S_Wishlist';



const H_Add_Remove_Review = (e) => {
  const [showWish, setshowWish] = useState(true)
  const [isload, setisload] = useState(true)
  const dispatch = useDispatch()
  const WishList = useSelector(state => state.SliceWishlist.Wishlist)

  const handleWishListAdd = async() => {
    setisload(true)
    await dispatch(POST_Wishlist({ productId: e._id }))
    setisload(false)
    setshowWish(!showWish)
  }

  const handleWishListRemove = async() => {
    setisload(true)
    await dispatch(DELETE_Wishlist({id:e._id ,name:"none"}))
    setisload(false)
    setshowWish(!showWish)
  }

  return [showWish , handleWishListAdd , handleWishListRemove , isload]
}

export default H_Add_Remove_Review