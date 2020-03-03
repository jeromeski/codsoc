import React from "react";
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
// import FormCheckLabel from "react-bootstrap/FormCheckLabel";

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
  ariaDescribedby
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
          type={type}
          placeholder={placeholder}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedby}
        />
      </InputGroup>
    </FormGroup>
  );
};

export default SocialMediaInputField;
