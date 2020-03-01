import React, { Component } from "react";
import { Navbar, Container, Nav, Image, Dropdown } from "react-bootstrap";
import { NavLink, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/auth/auth.actions";

class NavBar extends Component {
  onLogoutClick = () => {
    this.props.logoutUser();
    this.props.history.push("/");
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Nav className='d-none d-md-block'>
        <Nav.Link>
          <Dropdown >
            <Dropdown.Toggle variant='secondary'
              style={{backgroundColor: 'transparent', border: 'none'}}
            >
              <Image
                className="rounded-circle"
                src={user.avatar}
                alt={user.name}
                style={{ width: "25px", marginRight: "5px" }}
                title="You must have a Gravatar to display an image"
              />{' '}{' '}
              {user.name}
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-right">
              <Dropdown.Item eventKey="2">
                <span> </span>
                Settings
              </Dropdown.Item>
              <Dropdown.Item eventKey="3">Profile</Dropdown.Item>
              <Dropdown.Item eventKey="4" onClick={this.onLogoutClick}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Link>
      </Nav>
    );

    const guestLinks = (
      <Nav className='d-none d-md-block' >
        <Nav.Link as={Link} to="/register">
          Register
        </Nav.Link>
        <Nav.Link as={Link} to="/login">
          Login
        </Nav.Link>
      </Nav>
    );

    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            CodersSociety
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>Developers</Nav.Link>
              <Nav.Link>Designers</Nav.Link>
              {isAuthenticated && <Nav.Link>Logout</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
          {isAuthenticated ? authLinks : guestLinks}
        </Container>
      </Navbar>
    );
  }
}

Navbar.propTypes = {
  // logoutUser: PropTypes.func.isRequired,
  // auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(withRouter(NavBar));
