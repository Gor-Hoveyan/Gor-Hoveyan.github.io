import React from "react";
import styles from "./Home.module.scss";
import avatar from "./../../assets/images/avatar.webp";
import { ReactComponent as BackgroundSvg } from "./../../assets/images/hero-devices.svg";
import { FiMessageCircle } from "react-icons/fi";

export default function Home({onContactClick}) {
  return (
    <section className={styles.main}>
      <section className={styles.contentDiv}>
        <h1 className={styles.homeHeader}>HEY, I'M GOR HOVEYAN.</h1>
        <p className={styles.content}>
          A Front-End focused software engineer specializing in building{" "}
          <span>Websites</span> and <span>Web Applications</span> that leads to
          success of overall product.
        </p>
      </section>
      <img className={styles.avatar} alt="avatar" src={avatar} />
      <button className={styles.btn} onClick={() => onContactClick()}>
        <FiMessageCircle />
        Get in Touch!
      </button>
      <BackgroundSvg
        className={styles.background}
        alt="bg"
        src="https://mattfarley.ca/img/hero-devices.svg"
      />
    </section>
  );
}
