import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

function NavbarHeader() {

  const getdata = useSelector((state) => state.cartreducer.carts);
  const navigate = useNavigate()
  const location = useLocation()

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const logout = () => {
    localStorage.removeItem("LOGIN_DETAILS");
    navigate("/login")
  }
  

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink className='navbrand' to="/">sneakers</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={`item ${location.pathname === "/" ? "active " : ""}`} to="/">Collection</NavLink>
            <NavLink className={`item ${location.pathname === "/men" ? "active " : ""}`} to="/men">Men</NavLink>
            <NavLink className={`item ${location.pathname === "/women" ? "active " : ""}`} to="/women">Women</NavLink>
            <NavLink className={`item ${location.pathname === "/about" ? "active " : ""}`} to="/about">About</NavLink>
            <NavLink className={`item ${location.pathname === "/contact" ? "active " : ""}`} to="/contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
        <div>
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
          <button className='btn-logout' onClick={logout}>LogOut</button>
        </div>
      </Container>
    </Navbar>
  )
};

export default NavbarHeader
