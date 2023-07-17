import React, { useState } from "react";
import { Navbar, Container, FormControl, Nav, Dropdown } from "react-bootstrap";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";
import H_GetCart from "../../hook/H_Cart/H_GetCart";
import H_AllProduct from './../../hook/H_Product/H_AllProduct';
const NavBarLogin = () => {
  const [keyword, setkeyword] = useState("")
  const [All_items_Prod, All_load_Prod, numberOfPages, countPage] = H_AllProduct(keyword)
  

  const [itemsCart, countCart, totalPrice, Cartload] = H_GetCart();
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("user")))
  const logout = () => {
    localStorage.removeItem("user")
    window.location.href = ("/")
  }

  return (
    <Navbar className=" Nav sticky-top" bg="dark" variant="dark" expand="sm">
      <Container className="Nav1"> 
        <Navbar.Brand>
          <a href="/home">
            <img src={logo} className="logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            onChange={e => setkeyword(e.target.value)}
            value={keyword}
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">

            {
              user !== null ?
                 <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">{user.name}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {
                      user.role === "user"
                        ? <Dropdown.Item href="/user/profile">الصفحة الشخصيه</Dropdown.Item>
                        : <Dropdown.Item href="/admin/allproducts">اداره الصفحه </Dropdown.Item>
                  }
                  <Dropdown.Item onClick={logout}> تسجيل الخروج</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                
                
                :<Nav.Link  href="/"  className="nav-text d-flex mt-3 justify-content-center">
                <img src={login} className="login-img" alt="sfvs" />
                <p style={{ color: "white" }}>دخول</p>
                  </Nav.Link>
            }
              
            


            

            <Nav.Link  href="/cart"  className="position-relative nav-text d-flex mt-3 justify-content-center"  style={{ color: "white" }}>
              <img src={cart} className="login-img" alt="sfvs" />
              <p style={{ color: "white" }}>العربه</p>
              <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">{countCart&& countCart}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
