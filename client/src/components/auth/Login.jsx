import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import classnames from "classnames";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  handleTitleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    const currentUser = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("/api/users/login", currentUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  };

  render() {
    const { email, password, errors } = this.state;
    return (
      <div className="register">
        <Container className="h-100">
          <Row className="h-100">
            <Col></Col>
            <Col className="my-auto" xs={5} 
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
                  Submit
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

export default Login;
