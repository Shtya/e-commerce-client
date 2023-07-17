import React from "react";
import { Col , Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import favoff from "../../images/fav-off.png";
import rate from "../../images/rate.png";
const Prod_Cate_Cart = ({ e ,img, title }) => {
  return(
    <Col xs="8" sm="6" md="4" lg="3" className="d-flex" style={{margin:"auto"}}>
      <Card className="my-2" style={{ width: "100%", maXheight: "345px", borderRadius: "8px", border: "none", backgroundColor: "#FFFFFF", boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)", }}>
        
        <Link to={`/products/${e?._id}`} style={{ textDecoration: "none" }}>   <Card.Img style={{ height: "150px",objectFit:"contain", width: "100%" }} src={e?.imageCover} /> </Link>
        
        <div className="d-flex justify-content-end mx-2">  <img src={favoff} alt="" className="text-center" style={{ height: "24px", width: "26px", }} /></div>
        <Card.Body>
          <Card.Title> <div className="card-title">   {e?.title} </div></Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <img className="" src={rate} alt="" height="16px" width="16px" />
                
                <div className="card-rate mx-2">{e?.ratingsAverage ?e?.ratingsAverage?.toFixed(1) : "0"}</div>
              </div>
              <div className="d-flex">
                <div className="card-price">{e?.price}</div>
                <div className="card-currency mx-1">جنيه</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Prod_Cate_Cart;
