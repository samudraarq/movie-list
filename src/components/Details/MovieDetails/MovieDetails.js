import React from "react";
import styles from "./MovieDetails.module.css";

const MovieDetails = () => {
  return (
    <div className={styles.movieDetails}>
      <img src="https://picsum.photos/300/450" alt="movie poster" />
      <div className={styles.details}>
        <h1>The Avengers</h1>
        <div className={styles.content}>
          <p>Rating : 79</p>
        </div>
        <div className={styles.content}>
          <p>Synopsis :</p>
          <p>
            When an unexpected enemy emerges and threatens global safety and
            security, Nick Fury, director of the international peacekeeping
            agency known as S.H.I.E.L.D., finds himself in need of a team to
            pull the world back from the brink of disaster. Spanning the globe,
            a daring recruitment effort begins!
          </p>
        </div>
        <div className={styles.content}>
          <p>Casts :</p>
          <p>Robert Downey Jr., Chris Evans, Mark Ruffalo</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
