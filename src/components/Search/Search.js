import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchedMovies from "./SearchedMovies/SearchedMovies";

const Search = () => {
  return (
    <div>
      <Navbar bg="black" />
      <SearchedMovies />
    </div>
  );
};

export default Search;
