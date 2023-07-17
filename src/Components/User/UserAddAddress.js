import React from "react";
import { Row, Col } from "react-bootstrap";
import H_Add_Address from './../../hook/H_Address/H_Add_Address';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserAddAddress = () => {
  const [ alias, setalias, details
    , setdetails, phone, setphone, city, setcity, postalCode, setpostalCode , handleSub] = H_Add_Address()
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-2">اضافة عنوان جديد</div>
        <Col sm="8" className="addAddress"> 
          <input value={alias} onChange={e=> setalias(e.target.value)}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="تسمية العنوان مثلا(المنزل - العمل)"
          />
          <input value={city} onChange={e=> setcity(e.target.value)}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="المدينه ..."
          />
          <input value={postalCode} onChange={e=> setpostalCode(e.target.value)}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="الرقم البريدي"
          />
          <textarea value={details} onChange={e=> setdetails(e.target.value)}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="العنوان بالتفصيل"
          />
          <input value={phone} onChange={e=> setphone(e.target.value)}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="رقم الهاتف"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handleSub}>اضافة عنوان</button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default UserAddAddress;
