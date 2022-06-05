import styled from "styled-components";

// page wrapper
export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: 0.5s ease-in;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 1rem;
  }
`;

// content wrapper (non-nav)
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
