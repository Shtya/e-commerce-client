import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTiltle from "../Uitily/SubTiltle";
import BrandCard from "./BrandCard";
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";
import H_FiveBrand from "../../hook/H_Brand/H_FiveBrand";
import Loading from "../../util/Loading";

const BrandFeatured = ({ title, btntitle }) => {
  const [Five_I_Brand, Five_L_Brand] = H_FiveBrand();

  return (
    <Container>
      <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
      <Row className="my-1 d-flex justify-content-between">
      {
          Five_L_Brand === false
            ? Five_I_Brand.length >= 1
              ? Five_I_Brand.map((e,index)=> (<BrandCard key={index}  img={e.image} />))
              : <h6>لايوجد تصنيفات لعرضها</h6>
            :<Loading />
        }
      </Row>
    </Container>
  );
};

export default BrandFeatured;
