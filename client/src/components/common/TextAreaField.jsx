import React from "react";
import { Form, Col } from "react-bootstrap";

const TextAreaField = ({
  placeholder,
  info,
  onChange
}) => {
  return (
    <Form.Group controlId="exampleForm.ControlTextarea1" as={Col}>
      <Form.Control 
        as="textarea" 
        rows="3"
        placeholder={placeholder} 
      />
      {info && <small className="form-text text-muted">{info}</small>}
    </Form.Group>
  );
};

export default TextAreaField;
