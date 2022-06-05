import React from "react";
import {
  MediaItemCover,
  MediaItemDetails,
  MediaItemMetadata,
  MediaItemWrapper,
} from "./MediaItem.styled";
import PropTypes from "prop-types";

// type validation
MediaItemMetadata.propTypes = {
  year: PropTypes.string,
  type: PropTypes.string,
  rating: PropTypes.string,
  image: PropTypes.string,
};
MediaItemDetails.propTypes = {
  title: PropTypes.string,
};

// render element
function MediaItem({ image, year, type, rating, title }) {
  return (
    <MediaItemWrapper>
      <MediaItemCover image={image} />
      <MediaItemDetails>
        <MediaItemMetadata>
          <p>{year}</p>
          <p>{type}</p>
          <p>{rating}</p>
        </MediaItemMetadata>
        <h4>{title}</h4>
      </MediaItemDetails>
    </MediaItemWrapper>
  );
}

export default MediaItem;
