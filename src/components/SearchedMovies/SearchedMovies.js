import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./SearchedMovies.module.css";
import { Link, useParams } from "react-router-dom";
import ChangePage from "../ChangePage/ChangePage";

const SearchedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  const { search } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie/?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${search}&page=${page}&include_adult=false`
      );
      const movieList = await res.data.results;
      const getMaxPage = await res.data.total_pages;
      movieList.map(
        (movie) =>
          (movie.posterImg =
            "https://image.tmdb.org/t/p/w500/" + movie.poster_path)
      );
      setMovies(movieList);
      setMaxPage(getMaxPage);
    };
    getMovies();
  }, [search, page]);

  const nextPageHandler = () => {
    const currentPage = page;
    console.log(maxPage);
    if (page < maxPage) {
      const nextPage = currentPage + 1;
      setPage(nextPage);
    }
  };

  const prevPageHandler = () => {
    const currentPage = page;
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setPage(prevPage);
    }
  };

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
          <p className={styles.notfound}>No Poster</p>
        )}
        <p className={styles.title}>{movie.title}</p>
        <p className={styles.year}>{movie.release_date?.slice(0, 4)}</p>
      </div>
    </Link>
  ));

  const noMovies = <h1>No Movies Found</h1>;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.movieList}>
          <h2>Searched Movies : {search}</h2>
          <div className={styles.movies}>
            {renderMovies.length ? renderMovies : noMovies}
          </div>
        </div>
      </div>
      <ChangePage
        nextPage={nextPageHandler}
        prevPage={prevPageHandler}
        page={page}
        maxPage={maxPage}
      />
    </>
  );
};

export default SearchedMovies;
