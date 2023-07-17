import React, { useState } from "react";
import { Col, Card, Row , Modal , Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import prod1 from "../../images/prod1.png";
import { DELETE_product } from "../../redux/S_Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminAllProductsCard = ({ e }) => {
  const [showDelete, setshowDelete] = useState(false)
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(DELETE_product(e._id))
    toast.success("تم حذف المنتج بنجاح")
    setTimeout(() => window.location.reload(false) , 100);
  }

  return (
    <Col xs="8" sm="6" md="5" lg="4" className="d-flex" style={{ margin:"auto"}}>


              {/* For Delete */}
              <Modal show={showDelete}  onHide={_=> setshowDelete(!showDelete)}>
        <Modal.Header> <Modal.Title> <div className="font"> تأكيد الحذف</div>{" "} </Modal.Title> </Modal.Header>
        <Modal.Body> <div className="font"> هل انت متأكد من حذف المنتج</div>{" "} </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={_=> setshowDelete(!showDelete)} >تراجع</Button>
          <Button className="font" variant="success" onClick={handleDelete} >حذف</Button>
        </Modal.Footer>
      </Modal>







      <Card
        className="my-2 img3" style={{ width: "100%", borderRadius: "8px", border: "none", backgroundColor: "#FFFFFF", }}>
        
        <Row className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between">
            <i onClick={_=> setshowDelete(!showDelete)} style={{cursor:"pointer"}} className="fa-solid fa-trash"></i>
          </Col>
        </Row>

        <Link to={`/products/${e._id}`} style={{ textDecoration: "none" }}>
          <Card.Img  style={{  width: "100%" }}  src={e.imageCover}/>
          <Card.Body>
            <Card.Title>  <div className="card-title">{e.title}</div></Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between card-price">
                <div className="card-rate">{e.ratingsAverage&&e.ratingsAverage.toFixed(1)}</div>
                <div className="d-flex">   <div className="card-currency mx-1">جنيه</div>   <div className="card-price">{e.price}</div> </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default AdminAllProductsCard;
