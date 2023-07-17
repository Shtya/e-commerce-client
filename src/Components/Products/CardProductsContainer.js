import React from "react";
import { Container, Row } from "react-bootstrap";
import H_FiveProd from "../../hook/H_Product/H_FiveProd";
import Loading from "../../util/Loading";
import SubTiltle from "../Uitily/SubTiltle";
import ProductCard from "./ProductCard";

const CardProductsContainer = ({ All_load_Prod ,All_items_Prod,  title, btntitle, pathText }) => {
  

  return (
    <Container>
      <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />
      <Row className="my-2 d-flex justify-content-center CardProd">
        {All_load_Prod === false ? (
          All_items_Prod.length >= 1 ? (
            All_items_Prod.map((e, index) => <ProductCard key={index} e={e} />)
          ) : (
            <h4>لا يوجد منتجات</h4>
          )
        ) : (
          <Loading />
        )}

      </Row>
    </Container>
  );
};

export default CardProductsContainer;
