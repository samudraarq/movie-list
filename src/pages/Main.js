import React from "react";
import Hero from "../components/Hero/Hero";
import MovieList from "../components/MovieList/MovieList";
import Navbar from "../components/Navbar/Navbar";

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
