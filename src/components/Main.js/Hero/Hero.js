import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero = () => {
  const [searchTerms, setSearchTerms] = useState("");

  let history = useHistory();

  const changeHandler = (e) => {
    setSearchTerms(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/search/${searchTerms}`);
  };

  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1>Your Movie List</h1>
        <h2>It's Among Us</h2>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search a movie"
            onChange={changeHandler}
          />
          <button>Search</button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
