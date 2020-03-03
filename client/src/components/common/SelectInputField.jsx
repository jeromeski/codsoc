import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Col, Form } from "react-bootstrap";

const SelectInputField = ({
  info,
  controlId,
  disabled,
  defaultValue
}) => {
  return (
    <div>
      <Form.Group as={Col} controlId={controlId}>
        <Form.Control as="select">
          <option value="0" defaultValue>Select Professional Status
          </option>
          <option value="Developer">Developer</option>
          <option value="Junior Developer">Junior Developer</option>
          <option value="Senior Developer">Senior Developer</option>
          <option value="Manager">Manager</option>
          <option value="Student or Learning">Student or Learning</option>
          <option value="Instructor">Instructor or Teacher</option>
          <option value="Intern">Intern</option>
          
        </Form.Control>
        {info && <small className="form-text text-muted">{info}</small>}
      </Form.Group>
    </div>
  );
};

SelectInputField.propTypes = {
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
  controlId: PropTypes.string
};

export default SelectInputField;
