import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [movieCasts, setMovieCasts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b9d43aa594df2e831c5361253949ea0e`
      )
      .then((res) => {
        const newMovie = res.data;
        newMovie.posterImg =
          "https://image.tmdb.org/t/p/w500/" + newMovie.poster_path;
        setMovie(newMovie);
        return axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=b9d43aa594df2e831c5361253949ea0e`
        );
      })
      .then((res) => {
        setMovieCasts(res.data.cast.slice(0, 3));
      });
  }, [id]);

  const casts = movieCasts.map((cast) => cast.character).join(", ");

  return (
    <div className={styles.movieDetails}>
      <img src={movie.posterImg} alt="movie poster" />
      <div className={styles.details}>
        <h1>{movie.title}</h1>
        <div className={styles.content}>
          <p>Rating : {movie.vote_average}</p>
        </div>
        <div className={styles.content}>
          <p>Synopsis :</p>
          <p>{movie.overview}</p>
        </div>
        <div className={styles.content}>
          <p>Casts :</p>
          <p>{movieCasts && casts}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
