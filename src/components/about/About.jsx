import React from "react";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
      <h1 className={styles.header}>
        I'm looking forward to working with you.
      </h1>
      <section className={styles.content}>
        I am a success-oriented web developer from Armenia. I enjoy creating
        efficient and user-friendly full-stack applications using{" "}
        <strong style={{ color: "#5BE9B9" }}>React/Next.js</strong> for
        front-end and <strong style={{ color: "#5BE9B9" }}>Node.js</strong> for
        back-end. I'm always up for a new challenge, excited to tackle complex
        problems and continue expanding my skills in web development.
      </section>
      <section className={styles.skills}>
        <h1 className={styles.header}>Skills</h1>
        <section className={styles.skillsSection}>
          <span>HTML</span>
          <span>CSS</span>
          <span>SASS/SCSS</span>
          <span>Tailwind</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>Redux</span>
          <span>Zustand</span>
          <span>Next.js</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>Rest API</span>
          <span>MongoDB</span>
          <span>MySQL</span>
        </section>
      </section>
    </section>
  );
}
