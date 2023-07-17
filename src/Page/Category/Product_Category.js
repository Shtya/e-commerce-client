import React from 'react'
import { useParams } from 'react-router-dom'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Prod_CateContainger from '../../Components/Category/Prod_CateContainger'
import Pagination from '../../Components/Uitily/Pagination'
import H_getProdCate from '../../hook/H_Prod_cate/H_getProdCate'

const Product_Category = () => {
    const { id } = useParams()
    const [prod_cate, prod_cate_load] = H_getProdCate(id)

    return (
        <div style={{minHeight:'670px'}}>
        
            <Prod_CateContainger prod_cate={prod_cate} prod_cate_load={prod_cate_load} />
            <Pagination  />
        </div>
    )
}

export default Product_Category
