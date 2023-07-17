import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserAddressCard from './UserAddressCard'
import H_Get_Address from '../../hook/H_Address/H_GetAddress';
import Loading from '../../util/Loading';

const UserAllAddress = () => {
    const [items_Addres, load_Address] = H_Get_Address()
    return (
        <div>
            <div className="admin-content-text pb-4">دفتر العنوانين</div>
            {
                load_Address === false
                    ? items_Addres && items_Addres.length >= 1
                        ? items_Addres.map((e,index)=> ( <UserAddressCard key={index} e={e} />))
                        : <h4 className='not'>لا يوجد عناوين حتي الان</h4>
                    : <Loading />
            }


            <Row className="justify-content-center">
                <Col sm="5" className="d-flex justify-content-center">
                    <Link to="/user/add-address" style={{ textDecoration: "none" }}>
                        <button className="btn-add-address" style={{whiteSpace:"nowrap" , fontSize:"20px"}}>اضافه عنوان جديد</button>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllAddress
