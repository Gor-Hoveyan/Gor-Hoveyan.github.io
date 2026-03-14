import React from "react";
import styles from "./Header.module.scss";
import Container from "../container/Container";

export default function Header({
  onSkillsClick,
  onContactClick,
  onAboutClick,
  onWorksClick,
}) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={styles.main}>
      <Container className={styles.container}>
        <p onClick={() => scrollToTop()} className={styles.name}>
          Gor Hoveyan
        </p>
        <ul className={styles.list}>
          <li onClick={() => scrollToTop()} className={styles.link}>
            Home
          </li>
          <li onClick={() => onAboutClick()} className={styles.link}>
            About
          </li>
          <li onClick={() => onSkillsClick()} className={styles.link}>
            Skills
          </li>
          <li onClick={() => onWorksClick()} className={styles.link}>
            My Works
          </li>
          <li onClick={() => onContactClick()} className={styles.link}>
            Contact Me
          </li>
        </ul>
      </Container>
    </div>
  );
}
