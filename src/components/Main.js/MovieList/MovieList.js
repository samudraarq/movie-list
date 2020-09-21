import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./MovieList.module.css";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=b9d43aa594df2e831c5361253949ea0e`
    );
    const movieList = await res.data.results.slice(0, 7);
    movieList.map(
      (movie) =>
        (movie.posterImg =
          "https://image.tmdb.org/t/p/w500/" + movie.poster_path)
    );
    setMovies(movieList);
  };

  const renderMovies = movies.map((movie) => (
    <Link
      to={`/movie/${movie.id}`}
      key={movie.id}
      style={{ textDecoration: "none" }}
    >
      <div className={styles.movie}>
        <img src={movie.posterImg} alt="movie poster" />
        <p className={styles.title}>{movie.title}</p>
        <p className={styles.year}>{movie.release_date.slice(0, 4)}</p>
      </div>
    </Link>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.movieList}>
        <h2>Movie List :</h2>
        <div className={styles.movies}>{renderMovies}</div>
      </div>
    </div>
  );
};

export default MovieList;
