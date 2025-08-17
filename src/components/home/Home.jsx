import React from "react";
import styles from "./Home.module.scss";
import avatar from "./../../assets/images/avatar.webp";
import { ReactComponent as BackgroundSvg } from "./../../assets/images/hero-devices.svg";
import MainButton from "./../mainButton/MainButton";

export default function Home({ onContactClick }) {
  return (
    <section className={styles.main}>
      <section className={styles.contentDiv}>
        <h1 className={styles.homeHeader}>
          HEY, I'M <br className={styles.headerBreak} />
          <span className={styles.name}>GOR HOVEYAN</span>.
        </h1>
        <p className={styles.content}>
          A Front-End focused software engineer specializing in building{" "}
          Websites and Web Applications that leads to success of overall
          product.
        </p>
      </section>
      <div className={styles.avatarContainer}>
        <img className={styles.avatar} alt="avatar" src={avatar} />
      </div>
      <MainButton onContactClick={onContactClick} />
      <BackgroundSvg
        className={styles.background}
        alt="bg"
        src="https://mattfarley.ca/img/hero-devices.svg"
      />
    </section>
  );
}
