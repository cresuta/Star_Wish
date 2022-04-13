import React, { useContext, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProfileContext } from "../providers/UserProfileProvider";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../providers/ProductProvider";

export default function Header() {

  const currentUser = JSON.parse(sessionStorage.getItem("userProfile"));
  const { logout, isLoggedIn } = useContext(UserProfileContext);

  let { cartCount } = useContext(ProductContext);

  const navigate = useNavigate();
  const signOut = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
  };

  // we only want to display the header if the user is logged in and in the dashboard and we do NOT want this to display on login/register pages
  if (isLoggedIn) {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            Welcome back, <span>{currentUser.firstName}</span>!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="navbar-rightside" id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="My StarWish" id="basic-nav-dropdown">
                <NavDropdown.Item href="/">Dashboard</NavDropdown.Item>
                <NavDropdown.Item href="/wishlists">
                  Wish Lists
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={signOut}>Sign Out</NavDropdown.Item>
              </NavDropdown>

              <a
                id="shopping-cart"
                href="#"
                aria-label="View your shopping cart"
              >
                <i class="bi bi-cart"></i>
                <span class="cart-basket-count d-flex align-items-center justify-content-center">
                  {cartCount}
                </span>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
