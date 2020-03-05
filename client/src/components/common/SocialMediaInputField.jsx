import React from "react";
import PropTypes from 'prop-types'
import {
  InputGroup,
  Col,
  FormControl,
  FormGroup
} from "react-bootstrap";


const SocialMediaInputField = ({
  icon,
  id,
  type,
  placeholder,
  ariaLabel,
  ariaDescribedby,
  error,
  name
}) => {
  return (
    <FormGroup>
      <InputGroup as={Col}>
        <InputGroup.Prepend>
          <InputGroup.Text id={id}>
            <i className={`${icon}`}></i>
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          name={name}
          type={type}
          placeholder={placeholder}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedby}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </InputGroup>
    </FormGroup>
  );
};


SocialMediaInputField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string
};

export default SocialMediaInputField;
