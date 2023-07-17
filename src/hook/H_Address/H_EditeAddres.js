import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PUT_Address} from '../../redux/S_Address'


const H_EditeAddress = (e) => {
  const [showEdite, setshowEdite] = useState(false)

  const navigat = useNavigate()
  const [alias  , setalias] = useState("")
  const [details  , setdetails] = useState("")
  const [phone  , setphone] = useState("")
  const [city  , setcity] = useState("")
  const [postalCode, setpostalCode] = useState("")
  const [isload , setisload] = useState(true)
  const dispatch = useDispatch()
  
  
  const handleEdite = async () => {
    if(alias === "") return toast.error("يجب ادخال العنوان")
    if(city === "") return toast.error("يجب ادخال المدينه")
    if(postalCode === "") return toast.error("يجب ادخال الرقم البريدي")
    if(details === "") return toast.error("يجب ادخال عنوان المنزل بالتفصيل")
    if (phone === "") return toast.error("يجب ادخال رقم الهاتف")
    setisload(true)
    await dispatch(PUT_Address({id:e&& e._id ,alias , city , postalCode , details , phone}))
    setisload(false)
    
  }
  const Address = useSelector(state => state.SliceAddress.PutAddress)

  useEffect(_ => {
    if (isload === false) {
    console.log(Address)
  }
} ,[isload])

  
  return [alias, setalias, details
    , setdetails, phone, setphone, city, setcity, postalCode, setpostalCode , handleEdite , showEdite ,setshowEdite]
}

export default H_EditeAddress