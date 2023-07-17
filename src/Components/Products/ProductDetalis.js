import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";
import { useParams } from 'react-router-dom';
import H_Get_ID_Prod from "../../hook/H_Product/H_Get_ID_Prod";

const ProductDetalis = () => {
  const { id } = useParams()
  const [Get_ID_Prod , Load_ID_Prod ] = H_Get_ID_Prod(id)
  return (
    <div>
      <Row className="py-3">
        <Col lg="4">
          <ProductGallery Get_ID_Prod={Get_ID_Prod}  Load_ID_Prod={Load_ID_Prod}/>
        </Col>

        <Col lg="8">
          <ProductText Get_ID_Prod={Get_ID_Prod} Load_ID_Prod={Load_ID_Prod} />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetalis;
