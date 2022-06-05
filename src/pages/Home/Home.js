import React, { useEffect, useState } from "react";
import { Wrapper, Content } from "./Home.styled";
import Nav from "../../components/Nav/Nav";
import SearchBar from "../../components/SearchBar/SearchBar";
import Trending from "../../components/Trending/Trending";
import MediaGrid from "../../components/Media/MediaGrid";
import data from "../../db/data.json";

function Home() {
  const [trendingArray, setTrendingArray] = useState([]);
  const [bookmarkedArray, setBookmarkedArray] = useState([]);

  // when page loads, manipulate data and split into seperate arrays
  // which will be saved in browser memory, reducing calls to server.
  useEffect(() => {
    async function fetchData() {
      let array1 = []; // trending
      let array2 = []; // bookmarked
      await data.forEach((entry) => {
        // trending array
        if (entry.isTrending) {
          array1.push(entry);
        }
        // bookmarks array
        else if (entry.isBookmarked) {
          array2.push(entry);
        }
      });
      // update state arrays
      setTrendingArray(array1);
      setBookmarkedArray(array2);
    }
    fetchData();
  }, []);

  // render element
  return (
    <Wrapper>
      <Nav />
      <Content>
        <SearchBar placeholder="Search for movies or TV series" data={data} />
        <Trending data={trendingArray} heading="Trending" />
        {/* Bookmarked */}
        <MediaGrid data={bookmarkedArray} heading="Bookmarked" />
        {/* All Data */}
        <MediaGrid data={data} heading="Suggested for you" />
      </Content>
    </Wrapper>
  );
}

export default Home;
