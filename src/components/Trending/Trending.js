import React from "react";
import {
  TrendingWrapper,
  OverflowWrapper,
  RowWrapper,
} from "./Trending.styled";
import TrendingItem from "./TrendingItem";
import PropTypes from "prop-types";

// type validation
RowWrapper.propTypes = {
  data: PropTypes.array,
  heading: PropTypes.string,
};

// render element
function Trending({ data, heading }) {
  return (
    <TrendingWrapper>
      <h1>{heading}</h1>
      <OverflowWrapper>
        <RowWrapper>
          {/* maps through data prop and renders entries with provided data */}
          {data.map((entry) => {
            return (
              <TrendingItem
                key={entry.id}
                image={entry.thumbnail.trending.small}
                title={entry.title}
                year={entry.year}
                rating={entry.rating}
                type={entry.category}
              />
            );
          })}
        </RowWrapper>
      </OverflowWrapper>
    </TrendingWrapper>
  );
}

export default Trending;
