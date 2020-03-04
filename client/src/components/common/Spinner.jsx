import React from "react";
import { Spinner, Col } from "react-bootstrap";

const SpinnerComponent = () => {
  return (
    <Col
      className="h-100 d-flex align-content-center justify-content-center"
      style={{ marginTop: "50vh" }}>
      <div>
        <Spinner animation="grow" as="span" />
        <Spinner animation="grow" as="span" />
        <Spinner animation="grow" as="span" />
      </div>
    </Col>
  );
};

export default SpinnerComponent;
