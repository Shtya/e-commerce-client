import React from "react";
import BrandCard from "./BrandCard";
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";
import { Container, Row } from "react-bootstrap";
import Loading from "../../util/Loading";
const BrandContainer = ({items_Brand , load_Brand}) => {
  return (
    <Container>
      <div className="admin-content-text mt-2 ">كل الماركات</div>
      <Row className="my-1 d-flex justify-content-between">


      {
          load_Brand === false
            ? items_Brand.length >= 1
              ? items_Brand.map((e,index)=> (<BrandCard key={index}  img={e.image} />))
              :<h6>لا يوجد تصنيفات لعرضها</h6>
            : <Loading />
        }

      </Row>
    </Container>
  );
};

export default BrandContainer;
