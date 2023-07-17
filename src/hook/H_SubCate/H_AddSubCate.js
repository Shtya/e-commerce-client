import React , {useEffect, useLayoutEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SignUP } from '../../redux/S_register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import avatar from '../../images/avatar.png'
import { GET_Cate, POST_Cate } from '../../redux/S_Category';
import { POST_SubCate } from '../../redux/S_SubCate';


const H_AddSubCate = () => {
  const [name, setname] = useState("")
  const [CateID, setCateID] = useState("val")
  const [isload, setisload] = useState(true)

  const dispatch = useDispatch()
  const SubCate = useSelector(state => state.SliceSubCategory.SubCate)
  const Category = useSelector(state => state.SliceCategory)
  const handleCateID = (e) => {
    setCateID(e.target.value)
  }

  

  let CateAll = []
  let Cateload = Category.load
  useEffect(_ => dispatch(GET_Cate()), [])
  if (Category.Category) {
    CateAll = Category.Category.data
  } else {
    CateAll = []
  }

  const handleSub = async () => {
    if (name === "") return toast.error("ادخل اسم النصنيف الفرعي")
    if(CateID === "val") return toast.error("اختر اسم التصنيف ")
    
    setisload(true)
    await dispatch(POST_SubCate({name , category:CateID }))
    setisload(false)
  }

  useEffect(_ => {
    if (isload === false) {
      if (SubCate) {
        if (SubCate.error) {
          if(SubCate.error.code === 11000)return toast.error("هذا التصنيف موجود بالفعل")
        }
        if (SubCate.Validation_err)return  toast.error(SubCate.Validation_err[0].msg)
        else {
          toast.success("تم اضاف التصنيف بنجاح")
          setname("")
          setCateID("val")
        }
      }
      
    }
  },[isload])


  return [name, setname, handleCateID, handleSub , CateAll , Cateload]
}

export default H_AddSubCate