import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { POST_Review } from '../../redux/S_Review';


const H_AddReview = (id) => {
  const [review , setreview] = useState("")
  const [rating, setrating] = useState("")
  const [user , setuser] = useState(JSON.parse(localStorage.getItem("user")))

  const [isload ,setisload] = useState(true)
  const dispatch = useDispatch()
  const Review = useSelector(state => state.SliceReview.PostReview)


  const handleSub = async () => {
    if(rating === "") return toast.error(" اختر تقييم ")
    if(review === "") return toast.error(" اختر التعليق  ")

    setisload(true)
    await dispatch(POST_Review({review , rating , product:id , user:user._id  }))
    setisload(false)
  }

  useEffect(_ => {
    if (isload === false) {
      if (Review.err) {
        toast.error(Review.err[0].msg)
        setTimeout(() => {
          window.location.reload(false)
          
        }, 500);
        }
        else {
          toast.success("تم اضاف التعليق ")
          window.location.reload(false)
        }
      }
  },[isload])


  return [review, setreview, rating , setrating , handleSub , isload]
}

export default H_AddReview