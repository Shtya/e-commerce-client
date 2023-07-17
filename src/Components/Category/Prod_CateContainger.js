import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";

import Loading from "../../util/Loading";
import Prod_Cate_Cart from "./Prod_Cate_Cart";
const Prod_CateContainger = ({ prod_cate_load, prod_cate }) => {
  return (
    <Container>
      <div className="admin-content-text mt-2 ">كل المنتجات علي هذا التصنيف</div>
      <Row className="my-2 d-flex justify-content-between">

        {
          prod_cate_load === false
            ? 
               prod_cate.map((e,index)=> (<Prod_Cate_Cart key={index} e={e} title={e.name} img={e.image} />))
            : <Loading />
        }
        

      </Row>
    </Container>
  );
};

export default Prod_CateContainger;
