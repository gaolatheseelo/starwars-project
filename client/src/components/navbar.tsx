import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const swNavbar = () => {
 

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Star Wars Characters</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link eventKey={1} href="/">
              Home
            </Nav.Link>
            <Nav.Link eventKey={2} href="/search">
              Search
            </Nav.Link>
            <NavDropdown title="About" id="collasible-nav-dropdown">
              <NavDropdown.Item eventKey={3} href="/about">
                Star Wars Project
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={4} href="/contact">
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default swNavbar;
