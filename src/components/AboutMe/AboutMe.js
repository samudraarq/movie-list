import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.content}>
        Sam is currently taking a Front-End class at Glints Academy batch 7,
        mainly focusing on ReactJs. Besides learning about ReactJs, he also
        learned the basics of React Native as the mobile apps and NodeJs with
        Express as the back end.
      </p>
    </div>
  );
};

export default AboutMe;
