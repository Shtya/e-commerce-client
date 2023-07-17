import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import H_signup from "../../hook/Register/H_signup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const [setname, name, email, setemail, phone, setphone, pass,
    setpass, passconfirm, setpassconfirm, handleSub] = H_signup()
  
  return (
    <Container className="contain" >
      <Row className="py-5 d-flex justify-content-center hieght-search">
        <Col sm="12" className="d-flex flex-column " style={{justifyContent:"center"}}>
          <label className="mx-auto title-login">تسجيل حساب جديد</label>
          <input value={name} onChange={e=> setname(e.target.value)}
            placeholder="اسم المستخدم..."
            type="text"
            className="user-input mt-3 text-center mx-auto"
          />
          <input value={phone} onChange={e=> setphone(e.target.value)}
            placeholder="رقم الهاتف..."
            type="text"
            className="user-input my-3 text-center mx-auto"
          />
          <input value={email} onChange={e=> setemail(e.target.value)}
            placeholder="الايميل..."
            type="text"
            className="user-input mb-3 text-center mx-auto"
          />
          <input value={pass} onChange={e=> setpass(e.target.value)}
            placeholder="كلمه السر..."
            type="password"
            className="user-input y-3 text-center mx-auto"
          />
          <input value={passconfirm} onChange={e=> setpassconfirm(e.target.value)}
            placeholder="تأكيد كلمه السر..."
            type="password"
            className="user-input my-3 text-center mx-auto"
          />
          

          <button className="btn-login mx-auto mt-2" onClick={handleSub}>تسجيل الحساب</button>
          <label className="mx-auto my-1">
            لديك حساب بالفعل؟{" "}
            <Link to="/" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                اضغط هنا
              </span>
            </Link>
          </label>
        </Col>
      </Row>
      <ToastContainer/>
    </Container>
  );
};

export default RegisterPage;
