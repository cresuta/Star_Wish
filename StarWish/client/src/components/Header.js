import React, { useContext, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProfileContext } from "../providers/UserProfileProvider";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../providers/ProductProvider";
import { Link } from "react-router-dom";

export default function Header() {
  const currentUser = JSON.parse(sessionStorage.getItem("userProfile"));
  const { logout, isLoggedIn } = useContext(UserProfileContext);

  let { cartCount, setCartCount } = useContext(ProductContext);

  // these useEffects will make sure that the cart count does not reset to zero if the current user refreshes page or navigates back to dashboard
  useEffect(() => {
    setCartCount(JSON.parse(window.localStorage.getItem("cartCount")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cartCount", cartCount);
  }, [cartCount]);

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

              <Link to="#" id="shopping-cart">
                <i class="bi bi-cart"></i>
                <span class="cart-basket-count d-flex align-items-center justify-content-center">
                  {cartCount}
                </span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
