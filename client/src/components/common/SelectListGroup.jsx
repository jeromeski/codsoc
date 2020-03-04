import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Col, Form } from "react-bootstrap";

const SelectListGroup = ({
  name,
  value,
  error,
  onChange,
  info,
  controlId,
  options
}) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div>
      <Form.Group as={Col} controlId={controlId}>
        <Form.Control
          as="select"
          className={classnames({ "is-invalid": error })}
          name={name}
          value={value}
          onChange={onChange}
        >
          {selectOptions}
        </Form.Control>
        {info && <small className="form-text text-muted">{info}</small>}
      </Form.Group>
    </div>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  controlId: PropTypes.string,
  options: PropTypes.array.isRequired
};

export default SelectListGroup;
