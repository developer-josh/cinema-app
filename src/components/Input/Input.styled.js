import styled from "styled-components";

// base input styles
export const StyledInput = styled.input`
  width: 336px;
  height: 48px;
  background-color: transparent;
  border: none;
  border-bottom: ${(props) => `1px solid ${props.theme.colors.light}`};
  padding-left: 0.25rem;
  font-size: 15px;
  padding-bottom: 1rem;
  color: ${(props) => props.theme.colors.white};

  &::placeholder {
    color: ${(props) => props.theme.colors.light};
    line-height: 19px;
    opacity: 50%;
  }

  &:focus {
    outline: none;
    caret-color: ${(props) => props.theme.colors.red};
  }
`;
