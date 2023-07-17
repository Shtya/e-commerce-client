import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import mobile from '../../images/mobile.png'
const AdminAllOrdersItem = ({ e, index }) => {
    return (
        <Col sm="12" style={{margin:"20px 0" , overflow:"hidden"}}>
            <Link
                
                className="cart-item-body my-2 px-1 d-flex"
                style={{ textDecoration: "none" , height :"auto" }}>
                <div className="w-100">
                    <Row className="justify-content-between">
                        <Col sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-inline  cat-text">طلب رقم #{index +1}</div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-1">
                        <Col sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-inline pt-2 cat-title">
                                طلب من  <span style={{color:"#aaa"}}>{ e&& e.user&&e.user.email }</span>
                            </div>
                            <div className="d-inline pt-2 barnd-text" style={{whiteSpace:"nowrap"}}>{e&& e.totalOrderPrice} جنية</div>
                        </Col>
                    </Row>
                        <Col xs="12" className="">
                            <div style={{fontSize:"14px" , whiteSpace:"nowrap" , color:'black' ,textAlign:"right"}}>
                                <div className="d-inline">التوصيل</div>
                                <div className="d-inline mx-2 stat"> {
                                e.isDelivered == true ? "تم " : " لم يتم "
                                }</div>
                                <div className="d-inline">الدفع</div>
                                <div className="d-inline mx-2 stat">{
                                e.isPaid == true ? "تم " : " لم يتم "
                                }  </div>
                                <div className="d-inline mx-2 stat">( كاش ) </div>
                            </div>
                </Col>
                </div>
            </Link>
        </Col>
    )
}

export default AdminAllOrdersItem
