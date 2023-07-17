import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PUT_password } from '../../redux/H_Profile';


const H_EditePass = () => {
  const navigat = useNavigate()
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("user")))

  const [password  , setpassword] = useState("")
  const [passwordConfirm  , setpasswordConfirm] = useState("")
  const [passwordCurrent  , setpasswordCurrent] = useState("")
  const [isload, setisload] = useState(true)

  const dispatch = useDispatch()
  const Profile = useSelector(state => state.SliceProfile.Profile)


  const handlePassChange = async () => {
    if(password === "") return toast.error("يجب ادخال الاسم")
    if(passwordCurrent === "") return toast.error("يجب ادخال الايميل")
    if (passwordConfirm === "") return toast.error("يجب ادخال رقم الهاتف")
    setisload(true)
    await dispatch(PUT_password({id:user&& user._id ,password ,currentPassword: passwordCurrent  ,passwordConfirm : passwordConfirm}))
    setisload(false)

  }
  useEffect(_ => {
    if (isload === false) {
      console.log(Profile)

      if ( Profile.message) {
        toast.error(Profile.message)
        
      } else {
        toast.success("تم  تعديل  كلمه السر  بنجاح")
        localStorage.setItem("user" , JSON.stringify(Profile.data ))
        setTimeout(() => {
          window.location.reload(false)
        }, 1000);
      }
    }
  } , [isload])

  
  return [password, setpassword, passwordConfirm, setpasswordConfirm, passwordCurrent, setpasswordCurrent , handlePassChange] 
}

export default H_EditePass