import React, { useEffect, useRef, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { POST_Coupon } from "../../redux/S_Coupon";
import H_Addcounpon from "../../hook/H_coupon/H_AddCoupon";
import AdminAllCoupons from "./AdminAllCoupons";
import H_GetCoupon from "../../hook/H_coupon/H_GetCoupon";
import Loading from "../../util/Loading";

const AdminCoupon = () => {
  const [loadCoupon , itemsCoupon] = H_GetCoupon()
  const [name , setname , expire ,setexpire , discount , setdiscount , handleSub,CurrentType] = H_Addcounpon()

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
        <Col sm="8">
          <input  value={name} onChange={e=> setname(e.target.value)}  type="text"  className="input-form d-block mt-3 px-3"  placeholder="اسم الكوبون"/>
          <input  ref={CurrentType}  onFocus={e=> e.currentTarget.type = "date"}  onBlur={e=> e.currentTarget.type = "text"}  value={expire} onChange={e=> setexpire(e.target.value)}  type="text"  className="input-form d-block mt-3 px-3"  placeholder="تاريخ انتهاء الكوبون"/>
          <input  value={discount} onChange={e=> setdiscount(e.target.value)}  type="text"  className="input-form d-block mt-3 px-3"  placeholder=" قيمه الخصم"/>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handleSub}>حفظ التعديلات</button>
        </Col>
      </Row>
      <Col sm="8" >
        {
          loadCoupon === false
            ? itemsCoupon.length >= 1
              ? itemsCoupon.map((e,index)=> (<AdminAllCoupons key={index} e={e} />))
              : <h4>لا يوجد كوبونات حتي الان</h4> : <Loading />
        }
      </Col>
      <ToastContainer />
    </div>
  );
};

export default AdminCoupon;
