import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import H_GetCart from "../../hook/H_Cart/H_GetCart";
import { POST_Order } from "../../redux/S_Order";
import H_GetAddress from './../../hook/H_Address/H_GetAddress';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import H_Create_Order from "../../hook/H_Order/H_Create-Order";

const ChoosePayMethoud = () => {
  const [items_Addres, load_Address] = H_GetAddress()
  const [, , , , , itemsCart_All] = H_GetCart()
  const [handlePayment] = H_Create_Order()

  return (
    <div>
      <div className="admin-content-text pt-5 ">اختر طريقة الدفع</div>
      <div className="user-address-card my-3  px-3">
        <Row className="d-flex justify-content-between ">
          <Col xs="12" className="my-2">
            <input  name="group"  id="group2"  type="radio"  value="الدفع عن طريق الفيزا"  className="mt-2"/>
            <label className="mx-2" htmlFor="group2">  الدفع عن طريق البطاقه الائتمانية</label>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col xs="12" className="d-flex mb-4" >
            <input name="group" id="group1" type="radio" value="الدفع عند الاستلام" className="mt-2" />
            <label className="mx-2" htmlFor="group1">  الدفع عند الاستلام</label>
          </Col>
        </Row>

        <select name="Category"
          className="select select1  mb-4 px-2  " >
          <option value="val" defaultChecked>اختر عنوان </option>
            {
              load_Address === false
                ? items_Addres&& items_Addres.length >= 1
                  ? items_Addres.map((e, index) => <option key={index} value={e._id}>{e.alias }</option>)
                  : <option value="val">لا يوجد عناوين</option>
                : <option value="val">يتم تحميل العناوين</option>
            }
          </select>
      </div>

      <Row>
        <Col xs="12" className="d-flex justify-content-end push">
          <div className="product-price d-flex  border">{
            itemsCart_All && itemsCart_All.totalCartDiscount ? <> <span className="palance1 ms-1">{itemsCart_All.totalCartPirce }</span> {itemsCart_All.totalCartDiscount}  </>: itemsCart_All.totalCartPirce
          } جنية</div>
          <div className="btn-save" onClick={handlePayment}>اتمام الشراء</div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default ChoosePayMethoud;
