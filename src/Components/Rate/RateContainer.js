import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import rate from "../../images/rate.png";
import Pagination from "../Uitily/Pagination";
import RateItem from "./RateItem";
import RatePost from "./RatePost";
import H_Get_ID_Prod from "./../../hook/H_Product/H_Get_ID_Prod";
import { useParams } from "react-router-dom";
import H_GetReview from "./../../hook/H_Review/H_GetReview";
import Loading from "../../util/Loading";
const RateContainer = () => {
  const { id } = useParams();
  const [Get_ID_Prod, Load_ID_Prod] = H_Get_ID_Prod(id);

  return (
    <Container className="rate-container review">
      <Row>
        <Col className="d-flex review1 ">
          <div className="sub-tile d-inline p-1 ">التقيمات</div>
          <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2">
            {Get_ID_Prod && Get_ID_Prod.ratingsAverage&& Get_ID_Prod.ratingsAverage.toFixed(1)}
          </div>

          <div className="rate-count d-inline p-1 pt-2">
            ({Get_ID_Prod && Get_ID_Prod.ratingsQuantity} تقييم)
          </div>
        </Col>
      </Row>
      <RatePost />


    </Container>
  );
};

export default RateContainer;
