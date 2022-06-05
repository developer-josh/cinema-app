import styled from "styled-components";

// default button style
export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 336px;
  height: 48px;
  border: none;
  background-color: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  cursor: pointer;
  transition: 0.15s linear;

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.background};
  }
`;
