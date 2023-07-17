import React, { useEffect, useRef, useState } from "react";
import { Row, Col ,Modal , Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import H_DeleteCoupon from "../../hook/H_coupon/H_DeleteCoupon";
import H_EditeCoupon from "../../hook/H_coupon/H_EditeCoupon";
import {  PUT_Coupon } from "../../redux/S_Coupon";
const AdminAllCoupons = ({ e }) => {
  const [showDelete, setshowDelete, handleDelete] = H_DeleteCoupon(e)

  const [CurrentType, name, setname, expire, setexpire, discount, setdiscount
    , showUpdate, setshowUpdate, handleUpdate] = H_EditeCoupon(e)


  return (
    <div className="user-address-card my-3 px-2">



            {/* For Delete */}
            <Modal show={showDelete}  onHide={_=> setshowDelete(!showDelete)}>
        <Modal.Header> <Modal.Title> <div className="font"> تأكيد الحذف</div>{" "} </Modal.Title> </Modal.Header>
        <Modal.Body> <div className="font"> هل انت متأكد من حذف الكوبون</div>{" "} </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={_=> setshowDelete(!showDelete)} >تراجع</Button>
          <Button className="font" variant="success" onClick={handleDelete} >حذف</Button>
        </Modal.Footer>
      </Modal>

      



            {/* For Edite */}
            <Modal show={showUpdate}  onHide={_=> setshowUpdate(!showUpdate)}>
        <Modal.Header> <Modal.Title> <div className="font"> تعديل  الكوبون</div>{" "} </Modal.Title> </Modal.Header>
        <Modal.Body>
          
        <Col sm="8">
          <input  value={name} onChange={e=> setname(e.target.value)}  type="text"  className="input-form d-block mt-3 px-3"  placeholder="اسم الكوبون"/>
          <input  ref={CurrentType}  onFocus={e=> e.currentTarget.type = "date"}  onBlur={e=> e.currentTarget.type = "text"}  value={expire} onChange={e=> setexpire(e.target.value)}  type="text"  className="input-form d-block mt-3 px-3"  placeholder="تاريخ انتهاء الكوبون"/>
          <input  value={discount} onChange={e=> setdiscount(e.target.value)}  type="text"  className="input-form d-block mt-3 px-3"  placeholder=" قيمه الخصم"/>
        </Col>
        
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={_=> setshowUpdate(!showUpdate)} >تراجع</Button>
          <Button className="font" variant="success" onClick={handleUpdate} >تعديل</Button>
        </Modal.Footer>
      </Modal>


      <Row className="d-flex justify-content-between  ">
        <Col xs="1">  <div className="p-2">{e.name}</div></Col>
        
        <Col xs="4" className="d-flex d-flex justify-content-end crud">
          <i onClick={_=> setshowDelete(!showDelete)} className="fa-solid fa-trash "></i>
          <i onClick={_=> setshowUpdate(!showUpdate)} className="fa-solid fa-pen-nib"></i>
        </Col>
      </Row>

      <Row className="mt-1">
        <Col xs="12" className="d-flex">
          <div  style={{ color: "#555550", fontFamily: "Almarai", fontSize: "16px",  }}>
             تاريخ الانتهاء:
          </div>

          <div style={{   color: "#979797",   fontFamily: "Almarai",   fontSize: "16px", }} className="mx-2" >
            {new Date(e.expire).toLocaleString("en-US").split(",")[0]}
          </div>
        </Col>
      </Row>
      <Row className="mt-1">
        <Col xs="12" className="d-flex">
          <div  style={{ color: "#555550", fontFamily: "Almarai", fontSize: "16px",  }}>
            قيمه الخصم :
          </div>

          <div style={{   color: "#979797",   fontFamily: "Almarai",   fontSize: "16px", }} className="mx-2" >
            {e.discount}
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminAllCoupons;
