import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ bg }) => {
  return (
    <div className={`${styles.container} ${bg === "black" && styles.black}`}>
      <ul className={styles.navbar}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
