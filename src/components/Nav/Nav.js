import React from "react";
import { Wrapper, Brand, Avatar, IconMenu, MenuItem } from "./Nav.styled";
import Logo from "../../assets/logo.svg";
import HomeIcon from "../../assets/icon-nav-home.svg";
import MovieIcon from "../../assets/icon-nav-movies.svg";
import TvShowIcon from "../../assets/icon-nav-tv-series.svg";
import BookmarkIcon from "../../assets/icon-nav-bookmark.svg";
import avatarImage from "../../assets/image-avatar.png";

// render element
function Nav() {
  return (
    <Wrapper>
      <Brand src={Logo} alt="brand" />
      <IconMenu>
        <MenuItem src={HomeIcon} alt="dashboard" />
        <MenuItem src={MovieIcon} alt="dashboard" />
        <MenuItem src={TvShowIcon} alt="dashboard" />
        <MenuItem src={BookmarkIcon} alt="dashboard" />
      </IconMenu>
      <Avatar src={avatarImage} alt="avatar" />
    </Wrapper>
  );
}

export default Nav;
