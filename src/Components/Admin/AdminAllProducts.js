import React from "react";
import { Row } from "react-bootstrap";
import Loading from "../../util/Loading";
import AdminAllProductsCard from "./AdminAllProductsCard";

const AdminAllProducts = ({ All_load_Prod, All_items_Prod }) => {
  return (
    <div style={{width:"90%" , margin:"auto"}}>
      <div className="admin-content-text">ادارة جميع المنتجات</div>
      <Row className="justify-content-start">
        {All_load_Prod === false
          ? All_items_Prod.length >= 1
            ? All_items_Prod.map((e,index)=> (<AdminAllProductsCard key={index} e={e} />))
            :<h4 className="not">لا يوجد طلبات لعرضها</h4>
          : <Loading />}
        
      </Row>
    </div>
  );
};

export default AdminAllProducts;
