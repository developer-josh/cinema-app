import styled from "styled-components";

// wrapper
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 540px;
  width: 100%;
  height: 47px;
  position: relative;
`;

// search icon
export const StyledIcon = styled.img`
  padding-right: 1.5rem;
  width: fit-content;
  height: fit-content;
  margin: auto;
`;

// search bar input
export const StyledSearchBar = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  width: 100%;
  height: fit-content;
  color: ${(props) => props.theme.colors.white};
  font-size: 24px;
  line-height: 30.24px;
  caret-color: ${(props) => props.theme.colors.red};

  &:focus {
    outline: none;
    border-bottom: ${(props) => `1px solid ${props.theme.colors.light}`};
    padding-bottom: 1rem;
    transition: 0.15s linear;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.light};
    opacity: 50%;
  }
`;

// search results view
export const SearchResults = styled.ul`
  position: relative;
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  height: fit-content;
  max-height: 500px;
  overflow: auto;
  list-style: none;
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: ${(props) => `1px solid ${props.theme.colors.light}`};
  border-radius: 8px;
  margin-top: 1rem;
  z-index: 1000;
  opacity: ${(props) => (props.isVisible ? "100" : "0")};
`;

// each search result
export const SearchResultItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 100%;
  cursor: pointer;
  padding: 0.5rem;
  transition: 0.1s ease-in;
  border-radius: 8px;

  h4 {
    font-size: 120%;
  }

  #search-result-category {
    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.background};
    padding: 0.25rem;
    border-radius: 4px;
  }

  #search-result-rating {
    font-size: 0.75rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.light};

    #search-result-category {
      background-color: ${(props) => props.theme.colors.background};
      color: ${(props) => props.theme.colors.white};
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    justify-content: center;
    align-item: center;
    width: fit-content;
    margin: auto;
  }
`;
