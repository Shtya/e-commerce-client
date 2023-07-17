import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import avatar from '../../images/avatar.png'
import { POST_Brand } from '../../redux/S_Brand';


const H_AddBrand = () => {
  const [name , setname] = useState("")
  const [Img , setImg] = useState("")
  const [ImgPreview , setImgPreview] = useState(avatar)

  const [isload ,setisload] = useState(true)
  const dispatch = useDispatch()
  const Brand = useSelector(state => state.SliceBrand.Brand)

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
    await dispatch(POST_Brand({name , image:Img }))
    setisload(false)
  }

  useEffect(_ => {
    if (isload === false) {
      if (Brand) {
        if (Brand.error) {
          if(Brand.error.code === 11000)return toast.error("هذا البراند موجود بالفعل")
        }
        else {
          toast.success("تم اضاف البراند بنجاح")
          setname("")
          setImg("")
          setImgPreview(avatar)
        }
      }
      
    }
  },[isload])


  return [name, setname, ImgPreview, handleSub, handleImg]
}

export default H_AddBrand