import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { withRouter } from "react-router";

const Landing = ({history}) => {
  return (
    <div className="masthead">
      <Container className="h-100">
        <Row className="align-items-center justify-content-center text-center h-100">
          <Col className="my-auto heading__primary" sm={12}>
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
              onClick={() => history.push("./register")}>
              Sign up
            </Button>
            <Button variant="light" onClick={() => history.push("./login")}>
              Log in
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(Landing);
