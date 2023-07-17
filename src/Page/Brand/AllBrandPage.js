import React from 'react'
import BrandContainer from '../../Components/Brand/BrandContainer'
import Pagination from '../../Components/Uitily/Pagination'
import H_AllBrand from '../../hook/H_Brand/H_AllBrand'
const AllBrand = () => {
    const [items_Brand , load_Brand , numberOfPages , countPage] = H_AllBrand()
    return (
        <div style={{minHeight:'670px'}}>
            <BrandContainer items_Brand={items_Brand} load_Brand={load_Brand} />
            <Pagination numberOfPages={numberOfPages} countPage={countPage} />
        </div>
    )
}

export default AllBrand
