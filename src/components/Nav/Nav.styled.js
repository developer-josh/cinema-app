import styled from "styled-components";

// required to edit properties on SVG elements
import SVG from "react-inlinesvg";

// wrapper
export const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.dark};
  transition: 1s linear;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    border-radius: 1rem;
  }
`;

// brand
export const Brand = styled.img`
  width: 25px;
  height: 20px;
`;

// icon menu
export const IconMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;

// individual menu icon
export const MenuItem = styled(SVG)`
  cursor: pointer;

  path {
    width: 16px;
    height: 16px;
    transition: 0.2s linear;
  }

  &:hover {
    path {
      fill: ${(props) => props.theme.colors.red};
    }
  }

  &:active {
    path {
      fill: ${(props) => props.theme.colors.white};
    }
  }
`;

// avatar
export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  cursor: pointer;
  border: ${(props) => `1px solid ${props.theme.colors.white}`};
`;
