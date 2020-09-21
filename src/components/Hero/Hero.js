import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>Your Movie List</h1>
      <h2>It's Among Us</h2>
      <form>
        <input type="text" placeholder="Search a movie" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Hero;
