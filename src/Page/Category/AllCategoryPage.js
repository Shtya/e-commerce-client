import React from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'
import H_AllCate from '../../hook/H_Category/H_AllCate'
import { useParams } from 'react-router-dom';

const AllCategoryPage = () => {
    const [AllitemsCate, AllCateLoad, numberOfPages , countPage] = H_AllCate()
    return (
        <div style={{minHeight:'670px'}}>
        
            <CategoryContainer AllitemsCate={AllitemsCate} AllCateLoad={AllCateLoad} />
            <Pagination numberOfPages={numberOfPages} countPage={countPage} />
        </div>
    )
}

export default AllCategoryPage
