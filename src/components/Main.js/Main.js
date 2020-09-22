import React from "react";
import Hero from "./Hero/Hero";
import MovieList from "./MovieList/MovieList";
import Navbar from "../Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar bg="transparent" />
      <Hero />
      <MovieList query="movie/popular" title="Movie List" />
    </div>
  );
};

export default Main;
