import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Pagination from '../../Components/Uitily/Pagination'
import UserSideBar from '../../Components/User/UserSideBar'
import UserAddAddress from '../../Components/User/UserAddAddress';
const UserAddAddressPage = () => {
    return (
        <Container >
            <Row className='py-3' style={{gap:"20px"}}>
                <Col sm="3" xs="2" md="2">
                    <UserSideBar />
                </Col>

                <Col sm="9" xs="9" md="9">
                  <UserAddAddress />
                </Col>
            </Row>
        </Container>
    )
}
export default UserAddAddressPage
