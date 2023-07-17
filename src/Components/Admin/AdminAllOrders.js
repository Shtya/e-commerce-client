import React from 'react'
import { Row } from 'react-bootstrap'
import H_GetOrder from '../../hook/H_Order/H_GetOrder';
import Loading from '../../util/Loading';
import AdminAllOrdersItem from './AdminAllOrdersItem'

const AdminAllOrders = () => {
    const [items_Order, load_Order] = H_GetOrder();

    return (
        <div>
            <div className='admin-content-text'>ادارة جميع الطلبات</div>
            <Row className='justify-content-start'>
            {
          load_Order === false
            ? items_Order && items_Order.length >= 1
              ? items_Order.map((e,index)=> (<AdminAllOrdersItem key={index} e={e} index={index} />))
              : <h4 className='not'>لا يوجد طلبات حتي الان</h4>
            : <Loading />
        }

            </Row>
        </div>
    )
}

export default AdminAllOrders
