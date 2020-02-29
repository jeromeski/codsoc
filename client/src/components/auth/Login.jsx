import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import classnames from "classnames";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { loginUser } from '../../redux/auth/auth.actions';

class Login extends Component {
  state = {
    email: "",
    password: "",
    isLoading: '',
    errors: {}
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if(nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }
  }

  handleTitleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = () => {
    const userData     = {
      email: this.state.email,
      password: this.state.password,
      isLoading: this.state.isLoading
    }
    this.props.loginUser(userData);
  };

  render() {
    const { email, password, errors, isLoading } = this.state;
    return (
      <div className="register">
        <Container className="h-100">
          <Row className="h-100">
            <Col></Col>
            <Col className="my-auto" lg={5} 
              style={{border: '2px solid lightgrey', padding: '2rem'}}>
              <Form onSubmit={this.handleFormSubmit}>
                <div className="text-center" style={{ marginBottom: "1rem" }}>
                  <h3 style={{ fontWeight: 700 }}>Sign in and stay updated.</h3>
                  <h5
                    style={{
                      paddingBottom: "1rem",
                      borderBottom: "solid 2px lightgrey"
                    }}>
                    Enter your email & password
                  </h5>
                </div>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    className={classnames({ "is-invalid": errors.email })}
                    name="email"
                    value={email}
                    type="email"
                    placeholder="Enter email"
                    onChange={this.handleTitleChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className={classnames({ "is-invalid": errors.password })}
                    name="password"
                    value={password}
                    type="password"
                    placeholder="Password"
                    onChange={this.handleTitleChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </Form.Group>
                <Button variant="success" type="submit">
                {isLoading ? 'Loading...' : "Submit"}
                </Button>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}


Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = ({auth, errors, isLoading}) => ({
  auth,
  errors,
  isLoading 
})

export default connect(mapStateToProps, {loginUser})(Login);
