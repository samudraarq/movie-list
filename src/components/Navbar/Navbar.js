import React from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ bg }) => {
  return (
    <div className={`${styles.container} ${bg === "black" && styles.black}`}>
      <ul className={styles.navbar}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
