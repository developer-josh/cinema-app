import React from "react";
import MediaItem from "./MediaItem";
import { Wrapper, OverflowWrapper, StyledMediaGrid } from "./MediaGrid.styled";
import PropTypes from "prop-types";

// type validation
Wrapper.propTypes = {
  heading: PropTypes.string,
  data: PropTypes.array,
};

// media block accepts data passed as an object, and renders
// element based on provided data. reusable everywhere.
function MediaGrid({ data, heading }) {
  return (
    <Wrapper>
      <h1>{heading}</h1>
      <OverflowWrapper>
        <StyledMediaGrid>
          {data.map((entry) => {
            return (
              <MediaItem
                key={entry.id}
                title={entry.title}
                image={entry.thumbnail.regular.medium}
                year={entry.year}
                rating={entry.rating}
                type={entry.category}
              />
            );
          })}
        </StyledMediaGrid>
      </OverflowWrapper>
    </Wrapper>
  );
}

export default MediaGrid;
