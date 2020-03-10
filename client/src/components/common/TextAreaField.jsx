import React from "react";
import { Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextAreaField = ({
  name,
  value,
  placeholder,
  onChange,
  error,
  info,
  controlId
}) => {
  return (
    <Form.Group controlId={controlId} as={Col}>
      <Form.Control
        className={classnames({ "is-invalid": error })}
        as="textarea"
        rows="3"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        error={error}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </Form.Group>
  );
};

TextAreaField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  controlId: PropTypes.string
};

export default TextAreaField;
