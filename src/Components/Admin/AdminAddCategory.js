import React from "react";
import { Col, Row } from "react-bootstrap";
import H_AddCategory from "../../hook/H_Category/H_AddCategory";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminAddCategory = () => {
  const [name, setname, ImgPreview, handleSub, handleImg] = H_AddCategory();

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره التصنيف</div>
          <label htmlFor="con">  <img src={ImgPreview} alt="" height="100px" width="120px" /></label>

          <input  onChange={handleImg}  type="file"  id="con"  style={{ position: "absolute", zIndex: "0", opacity: "0" }}/>

          <input  value={name}  onChange={(e) => setname(e.target.value)}  type="text"  className="input-form d-block mt-3 px-3"  placeholder="اسم التصنيف"/>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handleSub}>
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminAddCategory;
