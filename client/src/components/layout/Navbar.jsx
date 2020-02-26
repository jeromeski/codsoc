import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const NavBar = ({ history }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Coders Society
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link>Developers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Designers</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Button
              variant="outline-light"
              size="sm"
              style={{ marginRight: "1rem", border: "solid 1px" }}
              onClick={() => history.push("./register")}>
              Register
            </Button>
            <Button
              variant="outline-light"
              size="sm"
              style={{ marginRight: "1rem", border: "solid 1px" }}
              onClick={() => history.push("./login")}>
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withRouter(NavBar);
