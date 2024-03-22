import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import "../index.css";
function NavBar()
{
    return (
    <div>
    <Navbar expand="lg" className="navbar shadow">
      <Container>
      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQqXlvGS2VEtQHHIMPDRrCSga-ALt3mYOi1Y-X6VId_6yI_ekw2vjhmiAuRjlCVp9F8NE&usqp=CAU" className="image" roundedCircle />
        <Navbar.Brand href="#home" className="navfont">Blood Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/signup" className="navsignup">Sign Up</Nav.Link>
            
            <NavDropdown title="Login"  className="navdrop">
              <NavDropdown.Item as={Link} to="donarlogin" className="navdropitems">Donar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="patientlogin" className="navdropitems">
                Patient
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="adminlogin" className="navdropitems">Admin</NavDropdown.Item>
              
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </div>
    );
}
export default NavBar;