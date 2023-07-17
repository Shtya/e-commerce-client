import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Login, SignUP } from '../../redux/S_register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte

const H_login = () => {
  const notyf = new Notyf({position:{y:'top',x:"left"}});

  const [email , setemail] = useState("")
  const [pass , setpass] = useState("")
  const [isload ,setisload] = useState(true)
  const dispatch = useDispatch()
  const User = useSelector(state => state.SliceRegister.user)

  const handleSub = async () => {
    if(email == "") return notyf.error("ادخل البريد الالكتروني")
    if(pass == "") return notyf.error("ادخل كلمه السر")
    setisload(true)
    await dispatch(Login({ email ,password:pass }))
    setisload(false)
  }

  useEffect(_ => {
    if (isload === false) {
      if (User.message) {
        notyf.error(User.message)
      }
      else {
        if (User.token) {
          localStorage.setItem("token", User.token)
          localStorage.setItem("user" , JSON.stringify(User.data))
        } else {
          localStorage.removeItem("token")
        }
        notyf.success("تم  الدخول بنجاح")
        window.location.href =("/home")
      }
    }
  },[isload])


  return [ email , setemail  ,pass , setpass , handleSub]
}

export default H_login