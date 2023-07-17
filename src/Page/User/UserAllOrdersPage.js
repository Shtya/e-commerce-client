import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAllProducts from '../../Components/Admin/AdminAllProducts'
import Pagination from '../../Components/Uitily/Pagination'
import AdminOrderDetalis from '../../Components/Admin/AdminOrderDetalis'
import AdminAddBrand from '../../Components/Admin/AdminAddBrand'
import UserSideBar from '../../Components/User/UserSideBar'
import UserAllOrder from '../../Components/User/UserAllOrder'
import H_GetOrder from '../../hook/H_Order/H_GetOrder'

const UserAllOrdersPage = () => {
    return (
        <Container >
            <Row className='py-3' style={{gap:"20px"}}>
                <Col sm="3" xs="2" md="2">
                    <UserSideBar />
                </Col>

                <Col sm="9" xs="9" md="9">
                    <UserAllOrder />
                </Col>
            </Row>
        </Container>
    )
}


export default UserAllOrdersPage
