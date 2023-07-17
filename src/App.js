import HomePage from "./Page/Home/HomePage";
import './Components/Style/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBarLogin from "./Components/Uitily/NavBarLogin";
import Footer from "./Components/Uitily/Footer";
import LoginPage from './Page/Auth/LoginPage';
import RegisterPage from "./Page/Auth/RegisterPage";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import AllBrandPage from "./Page/Brand/AllBrandPage";
import ShopProductsPage from "./Page/Products/ShopProductsPage";
import ProductDetalisPage from "./Page/Products/ProductDetalisPage";
import CartPage from "./Page/Cart/CartPage";
import ChoosePayMethoudPage from "./Page/Checkout/ChoosePayMethoudPage";
import AdminAllProductsPage from "./Page/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./Page/Admin/AdminAllOrdersPage";
import AdminOrderDetalisPage from "./Page/Admin/AdminOrderDetalisPage";
import AdminAddBrandPage from "./Page/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Page/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Page/Admin/AdminAddSubCategoryPage";
import AdminAddProductsPage from "./Page/Admin/AdminAddProductsPage";
import UserAllOrdersPage from "./Page/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./Page/User/UserFavoriteProductsPage";
import UserAllAddresPage from './Page/User/UserAllAddresPage';
import UserAddAddressPage from './Page/User/UserAddAddressPage';
import UserEditAddressPage from './Page/User/UserEditAddressPage';
import UserProfilePage from "./Page/User/UserProfilePage";
import AdminEditePage from "./Page/Admin/AdminEditePage";
import AdminAddCoupon from "./Page/Admin/AdminAddCoupon";
import Auth from "./hook/Register/Auth";
import ProtectedRoute from "./hook/Register/ProtectedRoute";
import Product_Category from "./Page/Category/Product_Category";
function App() {

  const [user, isUser, isAdmin , register] = Auth()
  return (
    <div className="font" >
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />                               {/* Done */}
          <Route path="/register" element={<RegisterPage />} />                    {/* Done */}

          <Route element={<ProtectedRoute auth={register} />} >
            
          <Route path="/allcategory" element={<AllCategoryPage />} />              {/* Done */}
          <Route path="/allbrand" element={<AllBrandPage />} />                    {/* Done */}
          <Route path="/products" element={<ShopProductsPage />} />                {/* Done */}
          <Route path="/products/:id" element={<ProductDetalisPage />} />          {/* Done */}
          <Route path="/product/category/:id" element={<Product_Category />} />    {/* Done */}
          <Route path="/order/paymethoud" element={<ChoosePayMethoudPage />} />    {/* Done */}
          <Route path="/home" element={<HomePage />} />                            {/* Done */}
          
          </Route>



          <Route element={<ProtectedRoute auth={isAdmin} />} >
          <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />              {/* Done */}
          <Route path="/admin/orders/:id" element={<AdminOrderDetalisPage />} />          {/* Done */}
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />                {/* Done */}
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />          {/* Done */}
          <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />} />    {/* Done */}
          <Route path="/admin/addproduct" element={<AdminAddProductsPage />} />
          <Route path="/admin/coupon" element={<AdminAddCoupon />} />
          <Route path="/admin/edite-product/:id" element={<AdminEditePage />} />
          </Route>

          <Route element={<ProtectedRoute auth={isUser} />} >
          <Route path="/order/paymethoud" element={<ChoosePayMethoudPage />} />           {/* Done */}
          <Route path="/user/allorders" element={<UserAllOrdersPage />} />                {/* Done */} 
          <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage />} />  {/* Done */}
          <Route path="/user/addresses" element={<UserAllAddresPage />} />                {/* Done */}
          <Route path="/user/add-address" element={<UserAddAddressPage />} />             {/* Done */}
          <Route path="/user/edit-address" element={<UserEditAddressPage />} />           {/* Done */}
          <Route path="/user/profile" element={<UserProfilePage />} />                    {/* Done */}
          <Route path="/cart" element={<CartPage />} />                                   {/* Done */}

          </Route>

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
