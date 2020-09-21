import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./MovieList.module.css";

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
    Promise.all(
      movieList.map((movie, index) =>
        axios
          .get("https://image.tmdb.org/t/p/w500/" + movie.poster_path)
          .then((res) => (movieList[index].posterImg = res.config.url))
      )
    ).then((res) => {
      setMovies(movieList);
    });
  };

  const renderMovies = movies.map((movie) => (
    <div className={styles.movie} key={movie.id}>
      <img src={movie.posterImg} alt="movie poster" />
      <p className={styles.title}>{movie.title}</p>
      <p className={styles.year}>{movie.release_date.slice(0, 4)}</p>
    </div>
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
