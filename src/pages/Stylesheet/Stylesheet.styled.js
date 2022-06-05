import styled from "styled-components";
import PropTypes from "prop-types";

// parent wrapper
export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.white};
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 1rem;
  gap: 3rem;
  padding-bottom: 5rem;
`;

// headline
export const Headline = styled.h1`
  color: ${(props) => props.theme.colors.red};
  font-size: 4rem;
`;

// reusable flexbox
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.sx.gap};
  width: 100%;
  height: fit-content;
`;

// palette
export const Palette = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 0.5rem;
  max-width: 700px;
  width: 100%;
`;

// individual swab of color
export const Swab = styled.div`
  background-color: ${(props) => props.sx.bgColor};
  color: ${(props) => props.sx.color};
  border: ${(props) => props.sx.border};
  width: 100%;
  min-height: 50px;
  margin: auto;
`;

// typechecking
Box.propTypes = {
  sx: PropTypes.object,
};
