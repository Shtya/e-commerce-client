import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CategoryCard = ({ e , background, img, title }) => {
    return (
        <Col xs="6" sm="4" md="4" lg="2" style={{gap:"10px",justifyContent:"center"}} className=" d-flex ">
            <div className="allCard mb-3 CardCate " style={{border:"1px solid ",position:"relative" , borderRadius:"5px"}}>
                <div className="categoty-card " style={{ backgroundColor: `${background}` }}></div>
                <Link to={`/product/category/${e&& e._id}`} ><img alt="zcv" src={img} className="categoty-card-img" /></Link>
                <p style={{position:"absolute" , top:"-7px" , left:'50%' , transform:"translateX(-50%)"}} className="categoty-card-text my-2">{title}</p>
            </div>
        </Col>
    )
}

export default CategoryCard
