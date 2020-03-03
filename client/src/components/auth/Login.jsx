import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Card
} from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../redux/auth/auth.actions";
import ReactTimeout from "react-timeout";
import TextInputField from "../common/TextInputField";

class Login extends Component {
  state = {
    email: "",
    password: "",
    isLoading: "",
    errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
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
      }, 1000);
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
        <Container className="h-100">
          <Row className="h-100 align-items-center justify-content-center">
            <Col
              className="text-center"
            >
              <h2 className="font-weight-bolder">
                Sign in and stay updated
              </h2>
              <h4 className="mb-4">Enter your email & password</h4>
              <Card
                className="border border-secondary"
                bg="light"
                as={Col}
                xs={12}
                md={{ span: 6, offset: 3 }}
                lg={{ span: 4, offset: 4 }}>
                <Form
                  onSubmit={this.handleFormSubmit}
                  autoComplete="off"
                  style={{
                    padding: "2rem 0 1rem 0"
                  }}>
                  <TextInputField
                  controlId='formBasicEmail'
                  name='email'
                  value={email}
                  type='text'
                  placeholder='Enter Email'
                  onChange={this.handleTitleChange}
                  error={errors.email}
                  />
                  <TextInputField
                  controlId='formBasicPassword2'
                  name='password'
                  value={password}
                  type='password'
                  placeholder='Password'
                  onChange={this.handleTitleChange}
                  error={errors.password}
                  />
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
