import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown
} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const NavBar = ({ history }) => {
  return (
    /*
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>
          Coders Society
        </Navbar.Brand>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Navbar.Collapse id="mobile-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link eventKey={1} as={Link}>Developers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={2} as={Link} >Designers</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link eventKey={3}  as={Link} to="/register">
                Register
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={4} as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */

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
