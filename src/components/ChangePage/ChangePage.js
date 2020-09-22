import React from "react";
import styles from "./ChangePage.module.css";

const ChangePage = ({ nextPage, prevPage, page, maxPage }) => {
  return (
    <div className={styles.container}>
      <button
        onClick={prevPage}
        className={styles.btn}
        disabled={page <= 1 ? true : false}
      >
        Prev
      </button>
      <p>{page}</p>
      <button
        onClick={nextPage}
        className={styles.btn}
        disabled={page >= maxPage ? true : false}
      >
        Next
      </button>
    </div>
  );
};

export default ChangePage;
