import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAddProducts from '../../Components/Admin/AdminAddProducts'
import AdminCoupon from '../../Components/Admin/AdminCoupon'
const AdminAddCoupon = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                     <AdminCoupon />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAddCoupon
