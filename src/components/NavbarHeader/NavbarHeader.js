import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

function NavbarHeader() {

  const getdata = useSelector((state) => state.cartreducer.carts);
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const logout = () => {
    localStorage.removeItem("LOGIN_DETAILS");
    navigate("/login")
}
  // console.log("getdata", getdata)

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink className='navbrand' to="/">sneakers</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink  className='item' to="/">Collection</NavLink>
            <NavLink className='item' to="/men">Men</NavLink>
            <NavLink className='item' to="/women">Women</NavLink>
            <NavLink className='item' to="/about">About</NavLink>
            <NavLink className='item' to="/contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
        <div>
        <button className='btn-logout' onClick={logout}>LogOut</button>
        <Badge badgeContent={getdata.length} color="primary"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>
          {getdata.length ?
            <NavLink to={`/cart`}>
              <i className="fa-solid fa-cart-shopping" ></i>
            </NavLink> :
            <i className="fa-solid fa-cart-shopping"></i>
          }
        </Badge>
        </div>
      </Container>
    </Navbar>
    // <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    //     <div className="container-fluid">
    //         <a className="navbar-brand" href="#">sneakers</a>
    //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
    //             <span className="navbar-toggler-icon"></span>
    //         </button>
    //         <div className="collapse navbar-collapse" id="collapsibleNavbar">
    //             <ul className="navbar-nav">
    //                 <li className="nav-item">
    //                     <a className="nav-link" href="#">Collections</a>
    //                 </li>
    //                 <li className="nav-item">
    //                     <a className="nav-link" href="#">Men</a>
    //                 </li>
    //                 <li className="nav-item">
    //                     <a className="nav-link" href="#">Women</a>
    //                 </li>
    //                 <li className="nav-item">
    //                     <a className="nav-link" href="#">About</a>
    //                 </li>
    //                 <li className="nav-item">
    //                     <a className="nav-link" href="#">Contact</a>
    //                 </li>
    //             </ul>
    //         </div>
    //     </div>
    // </nav>
  )
};

export default NavbarHeader
