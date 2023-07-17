import React from 'react'
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import Silder from './../../Components/Home/Silder';
import DiscountSection from './../../Components/Home/DiscountSection';
import BrandFeatured from '../../Components/Brand/BrandFeatured';
import H_FiveProd from '../../hook/H_Product/H_FiveProd';

const HomePage = () => {
    const [All_items_Prod , All_load_Prod] = H_FiveProd();
    return (
        <div className='font' style={{ minHeight: '670px' }}>

            <Silder />
            <HomeCategory />
            <CardProductsContainer All_items_Prod={All_items_Prod} All_load_Prod={All_load_Prod} title="الاكثر مبيعا" btntitle="المزيد" pathText="/products" />
            <DiscountSection />
            <CardProductsContainer All_items_Prod={All_items_Prod} All_load_Prod={All_load_Prod} title="احدث الازياء" btntitle="المزيد" pathText="/products" />
            <BrandFeatured title="اشهر الماركات" btntitle="المزيد"  />

        </div>
    )
}

export default HomePage
