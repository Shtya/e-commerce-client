import React, { useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import H_AddToCart from '../../hook/H_Cart/H_AddToCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductText = ({ Load_ID_Prod, Get_ID_Prod }) => {
  const [handleAdToCart, handlecolor, indexcolor ] = H_AddToCart(Get_ID_Prod)
    return (
        <div>
      <Row className="mt-2">
        <div className="cat-text">الاسم :</div>
      </Row>
      <Row>
        <Col md="8">
            <div className="cat-title d-inline">{Get_ID_Prod.title}<div className="cat-rate d-inline mx-3">{ Get_ID_Prod.ratingsAverage }</div>
          </div>
        </Col>
      </Row>
<br/>
      <Row>
          <Col md="8" className="mt-1 d-flex">
            {
              Get_ID_Prod.colors
                ? Get_ID_Prod.colors.map((e, index) => (
                  <div key={index}
                    onClick={_ => handlecolor(e, index)}
                    className="color ms-2 "
                    style={{ backgroundColor: e  , border: index === indexcolor? "2px solid red" : null }}></div>))
                :null
            }

        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">{Get_ID_Prod.description}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
          <Col md="12">

            {
              Get_ID_Prod.priceAfterDiscount
                ? <div className="product-price d-inline px-3 py-3 border"> <span className='palance1'>{Get_ID_Prod.price}</span>  {Get_ID_Prod.priceAfterDiscount} جنية</div>
                : <div className="product-price d-inline px-3 py-3 border">{Get_ID_Prod.price} جنية</div>
            }
          
          <div className="product-cart-add px-3 py-3 d-inline mx-3" onClick={handleAdToCart}>اضف للعربة</div>
        </Col>
        </Row>
        <ToastContainer />
    </div>
    )
}

export default ProductText
