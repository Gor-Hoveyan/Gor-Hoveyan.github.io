import React, { forwardRef, useState } from "react";
import styles from "./Works.module.scss";
import quizPlatformImg from "./../../assets/images/quiz-platform.webp";
import minesweeperImg from "./../../assets/images/minesweeper.webp";
import radioTimeMachineImg from "./../../assets/images/radioTimeMachine.webp";
import cryptoImg from "./../../assets/images/crypto1.webp";
import ViewImage from "../viewImage/ViewImage";
import WorkItem from "../workItem/WorkItem";

const projects = [
  {
    name: "Quiz Platform",
    description: (
      <>
        Create, share, and take interactive quizzes. Built with React, Zustand,
        Express, and MongoDB. Features secure user authentication, an intuitive
        quiz builder (custom questions & answers), an engaging quiz-taking
        experience with instant scoring, and persistent storage for all created
        quizzes.
      </>
    ),
    gitHubUrl: "https://github.com/Gor-Hoveyan/react-quiz-platform",
    img: quizPlatformImg,
  },
  {
    name: "Radio Time Machine",
    description: (
      <>
        An interactive full-stack web app that lets you explore the most popular
        tracks from the 1700s to today. Built with Next.js 14, Tailwind CSS, and
        TypeScript, it fetches data from the{" "}
        <a
          className={styles.link}
          target="_blank"
          href="https://www.last.fm/api"
          rel="noreferrer"
        >
          Last.fm API
        </a>{" "}
        to deliver a clean, responsive experience for discovering music across
        centuries.
      </>
    ),
    img: radioTimeMachineImg,
    gitHubUrl: "https://github.com/Gor-Hoveyan/radio-time-machine",
    deploymentUrl: "https://radio-time-machine.vercel.app/",
  },
  {
    name: "Crypto Tracker",
    description: (
      <>
        A dynamic Front-End application built with React and Redux Toolkit that
        provides users with up-to-the-minute cryptocurrency information. It
        seamlessly fetches and displays live data including prices, market caps,
        and volume from the{" "}
        <a
          className={styles.link}
          rel="noreferrer"
          target="_blank"
          href="https://coincap.io/"
        >
          CoinCap API
        </a>
        , offering a clear overview of the crypto market.
      </>
    ),
    img: cryptoImg,
    gitHubUrl: "https://github.com/Gor-Hoveyan/crypto-list",
    deploymentUrl: "https://crypto-list-fawn.vercel.app/",
  },
  {
    name: "Minesweeper",
    description: (
      <>
        A faithful recreation on the beloved Minesweeper. Built with React and
        Tailwind, this project challenges players to use numerical clues to
        strategically uncover squares and avoid hidden mines on a grid. Features
        customizable grid sizes for tailored difficulty and game history to
        track your performance.
      </>
    ),
    img: minesweeperImg,
    gitHubUrl: "https://github.com/Gor-Hoveyan/minesweeper",
    deploymentUrl: "https://minesweeper-nine-tau.vercel.app/",
  },
];

const Works = forwardRef((props, ref) => {
  const [viewImage, setViewImage] = useState("");
  return (
    <section className={styles.main} ref={ref}>
      <h1 className={styles.worksHeader}>Recent Works</h1>
      <p className={styles.content}>
        A showcase of projects highlighting creativity and clean code.
      </p>
      <div className={styles.grid}>
        {projects.map((project) => (
          <WorkItem
            key={project.name}
            name={project.name}
            description={project.description}
            img={project.img}
            deploymentUrl={
              project.deploymentUrl ? project.deploymentUrl : undefined
            }
            gitHubUrl={project.gitHubUrl ? project.gitHubUrl : undefined}
            setViewImage={setViewImage}
          />
        ))}
      </div>
      {viewImage ? (
        <ViewImage setViewImage={setViewImage} src={viewImage} />
      ) : (
        ""
      )}
    </section>
  );
});

export default Works;
