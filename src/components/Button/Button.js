import React from "react";
import { StyledButton } from "./Button.styled";
import PropTypes from "prop-types";

// type validation
StyledButton.propTypes = {
  children: PropTypes.node,
};

// render element
function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
