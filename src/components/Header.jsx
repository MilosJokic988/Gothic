import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'
const Header=()=>{

    return(
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold gothic-font">
            GothicSite
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/gallery">Galery</Nav.Link>
              <Nav.Link as={Link} to="/mysticism">Mysticism</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    );
};

export default Header