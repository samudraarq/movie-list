import React from "react";
import styles from "./MovieList.module.css";

const MovieList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.movieList}>
        <h2>Movie List :</h2>
        <div className={styles.movies}>
          <div className={styles.movie}>
            <img src="https://picsum.photos/300/500" alt="movie poster" />
            <p className={styles.title}>The Avengers : Infinity War</p>
            <p className={styles.year}>2012</p>
          </div>
          <div className={styles.movie}>
            <img src="https://picsum.photos/300/500" alt="movie poster" />
            <p className={styles.title}>The Avengers</p>
            <p className={styles.year}>2012</p>
          </div>
          <div className={styles.movie}>
            <img src="https://picsum.photos/300/500" alt="movie poster" />
            <p className={styles.title}>The Avengers</p>
            <p className={styles.year}>2012</p>
          </div>
          <div className={styles.movie}>
            <img src="https://picsum.photos/300/500" alt="movie poster" />
            <p className={styles.title}>The Avengers</p>
            <p className={styles.year}>2012</p>
          </div>
          <div className={styles.movie}>
            <img src="https://picsum.photos/300/500" alt="movie poster" />
            <p className={styles.title}>The Avengers</p>
            <p className={styles.year}>2012</p>
          </div>
          <div className={styles.movie}>
            <img src="https://picsum.photos/300/500" alt="movie poster" />
            <p className={styles.title}>The Avengers</p>
            <p className={styles.year}>2012</p>
          </div>
          <div className={styles.movie}>
            <img src="https://picsum.photos/300/500" alt="movie poster" />
            <p className={styles.title}>The Avengers</p>
            <p className={styles.year}>2012</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
