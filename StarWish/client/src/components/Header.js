import React, { useContext, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProfileContext } from "../providers/UserProfileProvider";
import { useNavigate } from "react-router-dom";

export default function Header() {

  const currentUser = JSON.parse(sessionStorage.getItem("userProfile"));
  const {logout} = useContext(UserProfileContext);
  const { isLoggedIn } = useContext(UserProfileContext);

  const navigate = useNavigate();
  const signOut = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
  }

  if (isLoggedIn) {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Welcome back, <span id="welcome-displayname">{currentUser.firstName}</span>!</Navbar.Brand>
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
  
}
