import React from "react";
import { Row, Col } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import add from "../../images/add.png";
import H_AddProduct from "../../hook/H_Product/H_AddProduct";
import { CompactPicker } from "react-color";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AdminAddProducts = () => {
  const [handleImg , ImgPreview , handleRemove  ,Name, setName, Des, setDes, PriceAfterDiscount, setPriceAfterDiscount, Price, setPrice
    , setCateID, setSubsID , setBrandID, quantity, setquantity, itemsCate, Subsitems, Brandload, itemsBrand,
    handleColors ,show, setShow ,color , setColor , handleSubmit
  ] = H_AddProduct();


  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
        <Col sm="8">
          <div className="text-form pb-2"> صور للمنتج</div>
          <input type="file" multiple onChange={handleImg} />
          {
            ImgPreview
              ? ImgPreview.map((e,index)=> <img className="ImgPrev" onClick={_=>handleRemove(e)} src={e} key={index} />)
              : null
          }
          <input value={Name} onChange={e=> setName(e.target.value)}  type="text"   className="input-form d-block mt-3 px-3"   placeholder="اسم المنتج" />
          
          <textarea value={Des} onChange={e=> setDes(e.target.value)} className="input-form-area p-2 mt-3"  rows="4"  cols="50"  placeholder="وصف المنتج"/>
          
          <input value={Price} onChange={e=> setPrice(e.target.value)} type="number"  className="input-form d-block mt-3 px-3"  placeholder="السعر قبل الخصم"/>

          <input value={PriceAfterDiscount} onChange={e=> setPriceAfterDiscount(e.target.value)} type="number"  className="input-form d-block mt-3 px-3"  placeholder="سعر المنتج" />
          
          <input value={quantity} onChange={e=> setquantity(e.target.value)} type="number"  className="input-form d-block mt-3 px-3"  placeholder="الكميه  "/>
          

          <select  name="category" onChange={e=> setCateID(e.target.value)}  className="select input-form-area mt-3 px-2 ">
            <option value="val">اختر التصنيف الرئيسي </option>
            {
              itemsCate ? itemsCate.map((e, index) => (<option key={index} value={e._id}> {e.name }</option> )) : <option value="val2">يتم التحميل </option>
            }
          </select>


          <select  name="Subcategory" onChange={e=> setSubsID(e.target.value)}  className="select input-form-area mt-3 px-2 ">
            <option value="val">اختر التصنيف الفرعي</option>
            {
              Subsitems ? Subsitems.map((e, index) => (<option key={index} value={e._id}> {e.name }</option> )) : <option value="val">يتم التحميل </option>
            }
          </select>



          <select  name="brand" onChange={e=> setBrandID(e.target.value)}    className="select input-form-area mt-3 px-2 ">
            <option value="val">اختر الماركة</option>
            {
              itemsBrand ? itemsBrand.map((e, index) => (<option key={index} value={e._id}> {e.name }</option> )) : <option value="val">يتم التحميل </option>
            }
          </select>


          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div className="mt-1 d-flex">
            {
              color.map((e,index)=> <div key={index} onClick={_=>setColor(color.filter(col => col !== e))} className="color ms-2 border  mt-1" style={{ backgroundColor: e}}></div> )
            }
            
            
            <img src={add} style={{width:"30px" ,height:"35px" , cursor:"pointer"}}  onClick={_=>setShow(!show)} />
            {show && <CompactPicker onChange={handleColors} />}
            </div>

        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handleSubmit}>حفظ التعديلات</button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminAddProducts;
