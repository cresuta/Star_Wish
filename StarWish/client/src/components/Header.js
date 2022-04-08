import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
 
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { PersonCircle } from "react-bootstrap-icons";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Welcome back, Cameron!</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="navbar-rightside" id="basic-navbar-nav">
      <Nav className="me-auto">
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
       
        <i class="bi bi-cart2"></i>       
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}
