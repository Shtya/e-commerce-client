import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CartCheckout from "../../Components/Cart/CartCheckout";
import CartItem from "../../Components/Cart/CartItem";
import H_GetCart from "../../hook/H_Cart/H_GetCart";
import Loading from "../../util/Loading";

const CartPage = () => {
  const [itemsCart, countCart, totalPrice, Cartload] = H_GetCart();

  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>
        <div className="cart-title mt-4">عربة التسوق</div>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs="12" md="9">
          {Cartload === false
            ?
            itemsCart && itemsCart.length > 0
              ? itemsCart.map((e,index)=> (<CartItem key={index} e={e} />))
              : <h5 className="not">لا يوجد منتجات في العربه ....</h5>
            : <Loading />
            }
        </Col>

        <Col xs="6" md="3">
          <CartCheckout />
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
