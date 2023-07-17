import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GET_Brand } from '../../redux/S_Brand';
import { GET_Cate } from '../../redux/S_Category';
import { GET_Cate_By_Sub } from '../../redux/S_SubCate';
import { POST_product } from './../../redux/S_Product';


const H_AddProduct = () => {
  const [Img, setImg] = useState([]);
  const [ImgPreview, setImgPreview] = useState([]);
  const [Name, setName] = useState("");
  const [Des, setDes] = useState("");
  const [PriceAfterDiscount, setPriceAfterDiscount] = useState("");
  const [Price, setPrice] = useState("");
  const [CateID, setCateID] = useState("val");
  const [SubsID, setSubsID] = useState("val");
  const [BrandID, setBrandID] = useState("val");
  const [quantity, setquantity] = useState("");
  const [show, setShow] = useState(false);
  const [color, setColor] = useState([]);
  const [isload, setisload] = useState(true);


  const dispatch = useDispatch()
  const Product = useSelector(state => state.SliceProduct.product)
  // 1 ) Img 
  const handleImg = (e) => {
    const files = Array.from(e.target.files)
    setImg(files)
    const preview = files.map(e => URL.createObjectURL(e)) 
    setImgPreview(preview)
  }
  const handleRemove = (e) => setImgPreview(ImgPreview.filter(item => item !== e))


  // 2 ) Category
  const Category = useSelector(state => state.SliceCategory.Category)
  const Categoryload = useSelector(state => state.SliceCategory.load)
  useEffect(_ => dispatch(GET_Cate()), [])
  let itemsCate = []
  Category ? itemsCate = Category.data : itemsCate =[]


  // 3 ) Brand
  const Brand = useSelector(state => state.SliceBrand.Brand)
  const Brandload = useSelector(state => state.SliceBrand.load)
  useEffect(_ => dispatch(GET_Brand()), [])
  let itemsBrand = []
  Brand ? itemsBrand = Brand.data : itemsBrand =[]


  // 4 ) SubCate 
  const SubCategory = useSelector(state => state.SliceSubCategory.SubCate)
  let Subsitems = []
  SubCategory ? Subsitems = SubCategory.data : Subsitems = []
  useEffect(_ => {
    if(Categoryload === false && CateID !== "val")
    dispatch(GET_Cate_By_Sub(CateID))
  }, [CateID])

  // 5 ) Colors
  const handleColors = (e) => {
    setColor([...color, e.hex])
    setShow(!show)
  }


  const handleSubmit = async (e) => {
    if(Img.length === 0) return toast.error("من فضلك اختار صوره")
    if (Name.length <= 5)return toast.error(" الاسم يجب ان يكون اكبر من خمس حروف");
    if (Des.length <= 5)return toast.error(" الوصف يجب ان يكون اكبر من خمس حروف");
    if (Price === "") return toast.error("ادخل السعر ");
    if (PriceAfterDiscount === "")return toast.error(" ادخل السعر بعد الخصم");
    if (CateID === "val") return toast.error("برجاء اختيار تصنيف ");
    if (SubsID === "val") return toast.error(" برجاء اختيار تصنيف فرعي ");
    if (BrandID === "val") return toast.error("برجاء اختيار براند ");
    if (quantity === "") return toast.error("يجب ادخال الكميه")
    
      const formdata = new FormData();
      formdata.append("title", Name);
      formdata.append("description", Des);
      formdata.append("quantity", quantity);
      formdata.append("price", Price);
      formdata.append("priceAfterDiscount", PriceAfterDiscount);
      formdata.append("imageCover", Img[0]);
      formdata.append("category", CateID);
      formdata.append("subCategory", SubsID);
      color.map((e) => formdata.append("colors", e));
      Img.map((e) => formdata.append("images", e));
    
    setisload(true)
    await dispatch(POST_product(formdata));
    setisload(false)
  };

  useEffect(_ => {
    if (isload === false) {
      if (Product._err) {
        toast.error(Product._err[0].msg)
      } else {
        toast.success("تم حفظ المنتج بنجاح")
        window.location.reload(false)
      }
    }
  } ,[isload])
  
  return  [handleImg , ImgPreview , handleRemove  ,Name, setName, Des, setDes, PriceAfterDiscount, setPriceAfterDiscount, Price, setPrice
    , setCateID, setSubsID , setBrandID, quantity, setquantity, itemsCate, Subsitems, Brandload, itemsBrand, 
    handleColors ,show, setShow ,color , setColor , handleSubmit
  ] 
}

export default H_AddProduct