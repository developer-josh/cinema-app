import styled from "styled-components";

// parent wrapper
export const TrendingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  margin-top: 1.5rem;
`;

// specific for overflow scrolling
export const OverflowWrapper = styled.div`
  width: 100%;
  height: fit-content;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

// wraps trending row
export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  gap: 1.5rem;
`;
