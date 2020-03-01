import React, { Component } from "react";
import { Container, Row, Col, Form, Button, Spinner, Card } from "react-bootstrap";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../redux/auth/auth.actions";
import ReactTimeout from "react-timeout";

class Login extends Component {
  state = {
    email: "",
    password: "",
    isLoading: "",
    errors: {}
  };

  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

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
  }

  handleTitleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
      isLoading: this.state.isLoading
    };
    this.props.loginUser(userData);
  };

  render() {
    const { email, password, errors, isLoading } = this.state;
    return (
      <div className="register">
        <Container 
          className="h-100">
          <Row className="h-25 align-items-end">
            <Col
              className="text-center"
              // style={{ marginBottom: 0, marginTop: "20%" }}
              >
              <h2 style={{ fontWeight: 700 }}>Sign in and stay updated</h2>
              <h4 className='mb-0'>Enter your email & password</h4>
            </Col>
          </Row>
          <Row className="h-75 align-items-start">
            <Col></Col>
            <Col md={4}>
              <Card bg='light'
                style={{marginTop: '2rem'}}
              >
                <Form
                  className="border border-secondary"
                  onSubmit={this.handleFormSubmit}
                  autoComplete="off"
                  style={{
                    padding: "2rem 1rem 1rem 1rem"
                  }}>
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
                        "Submit"
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth, errors, isLoading }) => ({
  auth,
  errors,
  isLoading
});

export default connect(mapStateToProps, { loginUser })(ReactTimeout(Login));
