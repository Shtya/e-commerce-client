import { configureStore } from "@reduxjs/toolkit";

import SliceCategory          from './S_Category'
import SliceBrand             from './S_Brand'
import SliceSubCategory       from './S_SubCate'
import SliceProduct           from './S_Product'
import SliceRegister          from './S_register'
import SliceCart              from './S_Cart'
import SliceReview            from './S_Review'
import SliceWishlist          from './S_Wishlist'
import SliceCoupon            from './S_Coupon'
import SliceAddress           from './S_Address'
import SliceOrder             from './S_Order';
import SliceProfile           from './H_Profile';
export const store = configureStore({
  reducer: {
    SliceCategory,
    SliceBrand,
    SliceSubCategory,
    SliceProduct,
    SliceRegister,
    SliceCart,
    SliceReview,
    SliceWishlist,
    SliceCoupon,
    SliceAddress,
    SliceProfile,
    SliceOrder
  },
  devTools: true,
})