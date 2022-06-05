import React, { useState } from "react";
import {
  Wrapper,
  StyledIcon,
  StyledSearchBar,
  SearchResults,
  SearchResultItem,
} from "./SearchBar.styled";
import SearchIcon from "../../assets/icon-search.svg";
import PropTypes from "prop-types";

// type validation
StyledIcon.propTypes = {
  placeholder: PropTypes.string,
  children: PropTypes.node,
  data: PropTypes.array,
};

// render element
function SearchBar({ data, placeholder, children }) {
  const [inputText, setInputText] = useState("");

  // handle changes
  const handleChange = (e) => {
    let lowercase = e.target.value.toLowerCase();
    setInputText(lowercase);
  };

  // filters search results based on input text
  const filteredData = data.filter((el) => {
    if (inputText < 1) {
      return el;
    } else {
      return el.title.toLowerCase().includes(inputText);
    }
  });

  // render element
  return (
    <>
      <Wrapper>
        <StyledIcon src={SearchIcon} alt="search" />
        <StyledSearchBar
          placeholder={placeholder}
          type="search"
          name="q"
          required
          onChange={handleChange}
        >
          {children}
        </StyledSearchBar>
      </Wrapper>
      <SearchResults isVisible={inputText ? true : false}>
        {filteredData.map((item) => (
          <SearchResultItem key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.year}</p>
            <p id="search-result-category">{item.category}</p>
            <p id="search-result-rating">Rated {item.rating}</p>
          </SearchResultItem>
        ))}
      </SearchResults>
    </>
  );
}

export default SearchBar;
