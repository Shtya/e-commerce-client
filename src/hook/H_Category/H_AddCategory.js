import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SignUP } from '../../redux/S_register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import avatar from '../../images/avatar.png'
import { POST_Cate } from '../../redux/S_Category';


const H_AddCategory = () => {
  const [name , setname] = useState("")
  const [Img , setImg] = useState("")
  const [ImgPreview , setImgPreview] = useState(avatar)

  const [isload ,setisload] = useState(true)
  const dispatch = useDispatch()
  const Category = useSelector(state => state.SliceCategory.Category)

  const handleImg = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImgPreview(URL.createObjectURL(e.target.files[0]))
      setImg(e.target.files[0])
    }
  }

  const handleSub = async () => {
    if(Img === "") return toast.error("ادخل الصوره")
    if(name === "") return toast.error("ادخل الاسم")
    if (ImgPreview === avatar) return toast.error("من فضلك اختار صوره")
    
    setisload(true)
    await dispatch(POST_Cate({name , image:Img }))
    setisload(false)
  }

  useEffect(_ => {
    if (isload === false) {
      if (Category) {
        if (Category.error) {
          if(Category.error.code === 11000)return toast.error("هذا التصنيف موجود بالفعل")
        }
        if (Category.Validation_err)return  toast.error(Category.Validation_err[0].msg)
        else {
          toast.success("تم اضاف التصنيف بنجاح")
          setname("")
          setImg("")
          setImgPreview(avatar)
        }
      }
      
    }
  },[isload])


  return [name, setname, ImgPreview, handleSub, handleImg]
}

export default H_AddCategory