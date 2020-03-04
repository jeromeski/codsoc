import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Card
} from "react-bootstrap";
import { connect } from "react-redux";
import { registerUser } from "../../redux/auth/auth.actions";
import ReactTimeout from "react-timeout";
import TextInputField from "../common/TextInputField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    isLoading: "",
    errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

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
      }, 500);
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
          <Row className="h-100 align-items-center justify-content-center">
            <Col className="text-center">
              <h1 className="font-weight-bolder mb-0">Coders Society</h1>
              <h3 className="mb-3">Connect with the world's Developers</h3>
              <Card
                bg="light"
                className="border border-secondary"
                as={Col}
                xs={12}
                md={{ span: 6, offset: 3 }}
                lg={{ span: 4, offset: 4 }}>
                <Form
                  onSubmit={this.handleFormSubmit}
                  autoComplete="off"
                  style={{ padding: "2rem 0  1rem 0" }}>
                  <TextInputField
                    controlId="formBasicName"
                    name="name"
                    value={name}
                    type="text"
                    placeholder="Enter name"
                    onChange={this.handleTitleChange}
                    error={errors.name}
                  />
                  <TextInputField
                    controlId="formBasicEmail"
                    name="email"
                    value={email}
                    type="text"
                    placeholder="Enter email"
                    onChange={this.handleTitleChange}
                    error={errors.email}
                    info={"Gravatar images will be used as your avatar"}
                  />
                  <TextInputField
                    controlId="formBasicPassword"
                    name="password"
                    value={password}
                    type="password"
                    placeholder="Password"
                    onChange={this.handleTitleChange}
                    error={errors.password}
                  />
                  <TextInputField
                    controlId="formBasicPassword2"
                    name="password2"
                    value={password2}
                    type="password"
                    placeholder="Confirm password"
                    onChange={this.handleTitleChange}
                    error={errors.password2}
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
                  <span className='text-muted' >or Register with</span>
                  <Form.Group as={Col}
                   className='mt-0'
                  >
                    <Button
                      className='btn-block'
                      variant='danger'
                      style={{ padding: ".5rem 1rem", marginTop: "1rem" }}
                      >
                      <FontAwesomeIcon icon={["fab", "google"]} />
                      {' '}Google
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};

TextInputField.defaultProps = {
  type: "text"
};

const mapStateToProps = ({ auth, errors, isLoading }) => ({
  auth,
  errors,
  isLoading
});

export default connect(mapStateToProps, { registerUser })(
  withRouter(ReactTimeout(Register))
);
