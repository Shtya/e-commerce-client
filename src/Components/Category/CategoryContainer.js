import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "./../Category/CategoryCard";
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";
import Loading from "../../util/Loading";
const CategoryContainer = ({ AllCateLoad, AllitemsCate }) => {
  return (
    <Container>
      <div className="admin-content-text mt-2 ">كل التصنيفات</div>
      <Row className="my-2 d-flex justify-content-between">

        {
          AllCateLoad === false
            ? AllitemsCate.length >= 1
              ? AllitemsCate.map((e,index)=> (<CategoryCard e={e} key={index} title={e.name} img={e.image} />))
              :<h6>لا يوجد تصنيفات لعرضها</h6>
            : <Loading />
        }
        

      </Row>
    </Container>
  );
};

export default CategoryContainer;
