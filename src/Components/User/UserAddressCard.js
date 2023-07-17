import React , {useState} from "react";
import { Row, Col , Modal , Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import H_DeleteAddress from "../../hook/H_Address/H_DeleteAddress";
import H_EditeAddress from "../../hook/H_Address/H_EditeAddres";
import deleteicon from "../../images/delete.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserAddressCard = ({ e }) => {
  const [handleDelete, setshowDelete, showDelete] = H_DeleteAddress(e)
  const [alias, setalias, details
    , setdetails, phone, setphone, city, setcity, postalCode, setpostalCode , handleEdite , showEdite ,setshowEdite] = H_EditeAddress(e)
  

  return (
    <div className="user-address-card my-4 px-3" style={{ height: "auto" }}>
      
               {/* For Delete */}
               <Modal show={showDelete}  onHide={_=> setshowDelete(!showDelete)}>
        <Modal.Header> <Modal.Title> <div className="font"> تأكيد الحذف</div>{" "} </Modal.Title> </Modal.Header>
        <Modal.Body> <div className="font">هل انت متأكد من ازاله العنوان</div>{" "} </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={_=> setshowDelete(!showDelete)} >تراجع</Button>
          <Button className="font" variant="success" onClick={handleDelete} >حذف</Button>
        </Modal.Footer>
      </Modal>


               {/* For Edite */}
               <Modal show={showEdite}  onHide={_=> setshowEdite(!showEdite)}>
        <Modal.Header> <Modal.Title> <div className="font"> تعديل العنوان </div>{" "} </Modal.Title> </Modal.Header>
        <Modal.Body>

          <Col sm="8" ><input value={alias} onChange={e=> setalias(e.target.value)}
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

        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={_=> setshowEdite(!showEdite)} >تراجع</Button>
          <Button className="font" variant="success" onClick={handleEdite} >تعديل</Button>
        </Modal.Footer>
      </Modal>



      <Row className="d-flex justify-content-between  " > 
        <Col xs="12" className="d-flex"  style={{display:"flex" , justifyContent:"space-between" , alignItems:"center"}}>
          <div className="d-flex">

          <div style={{ color: "#555550", fontFamily: "Almarai", fontSize: "16px" }}  >  العنوان: </div>
          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
                fontSize: "16px",
                whiteSpace:"nowrap"
            }}
            className="mx-2"
          >
            {e.alias}
          </div>

          </div>


          <div className="d-flex p-2">
          <i style={{marginLeft:"20px" , cursor:"pointer"}} onClick={_=> setshowEdite(!showEdite)} className="fa-solid fa-pen-to-square"></i>
          <i  style={{ cursor:"pointer"}} onClick={_=> setshowDelete(!showDelete)} className="fa-solid fa-trash"></i>

          </div>
        </Col>

      </Row>

      <Row className="">
      <Col xs="12" className="d-flex" >
          <div style={{ color: "#555550", fontFamily: "Almarai", fontSize: "16px", }} > العنوان بالتفصيل : </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {e.details}
          </div>
        </Col>
      </Row>

      <Row className="mt-2 pb-2"  >
        <Col xs="12" className="d-flex" >
          <div style={{ color: "#555550", fontFamily: "Almarai", fontSize: "16px", }} > رقم الهاتف: </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {e.phone}
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default UserAddressCard;
