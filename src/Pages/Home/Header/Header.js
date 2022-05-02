import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './Header.css';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark" sticky="top">
    <Container>
    <Navbar.Brand href="#home">RedX Warehouse</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
