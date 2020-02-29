import React from "react";
import {
  Navbar,
  Container,
  Nav
} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const NavBar = ({ history }) => {
  return (

    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed='top'>
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
          CodersSociety
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>Developers</Nav.Link>
            <Nav.Link>Designers</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
