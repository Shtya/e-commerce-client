import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PUT_user } from '../../redux/H_Profile';


const H_EditeProfile = () => {
  const navigat = useNavigate()
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("user")))
  const [showEdite , setshowEdite] = useState(false)

  const [name  , setname] = useState("")
  const [phone  , setphone] = useState("")
  const [email  , setemail] = useState("")
  const [isload, setisload] = useState(true)

  const dispatch = useDispatch()
  const Profile = useSelector(state => state.SliceProfile.Profile)


  const handleData = async () => {
    if(name === "") return toast.error("يجب ادخال الاسم")
    if(email === "") return toast.error("يجب ادخال الايميل")
    if (phone === "") return toast.error("يجب ادخال رقم الهاتف")
    setisload(true)
    await dispatch(PUT_user({id:user&& user._id ,name , email  , phone}))
    setisload(false)

  }
  useEffect(_ => {
    if (isload === false) {
      console.log(Profile)

      if ( Profile.err) {
        toast.error(Profile.err[0].msg)
        
      } else {
        toast.success("تم  تعديل تفاصيل الصفحه الشخصيه بنجاح")
        localStorage.setItem("user" , JSON.stringify(Profile.data ))
        setTimeout(() => {
          window.location.reload(false)
        }, 1000);
      }
    }
  } , [isload])

  
  return [name, setname, phone, setphone, email, setemail, handleData , setshowEdite ,showEdite] 
}

export default H_EditeProfile