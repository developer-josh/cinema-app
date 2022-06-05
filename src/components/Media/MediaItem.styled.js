import styled from "styled-components";

export const MediaItemWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 210px;
  height: fit-content;
`;

export const MediaItemCover = styled.div`
  background: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 120px;
  border-radius: 8px;
`;

export const MediaItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 0.25rem;
  padding-bottom: 0.5rem;
`;

export const MediaItemMetadata = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: fit-content;
  height: fit-content;
  opacity: 0.75;
`;
