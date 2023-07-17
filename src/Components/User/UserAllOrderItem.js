import React from 'react'
import { Row, Col } from 'react-bootstrap'
import mobile from '../../images/mobile.png'
import Loading from '../../util/Loading'
import UserAllOrderCard from './UserAllOrderCard'
const UserAllOrderItem = ({ e, index, }) => {
    return (
        <div className="user-order mt-2">
            <Row>
                <div className="py-2 order-title">طلب رقم  # { index +1} </div>
            </Row>
            {
                e && e.cartItems
                    ?  e.cartItems.map((item , index)=> <UserAllOrderCard key={index} item ={item} />)
                    : <Loading />
            }

            <Row className="d-flex justify-content-between OrderCash">
                <Col xs="6" className="">
                    <div className='OrderCash1'>
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
                <Col xs="6" className="d-flex justify-content-end">
                    <div className='OrderCash2'>
                        <div className="barnd-text">{e.totalOrderPrice} جنيه</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllOrderItem
