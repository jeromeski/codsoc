import React from "react";
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  InputGroup,
  Col,
  FormControl,
  FormGroup
} from "react-bootstrap";

library.add(far, fas, fab);

const SocialMediaInputField = ({
  far,
  fas,
  fab,
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
            <FontAwesomeIcon icon={icon} />
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
  icon: PropTypes.array,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string
};

export default SocialMediaInputField;
