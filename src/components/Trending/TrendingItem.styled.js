import styled from "styled-components";

// entry wrapper
export const EntryWrapper = styled.div`
  width: 240px;
  height: 140px;
  position: relative;
`;

// entry image
export const CoverImage = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
`;

// entry details
export const Details = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding-bottom: 1rem;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
`;

// entry metadata
export const Metadata = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  opacity: 0.75;
`;
