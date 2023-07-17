import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import ProductDetalis from '../../Components/Products/ProductDetalis'
import RateContainer from '../../Components/Rate/RateContainer'
import H_FiveProdSort from '../../hook/H_Product/H_FiveProdSort'

const ProductDetalisPage = () => {
    const [All_items_Prod , All_load_Prod] = H_FiveProdSort()
    return (
        <div style={{ minHeight: '670px' }}>
            <Container>
                <ProductDetalis />
                <RateContainer />
            </Container>
        </div>
    )
}

export default ProductDetalisPage
