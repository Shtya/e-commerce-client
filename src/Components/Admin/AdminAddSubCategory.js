import React from "react";
import { Row, Col } from "react-bootstrap";
import H_AddSubCate from "../../hook/H_SubCate/H_AddSubCate";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AdminAddSubCategory = () => {
  const [name, setname, handleCateID, handleSub , CateAll , Cateload ] = H_AddSubCate()

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
        <Col sm="8">
          <input
            value={name} onChange={e=> setname(e.target.value)}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف الفرعي"
          />

          <select name="Category" onChange={handleCateID}  className="select mt-3 px-2 " >
          <option value="val" defaultChecked>اختر تصنيف </option>
            {
              Cateload === false
                ? CateAll.length >= 1
                  ? CateAll.map((e, index) => <option key={index} value={e._id}>{e.name }</option>)
                  : <option value="val">لا يوجد تصنيفات</option>
                : <option value="val">يتم تحميل التصنيفات</option>
            }
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handleSub}>حفظ التعديلات</button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminAddSubCategory;
