import React from "react";
import { useParams } from "react-router-dom";
import MovieList from "../Main.js/MovieList/MovieList";
import Navbar from "../Navbar/Navbar";
import MovieDetails from "./MovieDetails/MovieDetails";

const Details = () => {
  const { id } = useParams();

  return (
    <div>
      <Navbar bg="black" />
      <MovieDetails />
      <MovieList query={`movie/${id}/similar`} title="Similar Movies" />
    </div>
  );
};

export default Details;
