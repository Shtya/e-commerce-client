import React, { useState } from "react";
import { Row, Col , Modal , Button } from "react-bootstrap";
import H_EditeProfile from "../../hook/H_profile/H_EditeProfile";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import H_EditePass from './../../hook/H_profile/H_EditePass';

const UserProfile = () => {
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("user")));
  const [name, setname, phone, setphone, email, setemail, handleData, setshowEdite, showEdite] = H_EditeProfile();
  
  const [password, setpassword, passwordConfirm, setpasswordConfirm, passwordCurrent, setpasswordCurrent , handlePassChange]  = H_EditePass()
  const [showPass , setshowPass] = useState(false)

  return (
    <div>

              <Modal show={showEdite}  onHide={_=> setshowEdite(!showEdite)}>
        <Modal.Header> <Modal.Title> <div className="font"> تعديل التفاصيل الشخصيه </div>{" "} </Modal.Title> </Modal.Header>
        <Modal.Body>

          <Col sm="8" ><input value={name} onChange={e=> setname(e.target.value)}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="الاسم الاول"
          />
          <input value={email} onChange={e=> setemail(e.target.value)}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="الايميل "
          />

          <input value={phone} onChange={e=> setphone(e.target.value)}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="رقم الهاتف"
          />
          </Col>

          
          </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={_=> setshowEdite(!showEdite)} >تراجع</Button>
          <Button className="font" variant="success" onClick={handleData} >تعديل</Button>
        </Modal.Footer>
      </Modal>

      <div className="admin-content-text ">الصفحه الشخصية</div>
      <div className="user-address-card my-3 px-2 profile ">
        <Row className="d-flex justify-content-between pt-2">
          <Col xs="6" className="d-flex">
            <div className="p-2">الاسم:</div>
            <div className="p-1 item-delete-edit">{user && user.name} </div>
          </Col>
          <Col xs="6" className="d-flex justify-content-end">
            <div className="d-flex mx-2 edit4" onClick={_=> setshowEdite(!showEdite)}>
              <i className="fa-solid fa-pen-to-square ms-3 mt-1" style={{color:"#aaa" , cursor:"pointer"}}></i>
              <p className="item-delete-edit"> تعديل</p>
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2">رقم الهاتف:</div>
            <div className="p-1 item-delete-edit">{user && user.phone} </div>
          </Col>
        </Row>

        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2">الايميل:</div>
            <div className="p-1 item-delete-edit">{user && user.email} </div>
          </Col>
        </Row>


        <Row className="mt-5">
          
          <Col xs="10" sm="8" md="6" className="">
            <div className="admin-content-text">تغير كملة المرور  {showPass === false && <i onClick={_=> setshowPass(!showPass)} className="fa-solid fa-circle-arrow-down"></i> }</div>

            {
              showPass &&
              <>
              <input value={passwordCurrent} onChange={e=> setpasswordCurrent(e.target.value)}
                type="password"
                className="input-form d-block mt-1 mb-3 px-3"
                placeholder="ادخل كلمة المرور القديمه"
              />
              <input value={password} onChange={e=> setpassword(e.target.value)}
                type="password"
                className="input-form d-block mt-1 px-3"
                placeholder="ادخل كلمة المرور "
              />
              <input value={passwordConfirm} onChange={e=> setpasswordConfirm(e.target.value)}
                type="password"
                className="input-form d-block mt-3 px-3"
                placeholder="ادخل  تأكيد كلمة المرور الجديده"
              />
              
              </>
            }
          </Col>
        </Row>

        {
          showPass &&
        <Row>
          <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
            <button className="btn-save d-inline mt-2 " onClick={handlePassChange}>حفظ كلمة السر</button>
          </Col>
        </Row>
          
          }

      </div>
      <ToastContainer />
    </div>
  );
};

export default UserProfile;
