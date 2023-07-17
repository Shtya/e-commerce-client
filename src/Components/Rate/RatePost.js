import React,{useState} from 'react'
import { Col,Row } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { useParams } from 'react-router-dom';
import H_AddReview from './../../hook/H_Review/H_AddReview';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RateItem from './RateItem';
import H_GetReview from './../../hook/H_Review/H_GetReview';
import Loading from '../../util/Loading';

const RatePost = () => {
  const {id} = useParams()
  const [review, setreview, rating , setrating , handleSub , isload] = H_AddReview(id)
  const [user , setuser] = useState(JSON.parse(localStorage.getItem("user")))
  const [items_Review, load] = H_GetReview(id);

    const setting = {
        size: 20,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: 7.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
            setrating(newValue)
        }
  };


  return (
        <div>
        <Row className="mt-3 all ">
          <Col sm="12" className="me-5  d-flex">
            <div className="rate-name  d-inline ms-3 mt-1 "> {user.name}</div>
            <ReactStars {...setting} />
          </Col>


        </Row>
        <Row className="border-bottom mx-2">
          <Col className="d-felx me-4 pb-2 addreview">
            <textarea
              value={review} onChange={e=> setreview(e.target.value)}
              className="input-form-area p-2 mt-3"
              rows="2"
              cols="20"
              placeholder="اكتب تعليقك...."
            />
            <div className=" d-flex justify-content-end al">
              <div className="product-cart-add px-3  py-2 text-center d-inline" onClick={handleSub}>اضف تعليق</div>
            </div>
          </Col>
      </Row>
      
      {

isload === true
  ? items_Review.map((e, index) => <RateItem key={index} e={e} />) : <Loading />

}

    <ToastContainer />
      </div>
    )
}

export default RatePost
