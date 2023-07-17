import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import H_DeleteCart from "../../hook/H_Cart/H_DeleteCart";
import H_GetCart from "../../hook/H_Cart/H_GetCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import H_ApplyCoupon from "./../../hook/H_coupon/H_ApplyCoupon";

const CartCheckout = () => {
  const navigat = useNavigate()
  const [itemsCart, countCart, totalPrice, Cartload, totalCartDiscount] = H_GetCart();

  const [DeleteCart] = H_DeleteCart();
  const [handleSub, nameCoupon, setnameCoupon] = H_ApplyCoupon();
  // console.log(itemsCart)

  const handlePayment = () => {
    if (itemsCart.length < 1) {
      toast.error("اختر منتج اولا ")
    } else {
      navigat("/order/paymethoud")
    }
  }
  return (
    <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
      <Col xs="12" className="d-flex  flex-column checkout  ">
        <div className="d-flex  ">
          <input
            value={nameCoupon}
            onChange={(e) => setnameCoupon(e.target.value)}
            className="copon-input d-inline text-center "
            placeholder="كود الخصم"
          />
          <button className="copon-btn d-inline " onClick={handleSub}>
            تطبيق
          </button>
        </div>

        {/* {
              e&&e.product && e.product.priceAfterDiscount
                ? <div className="product-price border"> <span className='palance1 ms-1'>{e.price * e.quantity}</span>  {e.product.priceAfterDiscount * e.quantity} جنية</div>
                : <div className="product-price border">{e.price} جنية</div>
            } */}



        <div className="product-price w-100  border">
          {totalCartDiscount ? <> <span className='palance1 ms-1'>{ totalPrice }</span> {totalCartDiscount}  </> : totalPrice }
        </div>
        <button
          className="product-cart-add w-100 px-2 mb-2"
          onClick={DeleteCart}
        >
          مسح العربه
        </button>

        <button onClick={handlePayment} className="product-cart-add w-100 px-2 product-cart-add  d-inline ">
          اتمام الشراء
        </button>
      </Col>
      <ToastContainer />
    </Row>
  );
};

export default CartCheckout;
