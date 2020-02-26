import React, { Component } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" fixed='top'>
        <Container>
          <Navbar.Brand href="#home">Coders Society</Navbar.Brand>
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
                style={{ marginRight: "1rem", border: "solid 2px" }}>
                Register
              </Button>
              <Button
                variant="outline-light"
                size="sm"
                style={{ marginRight: "1rem", border: "solid 2px" }}>
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
