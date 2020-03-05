import React, { Component } from "react";
import { Navbar, Container, Nav, Image, Dropdown } from "react-bootstrap";
import { NavLink, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/auth/auth.actions";
import { clearCurrentProfile } from "../../redux/profile/profile.actions";

class NavBar extends Component {
  onLogoutClick = () => {
    this.props.clearCurrentProfile();
    this.handleClick();
    this.props.logoutUser();
    this.props.history.push("/");
  };

  // To solve 'history', no-restricted-globals
  handleClick(path) {
    this.props.history.push(path);
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Nav className="d-none d-md-block">
        <Dropdown className="avatar-dropdown">
          <Dropdown.Toggle
            variant="secondary"
            style={{ backgroundColor: "transparent", border: "none" }}>
            <Image
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px", marginRight: ".5rem" }}
              title="You must have a Gravatar to display an image"
            />{" "}
            {<span className="h6">{user.name}</span>}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              as={Link}
              eventKey="1"
              to="/dashboard"
              style={{ textDecoration: "none", color: "black" }}>
              <i className="fa fa-tachometer icon" aria-hidden="true"></i>{" "}
              Dashboard
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              eventKey="2"
              to="/edit-profile"
              style={{ textDecoration: "none", color: "black" }}>
              <i className="fas fa-user icon" aria-hidden="true"></i> Edit
              Profile
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              eventKey="3"
              to="/add-experience"
              style={{ textDecoration: "none", color: "black" }}>
              <i className="fab fa-black-tie icon" aria-hidden="true"></i> Add
              Experience
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              eventKey="4"
              to="/add-education"
              style={{ textDecoration: "none", color: "black" }}>
              <i className="fas fa-graduation-cap icon" aria-hidden="true"></i>{" "}
              Add Education
            </Dropdown.Item>
            <Dropdown.Item eventKey="5" onClick={this.onLogoutClick}>
              <i className="fas fa-power-off icon" aria-hidden="true"></i>{" "}
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    );

    const guestLinks = (
      <Nav className="d-none d-md-block">
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
              {isAuthenticated ? (
                <Nav>
                  <Nav.Link
                    className="d-lg-none d-xs-block d-sm-block d-md-none"
                    to="/edit-profile">
                    <i className="fas fa-user icon" aria-hidden="true"></i>
                    Edit Profile
                  </Nav.Link>
                  <Nav.Link
                    className="d-lg-none d-xs-block d-sm-block d-md-none"
                    to="/add-experience">
                    <i className="fab fa-black-tie icon" aria-hidden="true"></i>
                    Add Experience
                  </Nav.Link>
                  <Nav.Link
                    className="d-lg-none d-xs-block d-sm-block d-md-none"
                    to="/add-education">
                    <i
                      className="fas fa-graduation-cap icon"
                      aria-hidden="true"></i>
                    Add Education
                  </Nav.Link>
                  <Nav.Link
                    className="d-lg-none d-xs-block d-sm-block d-md-none"
                    onClick={this.onLogoutClick}>
                    <i className="fas fa-power-off icon" aria-hidden="true"></i>
                    Logout
                  </Nav.Link>
                </Nav>
              ) : (
                <div className="d-lg-none d-xs-block d-sm-block d-md-none">
                  <Nav.Link
                    eventKey={1}
                    onSelect={() => console.log("NavItem Selected")}
                    onClick={() => this.handleClick("/register")}>
                    Register
                  </Nav.Link>{" "}
                  <span>or</span>{" "}
                  <Nav.Link
                    eventKey={2}
                    onSelect={() => console.log("NavItem Selected")}
                    onClick={() => this.handleClick("/login")}>
                    Login
                  </Nav.Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
          {isAuthenticated ? authLinks : guestLinks}
        </Container>
      </Navbar>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func,
  auth: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  withRouter(NavBar)
);
