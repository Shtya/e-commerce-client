import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SignUP } from '../../redux/S_register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte

const H_signup = () => {
  const notyf = new Notyf({position:{y:'top',x:"left"}});
  const [name , setname] = useState("")
  const [email , setemail] = useState("")
  const [phone , setphone] = useState("")
  const [pass , setpass] = useState("")
  const [passconfirm, setpassconfirm] = useState("")
  const [isload ,setisload] = useState(true)
  const dispatch = useDispatch()
  const User = useSelector(state => state.SliceRegister.user)
  const handleSub = async () => {
    if(name === "") return notyf.error("ادخل الاسم")
    if(phone === "") return notyf.error("ادخل رقم الهاتف")
    if(email == "") return notyf.error("ادخل البريد الالكتروني")
    if(pass == "") return notyf.error("ادخل كلمه السر")
    if (passconfirm == "") return notyf.error("ادخل تأكيد كلمه السر")
    setisload(true)
    await dispatch(SignUP({name , email , phone ,password:pass , passwordConfirm:passconfirm }))
    setisload(false)
  }

  useEffect(_ => {
    if (isload === false) {
      // console.log(User);
      if (User?._err) {
        notyf.error(`${User._err[0].msg}`)
      } else {
        notyf.success("تم تسجيل الحساب بنجاح")
        window.location.href ="/"
      }
    }
  },[isload])


  return [setname , name , email , setemail , phone , setphone ,pass , setpass , passconfirm , setpassconfirm , handleSub]
}

export default H_signup