import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Container, Row, Col, Form, Button, Spinner, Card } from "react-bootstrap";
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../../redux/auth/auth.actions";
import ReactTimeout from "react-timeout";

// import LoadingButton from "../button/LoadingButton";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    isLoading: "",
    errors: {}
  };

  // static getDerivedStateFromProps(props, state) {
  //   if (props.errors !== state.props) {
  //     return {
  //       ...state,
  //       errors: props.errors,
  //       isLoading: props.isLoading
  //     }
  //   }
  //   return state
  // }

  UNSAFE_componentWillReceiveProps = nextProps => {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
        isLoading: nextProps.isLoading
      });
      nextProps.setTimeout(() => {
        this.setState({
          isLoading: false
        });
      }, 2000);
    }
  };

  handleTitleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      isLoading: this.state.isLoading
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { name, email, password, password2, errors, isLoading } = this.state;
    return (
      <div className="register">
        <Container className="h-100">
          <Row className="h-25">
            <Col
              className="text-center"
              style={{ marginBottom: 0, marginTop: "100px" }}>
              <h1 className="font-weight-bolder">Code Society</h1>
              <h3>Network with the world's coding professionals</h3>
            </Col>
          </Row>
          <Row className="h-75">
            <Col></Col>
            <Col className="my-top" md={4} style={{ paddingTop: "2rem" }}>
              <Card bg='light' className="border border-secondary">
                <Form
                  onSubmit={this.handleFormSubmit}
                  autoComplete="off"
                  style={{ padding: "2rem 1rem  1rem 1rem" }}>
                  <Form.Group controlId="formBasicName" as={Col}>
                    <Form.Control
                      className={classnames({ "is-invalid": errors.name })}
                      name="name"
                      value={name}
                      type="text"
                      placeholder="Enter name"
                      onChange={this.handleTitleChange}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail" as={Col}>
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
                  <Form.Group controlId="formBasicPassword" as={Col}>
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
                  <Form.Group controlId="formBasicPassword2" as={Col}>
                    <Form.Control
                      className={classnames({ "is-invalid": errors.password2 })}
                      name="password2"
                      value={password2}
                      type="password"
                      placeholder="Confirm password"
                      onChange={this.handleTitleChange}
                    />
                    {errors.password2 && (
                      <div className="invalid-feedback">{errors.password2}</div>
                    )}
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Button
                      className="btn-block"
                      variant="success"
                      type="submit"
                      style={{ padding: ".5rem 1rem", marginTop: "1rem" }}>
                      {isLoading ? (
                        <div>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                          &nbsp; &nbsp; Loading...
                        </div>
                      ) : (
                        "I agree to the Terms & Conditions"
                      )}
                    </Button>
                  </Form.Group>
                </Form>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
  // isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = ({ auth, errors, isLoading }) => ({
  auth,
  errors,
  isLoading
});

export default connect(mapStateToProps, { registerUser })(
  withRouter(ReactTimeout(Register))
);
