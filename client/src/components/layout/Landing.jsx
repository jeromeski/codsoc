import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";

class Landing extends Component {

  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  // To solve 'history', no-restricted-globals
  handleLogin(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="masthead">
        <Container className="h-100">
          <Row className="h-100 align-items-center justify-content-center">
            <Col className='text-center'>
              <h1 className="text-light" style={{ fontSize: "4rem" }}>
                Coders Society
              </h1>
              <h3 className="text-light heading__secondary">
                {" "}
                Welcome to the professional community <br></br>
                of Developers and Designers{" "}
              </h3>
              <Button
                style={{ marginRight: ".5rem" }}
                onClick={ () => this.handleLogin('/register')}>
                Sign up
              </Button>
              <Button variant="light" onClick={ () => this.handleLogin('/login')}>
                Log in
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps=(state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Landing);
