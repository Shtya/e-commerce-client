import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {POST_Address} from '../../redux/S_Address'


const H_Add_Address = () => {
  const navigat = useNavigate()
  const [alias  , setalias] = useState("")
  const [details  , setdetails] = useState("")
  const [phone  , setphone] = useState("")
  const [city  , setcity] = useState("")
  const [postalCode, setpostalCode] = useState("")
  const [isload , setisload] = useState(true)
  const dispatch = useDispatch()
  const Address = useSelector(state => state.SliceAddress.Address)


  const handleSub = async () => {
    if(alias === "") return toast.error("يجب ادخال العنوان")
    if(city === "") return toast.error("يجب ادخال المدينه")
    if(postalCode === "") return toast.error("يجب ادخال الرقم البريدي")
    if(details === "") return toast.error("يجب ادخال عنوان المنزل بالتفصيل")
    if (phone === "") return toast.error("يجب ادخال رقم الهاتف")
    setisload(true)
    await dispatch(POST_Address({alias , city , postalCode , details , phone}))
    setisload(false)

  }
  useEffect(_ => {
    if (isload === false) {
      if (Address && Address.err) {
        if(Address.err[0].msg === "phone not valie") return toast.error("هذا الرقم غير صحيح")
        else toast.error(Address.err[0].msg)
      } else {
        toast.success("تم حفظ العنوان بنجاح")
        setTimeout(() => {
          navigat("/user/addresses")
        }, 1000);
      }
    }
  } , [isload])

  
  return [alias, setalias, details
    , setdetails, phone, setphone, city, setcity, postalCode, setpostalCode , handleSub]
}

export default H_Add_Address