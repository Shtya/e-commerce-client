import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import H_GET_ID_Order from "../../hook/H_Order/H_GET_ID_Order";
import UserAllOrderItem from "../User/UserAllOrderItem";
import { useDispatch, useSelector } from 'react-redux';
import { PUT_deliver, PUT_Paid } from "../../redux/S_Order";
import Loading from "../../util/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AdminOrderDetalis = () => {
  const { id } = useParams();
  const [items_Order, load] = H_GET_ID_Order(id)

  const [isdeliver, setisdeliver] = useState("")
  const [ispay, setispay] = useState("")
  const [isload, setisload] = useState(true)
  
  const dispatch = useDispatch()
  const OrderStatus = useSelector(state => state.SliceOrder.isPaid)

  const handledeliver = async() => {
    if (isdeliver == "true") {
      setisload(true)
      await dispatch(PUT_deliver({id:id , name:""}))
      setisload(false)
      toast.success("الان الطلب في مرحله التوصيل")
      setTimeout(() => {
        window.location.reload(false)
      }, 1000);
    } else {
      toast.error("برجاء حدد نوع الطلب في مرحله التوصيل")
      
    }
  }
  const handelPaid = async() => {
    if (ispay === "true") {
      setisload(true)
      await dispatch(PUT_Paid({id:id , name:""}))
      setisload(false)
      toast.success(" الطلب تم دفعه")
      setTimeout(() => {
        window.location.reload(false)
      }, 1000);
    } else {
      toast.error("الطلب لم يتم دفعه بعد")
    }
  }

  useEffect(_ => {
    if (isload === false) {
      console.log(OrderStatus)
    }
  } ,[isload])
  



  return (
    <div>
          <div>
            <div className='admin-content-text'>ادارة جميع الطلبات</div>
            <Row className='justify-content-start'>
            {
          load === false
            ? items_Order && items_Order.length >= 1
              ? items_Order.map((e,index)=> (<UserAllOrderItem ispay={ispay} isdeliver={isdeliver} key={index} e={e} index={index} />))
              : <h4>لا يوجد طلبات حتي الان</h4>
            : <Loading />
        }
            </Row>
        </div>

      <Row className="justify-content-center mt-4 user-data">
        <Col xs="12" className=" d-flex">
          <div className="admin-content-text py-2">تفاصيل العميل</div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            الاسم:
          </div>

          <div  style={{    color: "#979797",    fontFamily: "Almarai",    fontSize: "16px",  }}  className="mx-2">
            {items_Order[0] && items_Order[0].user && items_Order[0].user.name }
          </div>
        </Col>

        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            رقم الهاتف:
          </div>

          <div style={{ color: "#979797", fontFamily: "Almarai", fontSize: "16px", }} className="mx-2" >
          {items_Order[0] && items_Order[0].user && items_Order[0].user.phone }
          </div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{ color: "#555550", fontFamily: "Almarai", fontSize: "16px", }} >  الايميل:</div>
          <div  style={{    color: "#979797",    fontFamily: "Almarai",    fontSize: "16px",  }}  className="mx-2">
          {items_Order[0] && items_Order[0].user && items_Order[0].user.email }
          </div>
        </Col>
        <div className="d-flex mt-2 justify-content-center">
          <div>
            <select name="pay" id="paid" onChange={e=>setispay(e.target.value)} className="select input-form-area mt-1  text-center w-50" >
              <option value="0">الدفع</option>
              <option value="true">تم</option>
              <option value="false">لم يتم</option>
            </select>

            <button className="btn-a px-2 d-inline mx-1 " onClick={handelPaid} >حفظ</button>
          </div>

          <div>
            <select name="deliver" id="deliver" onChange={e=>setisdeliver(e.target.value)} className="select input-form-area mt-1  text-center  w-50" >
              <option value="0">التوصيل</option>
              <option value="true">تم</option>
              <option value="false">لم يتم</option>
            </select>
            <button className="btn-a px-2 d-inline mx-1 " onClick={handledeliver} > حفظ </button>
          </div>
        </div>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminOrderDetalis;
