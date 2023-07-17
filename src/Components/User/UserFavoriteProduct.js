import React from 'react'
import { Row } from 'react-bootstrap';
import ProductCard from './../Products/ProductCard';
import Pagination from '../Uitily/Pagination'
import H_GetWishlist from '../../hook/H_WishList/H_GetWishlist';
import Loading from '../../util/Loading';
const UserFavoriteProduct = () => {
    const [items_Wishlist] = H_GetWishlist()

    return (
        <div>
            <div className="admin-content-text pb-4">قائمة المفضلة</div>
            <Row className='justify-content-start CardProd'>
                {
                    items_Wishlist && items_Wishlist.length > 0 ? 
                        items_Wishlist
                            ? items_Wishlist.map((e, index) => <ProductCard e={e} key={index} />)
                            : <Loading />
                        : <h3 className='not'>لا يوجد منتجات في المفضله</h3>
                }
            </Row>
            <Pagination />
        </div>
    )
}

export default UserFavoriteProduct
