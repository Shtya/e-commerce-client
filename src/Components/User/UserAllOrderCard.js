import React from 'react'
import { Row, Col } from 'react-bootstrap'
import mobile from '../../images/mobile.png'
const UserAllOrderCard = ({item}) => {
    return (
        <div>
            <Row className="d-flex mb-2">
                <Col xs="5" md="2" className="d-flex justify-content-start">
                    <img width="100px" height="100px"  src={item&&item.product&&item.product.imageCover} alt="" />
                </Col>
                <Col xs="5" md="6" className='me-4'>
                    <div className="d-inline pt-2 cat-title">
                    {item&&item.product&&item.product.title}
                    </div>
                    <div className="mt-3 ">
                        <div className="cat-text  d-inline">الكميه</div>
                        <input
                            value={item&&item.quantity}
                            className="mx-2 "
                            type="number"
                            style={{ width: "40px", height: "25px" }}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllOrderCard
