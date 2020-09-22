import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./SearchedMovies.module.css";
import { Link, useParams } from "react-router-dom";

const SearchedMovies = () => {
  const [movies, setMovies] = useState([]);

  const { search } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie/?api_key=b9d43aa594df2e831c5361253949ea0e&language=en-US&query=${search}&page=1&include_adult=false`
      );
      const movieList = await res.data.results;
      movieList.map(
        (movie) =>
          (movie.posterImg =
            "https://image.tmdb.org/t/p/w500/" + movie.poster_path)
      );
      setMovies(movieList);
    };
    getMovies();
  }, [search]);

  const renderMovies = movies.map((movie) => (
    <Link
      to={`/movie/${movie.id}`}
      key={movie.id}
      style={{ textDecoration: "none" }}
    >
      <div className={styles.movie}>
        {movie.poster_path !== null ? (
          <img src={movie.posterImg} alt="movie poster" />
        ) : (
          <p>No Poster</p>
        )}
        <p className={styles.title}>{movie.title}</p>
        <p className={styles.year}>{movie.release_date?.slice(0, 4)}</p>
      </div>
    </Link>
  ));

  const noMovies = <h1>No Movies Found</h1>;

  return (
    <div className={styles.container}>
      <div className={styles.movieList}>
        <h2>Searched Movies : {search}</h2>
        <div className={styles.movies}>
          {renderMovies.length ? renderMovies : noMovies}
        </div>
      </div>
    </div>
  );
};

export default SearchedMovies;
