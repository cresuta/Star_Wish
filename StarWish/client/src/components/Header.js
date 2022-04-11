import React, { useContext } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProfileContext } from "../providers/UserProfileProvider";
import { useNavigate } from "react-router-dom";

export default function Header() {

  const {logout} = useContext(UserProfileContext);
  const navigate = useNavigate();
  const signOut = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Welcome back, Cameron!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="navbar-rightside" id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="My StarWish" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Dashboard</NavDropdown.Item>
              <NavDropdown.Item href="/wishlists">
               Wish Lists
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={signOut}>
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>

            <i class="bi bi-cart2" id="shopping-cart"></i>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
