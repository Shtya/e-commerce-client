import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GET_Wishlist } from '../../redux/S_Wishlist';


const H_GetWishlist = () => {
  const dispatch = useDispatch()
  const Wishlist = useSelector(state => state.SliceWishlist.Wishlist)

  let items_Wishlist = []
  let items_WishlistID = []
  useEffect(_ => dispatch(GET_Wishlist()), [])
  Wishlist ? items_Wishlist = Wishlist.data : items_Wishlist = []
  Wishlist ? items_WishlistID = Wishlist.data.map(e=> e._id) : items_WishlistID = []

  return [items_Wishlist , items_WishlistID]
}

export default H_GetWishlist