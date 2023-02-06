import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './Links.css'
import logo from '../../images/logo.png'
import { faPhoneAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'

import { Link } from 'react-router-dom'


function Links() {
  return (
    <>
         <Navbar  bg="white" expand="lg" className='position-fixed w-100 navbarr shadow' >
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="MediTro" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto navbar-navv">
            <Nav.Link className='active' href="/">Home</Nav.Link>
            <NavDropdown  title="Pages" id="basic-nav-dropdown">
              <Link className='drop-link dropdown-item' to="/aboutus">About Us</Link>
              <Link  className='drop-link dropdown-item' to="/ourteam">Our Team</Link>
              <Link  className='drop-link dropdown-item' to="/faqs">FAQ'S</Link>
              <Link  className='drop-link dropdown-item' to="/booking">Booking</Link>
              <Link  className='drop-link dropdown-item' to="/error404">Error 404</Link>
              <Link className='drop-link dropdown-item' to="/login">Login / Register</Link>
            </NavDropdown>

            <Link className='nav-link' to="/services">Services</Link>

            <Link className='nav-link' to="/blogs">Blogs</Link>

            <Link className='nav-link' to="/contact-us">Contact Us</Link>

            <Link className='nav-link' to='/search'>
              <div className="search">
                <FontAwesomeIcon icon={faSearch}  />
              </div>
            </Link>

            <Link className='phone nav-link' to="https://api.whatsapp.com/send?phone=201060088542" target={'_blank'}> <FontAwesomeIcon icon={faPhoneAlt} />(+20) 1060088542</Link>

            <Link className='nav-link' to="/contact-us">
                    <button>Contact Us <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
            </Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Links