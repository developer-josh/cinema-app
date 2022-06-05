import styled from "styled-components";

// top level wrapper
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  margin-top: 3rem;
  gap: 1rem;
`;

// overflow node purely for infinite scrolling
export const OverflowWrapper = styled.div`
  width: 100%;
  height: fit-content;
  overflow: auto;
`;

// row wrapper (child of OverflowWrapper)
export const StyledMediaGrid = styled.div`
  display: inline-flex;
  flex-direction: row;
  gap: 1rem;
`;
