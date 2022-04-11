import React from "react";
import { Navbar, Container, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <Navbar bg="light" variant="light" className="footer">
      <Col>
        <Container className="container">
          <Navbar.Brand
            href="https://github.com/cresuta/Star_Wish"
            target="_blank"
            className="footer-text"
          >
            <i class="bi bi-github github-icon"></i>Star Wish | 2022
          </Navbar.Brand>
        </Container>
      </Col>
    </Navbar>
  );
}
