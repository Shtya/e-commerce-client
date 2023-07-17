import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAllProducts from '../../Components/Admin/AdminAllProducts'
import Pagination from '../../Components/Uitily/Pagination'
import H_AllProduct from '../../hook/H_Product/H_AllProduct'
const AdminAllProductsPage = () => {
    const [All_items_Prod , All_load_Prod , numberOfPages , countPage] = H_AllProduct()
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2" >
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAllProducts All_items_Prod={All_items_Prod} All_load_Prod={All_load_Prod} />
                    <Pagination numberOfPages={numberOfPages} countPage={countPage} />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAllProductsPage
