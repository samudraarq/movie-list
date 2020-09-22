import React from "react";
import styles from "./ChangePage.module.css";

const ChangePage = ({ nextPage, prevPage, page }) => {
  return (
    <div className={styles.container}>
      <button onClick={prevPage}>prev</button>
      <p>{page}</p>
      <button onClick={nextPage}>next</button>
    </div>
  );
};

export default ChangePage;
