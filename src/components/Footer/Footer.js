import React from "react";
import {
  LinkedinFilled,
  GithubFilled,
  InstagramFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMed}>
        <a
          href="https://www.linkedin.com/in/samudra-faris-arqam/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkedinFilled />
        </a>
        <a
          href="https://github.com/samudraarq"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GithubFilled />
        </a>
        <a
          href="https://twitter.com/Samudra_Arq"
          rel="noopener noreferrer"
          target="_blank"
        >
          <TwitterOutlined />
        </a>
        <a
          href="https://www.instagram.com/samudra_arq/?hl=en"
          rel="noopener noreferrer"
          target="_blank"
        >
          <InstagramFilled />
        </a>
      </div>
      <p className={styles.copyright}>Samudra @ 2020</p>
    </footer>
  );
};

export default Footer;
