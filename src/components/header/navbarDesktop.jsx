import React from 'react'
import "./style.scss";
import logo from '../../assets/images/logo.svg';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const NavbarDesktop = () => {
  return (
    <nav className='red-300 d-flex align-items-center'>
      <Container>
        <Nav>
          <Nav className="me-auto d-flex align-items-center ">
            <Navbar.Brand href="#home" className='margin-right-nav'><img src={logo} alt="blogr logo" /></Navbar.Brand>
            <NavDropdown title="Product" id="collapsible-nav-dropdown" className='font-size-16'>
              <NavDropdown.Item href="#action/3.1" className='font-size-16 hover_state'>Overview</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='font-size-16 hover_state'>
                Pricing
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='font-size-16 hover_state'>Marketplace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className='font-size-16 hover_state'>
              Features
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className='font-size-16 hover_state'>
              Integrations
              </NavDropdown.Item>
            </NavDropdown>     
            <NavDropdown title="Company" id="collapsible-nav-dropdown" className='font-size-16'>
              <NavDropdown.Item href="#action/3.1" className='font-size-16 hover_state'>About</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"  className='font-size-16 hover_state'>
              Team
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='font-size-16 hover_state'>Blog</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.4" className='font-size-16 hover_state'>
              Careers
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Connect" id="collapsible-nav-dropdown" className='font-size-16' >
              <NavDropdown.Item href="#action/3.1" className='font-size-16 hover_state'>Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='font-size-16 hover_state'>
              Newsletter
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='font-size-16 hover_state'>Linkedin</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='d-flex align-items-center'>
            <Nav.Link  href="#deets" className='font-size-16'>Login</Nav.Link>
            <Button variant='white-000' className='border-0 btn-sign_up'>
              Sign Up
            </Button>
          </Nav>
        </Nav>
      </Container>

    </nav>
  )
}
