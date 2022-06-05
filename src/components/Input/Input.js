import React from "react";
import PropTypes from "prop-types";
import { StyledInput } from "./Input.styled";

// type validation
Input.propTypes = {
  placeholder: PropTypes.string,
  children: PropTypes.node,
};

// render element
function Input({ placeholder, children }) {
  return <StyledInput placeholder={placeholder}>{children}</StyledInput>;
}

export default Input;
