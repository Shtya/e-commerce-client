import React , {useState , useEffect} from "react";
import { Card, Col } from "react-bootstrap";
import rate from "../../images/rate.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import H_Add_Delete_Wishlist from './../../hook/H_WishList/H_Add_Delete_Wishlist';
import { useDispatch, useSelector } from 'react-redux';


const ProductCard = ({ e }) => {
  const [showWish, handleWishListAdd, handleWishListRemove , isload] = H_Add_Delete_Wishlist(e)
  
  const dispatch = useDispatch()
  const Wishlist = useSelector(state => state.SliceWishlist.Wishlist)

  return (
    <Col xs="12" sm="4" md="4" lg="3" className="d-flex CardProd1">
      <Card className="my-2 CardProd2" style={{ width: "100%", height: "auto", borderRadius: "8px", border: "none", backgroundColor: "#FFFFFF", boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)" ,whiteSpace:"pre-warp" }}>
        
        <Link to={`/products/${e&&e._id}`} className="cover1" style={{ textDecoration: "none" }}>   <Card.Img style={{ height: "100%", width: "100%" , padding:"10px" }} src={e&&e.imageCover} className="imgProd" /> </Link>
        
        <div className="d-flex justify-content-end mx-2" style={{cursor:"pointer"}} >
          {
            showWish
              ? <i onClick={handleWishListAdd} className="fa-regular fa-heart"></i>
              : <i onClick={handleWishListRemove} className="fa-solid fa-heart" style={{ color: "red" }}></i>
          }
          
        </div>
        <Card.Body>
          <Card.Title> <div className="card-title" style={{whiteSpace:"pre-line" , height:"50px"}}>   {e && e.title} </div></Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between align-items-center ">
              <div className="d-flex">
                <img className="" src={rate} alt="" height="16px" width="16px" />
                
                <div className="card-rate mx-2">{e && e.ratingsAverage&&e.ratingsAverage.toFixed(1)}</div>
              </div>
              <div className="d-flex">
                <div style={{fontSize:"16px" , whiteSpace:"nowrap"}} className="card-price palance">{
                  e && e.priceAfterDiscount ? (<div>  <span> {e&&e.price } </span> {e&&e.priceAfterDiscount} </div>) : e&&e.price
                }</div>
                <div className="card-currency mx-1" style={{fontSize:"14px"}}>جنيه</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;
