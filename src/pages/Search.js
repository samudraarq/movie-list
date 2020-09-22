import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SearchedMovies from "../components/SearchedMovies/SearchedMovies";

const Search = () => {
  return (
    <div>
      <Navbar bg="black" />
      <SearchedMovies />
    </div>
  );
};

export default Search;
