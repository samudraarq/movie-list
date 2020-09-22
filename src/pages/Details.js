import React from "react";
import { useParams } from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";
import Navbar from "../components/Navbar/Navbar";
import MovieDetails from "../components/MovieDetails/MovieDetails";

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
