import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTiltle from "../Uitily/SubTiltle";
import CategoryCard from "./../Category/CategoryCard";
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";
import H_FiveCate from "../../hook/H_Category/H_FiveCate";
import Loading from '../../util/Loading';


const HomeCategory = () => {
  const [Fiveitems, FiveLoad] = H_FiveCate();
  return (
    <Container>
      <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        {
          FiveLoad === false
            ? Fiveitems.length >= 1
              ? Fiveitems.map((e,index)=> (<CategoryCard e={e} key={index} title={e.name} img={e.image} />))
              : <h6>لايوجد تصنيفات لعرضها</h6>
            :<Loading />
        }

      </Row>
    </Container>
  );
};

export default HomeCategory;
