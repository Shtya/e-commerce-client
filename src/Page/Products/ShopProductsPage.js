import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import Pagination from '../../Components/Uitily/Pagination'
import SearchCountResult from '../../Components/Uitily/SearchCountResult'
import SideFilter from '../../Components/Uitily/SideFilter'
import H_AllProduct from '../../hook/H_Product/H_AllProduct'

const ShopProductsPage = () => {
    const [All_items_Prod, All_load_Prod, numberOfPages, countPage] = H_AllProduct()
    return (
        <div style={{ minHeight: '670px' }}>
            {/* <CategoryHeader /> */}
            <Container>
                <SearchCountResult title={`${All_items_Prod.length} نتجية بحث`} />
                <Row className='d-flex flex-row'>
                    <Col sm="10" xs="10" md="11">
                         <CardProductsContainer All_items_Prod={All_items_Prod} All_load_Prod={All_load_Prod} title="" btntitle=""/>
                    </Col>
                </Row>
                    <Pagination numberOfPages={numberOfPages} countPage={countPage} />
            </Container>
        </div>
    )
}

export default ShopProductsPage
