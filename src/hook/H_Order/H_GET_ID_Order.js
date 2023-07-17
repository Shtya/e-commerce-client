import React , {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_ID_Order } from '../../redux/S_Order';
const H_GET_ID_Order = (id) => {
  const dispatch = useDispatch()
  useEffect(_=> dispatch(GET_ID_Order(id)) ,[])
  const Order = useSelector(state => state.SliceOrder.Order)
  const load = useSelector(state => state.SliceOrder.load)
  let items_Order = []
  Order && Order.data ? items_Order = Order.data : items_Order = []

  return [items_Order , load]
}

export default H_GET_ID_Order