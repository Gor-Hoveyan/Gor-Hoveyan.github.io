import React, { forwardRef } from "react";
import styles from "./Works.module.scss";
import quizPlatformImg from "./../../assets/images/quiz-platform.webp";
import minesweeperImg from "./../../assets/images/minesweeper.webp";
import radioTimeMachineImg from "./../../assets/images/radioTimeMachine.webp";
import firstCryptoImg from "./../../assets/images/crypto1.webp";
import { FaGithub, FaGlobe } from "react-icons/fa";

const Works = forwardRef((props, ref) => {
  return (
    <section className={styles.main} ref={ref}>
      <h1 className={styles.worksHeader}>Recent Works</h1>
      <p className={styles.content}>
        A showcase of projects highlighting creativity and clean code.
      </p>
      <div className={styles.grid}>
        <div className={styles.project}>
          <img
            src={quizPlatformImg}
            alt="Quiz platform"
            className={styles.projectImage}
          />
          <h1 className={styles.projectHeader}>Quiz Platform</h1>
          <p className={styles.projectDescription}>
            Create, share, and take interactive quizzes. Built with React,
            Zustand, Express, and MongoDB. Features secure user authentication,
            an intuitive quiz builder (custom questions & answers), an engaging
            quiz-taking experience with instant scoring, and persistent storage
            for all created quizzes.
          </p>
          <div className={styles.icons}>
            <a
              target="_blank"
              href="https://github.com/Gor-Hoveyan/react-quiz-platform"
            >
              <FaGithub />
            </a>
          </div>
        </div>{" "}
        <div className={styles.project}>
          <img
            alt="Radio Time Machine"
            src={radioTimeMachineImg}
            className={styles.projectImage}
          />
          <h1 className={styles.projectHeader}>Radio Time Machine</h1>
          <p className={styles.projectDescription}>
            An interactive full-stack web app that lets you explore the most
            popular tracks from the 1700s to today. Built with Next.js 14,
            Tailwind CSS, and TypeScript, it fetches data from the{" "}
            <a
              className={styles.link}
              target="_blank"
              href="https://www.last.fm/api"
            >
              Last.fm API
            </a>{" "}
            to deliver a clean, responsive experience for discovering music
            across centuries.
          </p>
          <div className={styles.icons}>
            <a
              target="_blank"
              href="https://github.com/Gor-Hoveyan/radio-time-machine"
            >
              <FaGithub />
            </a>
            <a target="_blank" href="https://radio-time-machine.vercel.app/">
              <FaGlobe />
            </a>
          </div>
        </div>{" "}
        <div className={styles.project}>
          <img
            alt="Crypto Tracker"
            src={firstCryptoImg}
            className={styles.projectImage}
          />
          <h1 className={styles.projectHeader}>Crypto Tracker</h1>
          <p className={styles.projectDescription}>
            A dynamic Front-End application built with React and Redux Toolkit
            that provides users with up-to-the-minute cryptocurrency
            information. It seamlessly fetches and displays live data including
            prices, market caps, and volume from the{" "}
            <a
              className={styles.link}
              target="_blank"
              href="https://coincap.io/"
            >
              CoinCap API
            </a>
            , offering a clear overview of the crypto market.
          </p>
          <div className={styles.icons}>
            <a
              target="_blank"
              href="https://github.com/Gor-Hoveyan/crypto-list"
            >
              <FaGithub />
            </a>
            <a target="_blank" href="https://crypto-list-fawn.vercel.app/">
              <FaGlobe />
            </a>
          </div>
        </div>
        <div className={styles.project}>
          <img
            src={minesweeperImg}
            alt="Minesweeper"
            className={styles.projectImage}
          />
          <h1 className={styles.projectHeader}>Minesweeper</h1>
          <p className={styles.projectDescription}>
            A faithful recreation on the beloved Minesweeper. Built with React
            and Tailwind, this project challenges players to use numerical clues
            to strategically uncover squares and avoid hidden mines on a grid.
            Features customizable grid sizes for tailored difficulty and game
            history to track your performance.
          </p>
          <div className={styles.icons}>
            <a
              target="_blank"
              href="https://github.com/Gor-Hoveyan/minesweeper"
            >
              <FaGithub />
            </a>
            <a target="_blank" href="https://minesweeper-nine-tau.vercel.app/">
              <FaGlobe />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Works;
