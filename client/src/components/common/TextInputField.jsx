import React from "react";
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Col, Form } from "react-bootstrap";

const TextInputField = ({
  name,
  value,
  type,
  placeholder,
  onChange,
  error,
  info,
  controlId,
  disabled
}) => {
  return (
    <Form.Group 
      controlId={controlId} 
      as={Col}>
      <Form.Control
        autoComplete="nope"
        className={classnames({ "is-invalid": error })}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className='form-text text-muted'>{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </Form.Group>
  );
};

TextInputField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
  controlId: PropTypes.string
}

export default TextInputField;
