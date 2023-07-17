import React from 'react'
import { Row, Col ,Modal , Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import rate from '../../images/rate.png'
import { useState } from 'react';

const RateItem = ({e}) => {

    return (
        <div>



            <Row className="mt-3">
                <Col className="d-felx me-5" style={{display:"flex" , justifyContent:"space-between" ,alignItems:"center"}}>
                    <div className='box'>
                        <div className="rate-name  d-inline ms-2">{e.user &&e.user.name}
                        </div>
                        <img className="" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">{e.rating}</div>
                    </div>

                    
                </Col>
            </Row>
            <Row className="border-bottom mx-2">
                <Col className="d-felx me-4 pb-2">
                    <div className="rate-description  d-inline ms-2">
                        {e.review}
                    </div>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    )
}

export default RateItem
