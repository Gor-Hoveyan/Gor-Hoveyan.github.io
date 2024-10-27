import React from "react";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <section className={styles.main}>
      <section className={styles.contentDiv}>
        <h1 className={styles.homeHeader}>HEY, I'M GOR HOVEYAN.</h1>
        <p className={styles.content}>
          A MERN stack focused software engineer specializing in building{" "}
          <span>Websites</span> and <span>Web Applications</span> that leeds to
          success of overall product.
        </p>
      </section>
      <img
        className={styles.avatar}
        alt="avatar"
        src="https://i.yapx.cc/X8wXw.png"
      />
      <img
        className={styles.background}
        alt="bg"
        src="https://mattfarley.ca/img/hero-devices.svg"
      />
    </section>
  );
}
