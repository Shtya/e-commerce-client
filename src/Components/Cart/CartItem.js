import React,{useState , useEffect} from 'react'
import { Col,Row , Modal , Button } from 'react-bootstrap'
import deleteicon from '../../images/delete.png'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_Cart_ID, PUT_Cart_ID } from '../../redux/S_Cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartItem = ({ e }) => {
  const [showDelete, setshowDelete] = useState(false);
  const [quantity , setquantity] = useState()
  const [isload , setisload] = useState(true)
  const dispatch = useDispatch()
  useEffect(_ => setquantity(e && e.quantity), [])
  const CartPut = useSelector(state=> state.SliceCart.CartPut)
  const handleDelete = () => {
    dispatch(DELETE_Cart_ID(e._id))
    toast.success("تم ازاله المنتج من العربه")
    setTimeout(() => {
      window.location.reload(false)
    }, 500);
  }

  const handleQuantity = async () => {
    setisload(true)
    await dispatch(PUT_Cart_ID({id:e&& e._id,  quantity: quantity }))
    setisload(false)
    toast.success("تم تعديل الكميه")
    // window.location.reload(false)
  }


    return (
      <Col xs="12" className="cart-item-body my-2 d-flex px-2">

              {/* For Delete */}
      <Modal show={showDelete}  onHide={_=> setshowDelete(!showDelete)}>
        <Modal.Header> <Modal.Title> <div className="font"> تأكيد الحذف</div>{" "} </Modal.Title> </Modal.Header>
        <Modal.Body> <div className="font">هل انت متأكد من ازاله المنتج</div>{" "} </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={_=> setshowDelete(!showDelete)} >تراجع</Button>
          <Button className="font" variant="success" onClick={handleDelete} >حذف</Button>
        </Modal.Footer>
      </Modal>



        {
          e && e.product && <img  style={{padding:"10px" ,marginLeft:"10px"}} width="150px" height="150px" src={e.product.imageCover} alt="" />
        }
        
        <div className="w-100">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">

            <Col sm="12" className=" d-flex flex-row justify-content-start">
              <div className="d-inline pt-2 cat-rate ms-2 nameCart">4.5</div>
            {
              e && e.product && <div className="d-inline pt-2 cat-title nameCart">{e.product.title}</div>
           }
            </Col>

              <div className="d-flex pt-2 remove " style={{ cursor: "pointer" }} onClick={_=> setshowDelete(!showDelete)}>
                <img src={deleteicon} alt="" width="20px" height="24px" />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
          </Row>
          <Row>
            <Col sm="12" className="mt-1 d-flex">
              <div className="cat-text d-inline nameCart ms-2">  اللون   :</div>
              <div
                className="color ms-2 border colorCart"
                style={{ backgroundColor: e&&e.color}  }>  </div>
            </Col>
          </Row>
  
          <Row className="justify-content-between">
            <Col sm="12" className="">
              {
              e&&e.product && e.product.priceAfterDiscount
                ? <div className="product-price border"> <span className='palance1 ms-1'>{e.price * e.quantity}</span>  {e.product.priceAfterDiscount * e.quantity} جنية</div>
                : <div className="product-price border">{e.price} جنية</div>
            }
              {/* <div className="d-inline pt-2 barnd-text">{e&& e.price} جنية</div> */}
            </Col>
          </Row>
        </div>
        <ToastContainer />
      </Col>
    )
}

export default CartItem
