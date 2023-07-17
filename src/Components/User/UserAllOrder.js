import React from "react";
import { Row } from "react-bootstrap";
import H_GetOrder from "../../hook/H_Order/H_GetOrder";
import Loading from "../../util/Loading";
import UserAllOrderItem from "./UserAllOrderItem";

const UserAllOrder = () => {
  const [items_Order, load_Order] = H_GetOrder();
  return (
    <div>
      <div className="admin-content-text pb-4">اهلا  : {items_Order[0] && items_Order[0].user&&items_Order[0].user.name}
         <span style={{marginRight:"20px" , fontSize:"14px"}}>(  الطلبات # { items_Order&& items_Order.length})</span>
      </div>
      <Row className="justify-content-between">
        {
          load_Order === false
            ? items_Order && items_Order.length >= 1
              ? items_Order.map((e,index)=> (<UserAllOrderItem key={index} e={e} index={index} />))
              : <h4 className="not">لا يوجد طلبات حتي الان</h4>
            : <Loading />
        }
      </Row>
    </div>
  );
};

export default UserAllOrder;
