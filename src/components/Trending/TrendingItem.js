import React from "react";
import {
  CoverImage,
  Details,
  EntryWrapper,
  Metadata,
} from "./TrendingItem.styled";
import PropTypes from "prop-types";

// type validation
Metadata.propTypes = {
  year: PropTypes.string,
  type: PropTypes.string,
  rating: PropTypes.string,
  title: PropTypes.string,
};

// accepts media info details such as title, year, etc and displays a styled
// component card. can be manipulated and reused globally.
function TrendingItem({ title, image, year, type, rating }) {
  return (
    <EntryWrapper>
      <CoverImage image={image} />
      <Details>
        <Metadata>
          <p>{year}</p>
          <p>{type}</p>
          <p>{rating}</p>
        </Metadata>
        <h4>{title}</h4>
      </Details>
    </EntryWrapper>
  );
}

export default TrendingItem;
