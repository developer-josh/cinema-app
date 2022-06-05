import React from "react";
import theme from "../../theme";
import { Wrapper, Box, Palette, Swab, Headline } from "./Stylesheet.styled";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import SearchBar from "../../components/SearchBar/SearchBar";

// render element
function Stylesheet() {
  // if swab color matches body background, add border styles to seperate
  const borderStyles = `1px solid ${theme.colors.light}`;

  // render element
  return (
    <Wrapper>
      <Headline>Stylesheet</Headline>

      {/* Typography */}
      <Box sx={{ gap: "1rem" }}>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <p>Body1</p>
        <span>Body2</span>
      </Box>

      {/* Palette */}
      <Palette>
        <Swab sx={{ bgColor: theme.colors.red }} />
        <Swab
          sx={{
            bgColor: theme.colors.background,
            border: borderStyles,
          }}
        />
        <Swab sx={{ bgColor: theme.colors.light }} />
        <Swab
          sx={{
            bgColor: theme.colors.dark,
            border: borderStyles,
          }}
        />
        <Swab
          sx={{
            bgColor: theme.colors.white,
          }}
        />
      </Palette>

      {/* Input */}
      <Input placeholder="Email Address" />

      {/* Buttons */}
      <Button>Login to your account</Button>

      {/* Search Bar */}
      <SearchBar placeholder="Search for movies or TV series " />
    </Wrapper>
  );
}

export default Stylesheet;
