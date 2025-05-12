import React, { forwardRef } from "react";
import styles from "./Works.module.scss";
import { FaBitcoin, FaBomb } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";
import { MdQuiz } from "react-icons/md";
import quizPlatformImg from "./../../assets/images/quiz-platform.webp";
import minesweeperImg from "./../../assets/images/minesweeper.webp";
import firstCryptoImg from "./../../assets/images/crypto1.webp";
import secondCryptoImg from "./../../assets/images/crypto2.webp";

const Works = forwardRef((props, ref) =>  {
  return (
    <section className={styles.main} ref={ref}>
      <h1 className={styles.worksHeader}>Recent Works</h1>
      <div className={styles.line}></div>
      <section className={styles.quizPlatform}>
        <section className={styles.content}>
          <div className={styles.flex}>
            <MdQuiz color="#6E07F3" size={"2rem"} />
            <h2 className={styles.cryptoListHeader}>Quiz Platform</h2>
          </div>
          <p className={styles.text}>
            The Quiz Platform is a Full-Stack application designed for users to
            craft their own quizzes, participate in quizzes created by others,
            and leave ratings and comments.
          </p>

          <a
            target="_blank"
            rel="noreferrer"
            className={`${styles.flexLink}`}
            href="https://github.com/Gor-Hoveyan/reactQuizPlatfrom"
          >
            <h3 className={styles.projectLink}>View on github</h3>
            <RiExternalLinkFill color="#6E07F3" size={"2rem"} />
          </a>
        </section>

        <img
          className={styles.quizPlatformImg}
          src={quizPlatformImg}
          alt="Quiz platform"
        />
      </section>
      <div className={styles.line}></div>
      <section className={styles.minesweeper}>
        <section className={styles.content}>
          <div className={styles.flex}>
            <FaBomb color="#6E07F3" size={"2rem"} />
            <h2 className={styles.cryptoListHeader}>Minesweeper</h2>
          </div>
          <p className={styles.text}>
            Minesweeper is a logic-based puzzle game where players uncover
            squares on a grid to avoid hidden mines while deducing their
            locations based on numerical hints.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            className={`${styles.flexLink}`}
            href="https://minesweeper-nine-tau.vercel.app/"
          >
            <h3 className={styles.projectLink}>Play now</h3>
            <RiExternalLinkFill color="#6E07F3" size={"2rem"} />
          </a>
        </section>

        <img
          className={styles.minesweeperImg}
          src={minesweeperImg}
          alt="Minesweeper"
        />
      </section>
      <div className={styles.line}></div>
      <section className={styles.cryptoList}>
        <section className={styles.content}>
          <div className={styles.flex}>
            <FaBitcoin color="#6E07F3" size={"2rem"} />
            <h2 className={styles.cryptoListHeader}>Crypto List</h2>
          </div>
          <p className={styles.text}>
            Crypto List App is a Front-End application that displays the latest
            information about cryptocurrencies using dynamic data from the{" "}
            <a className={styles.link} href="https://coincap.io/">
              CoinCap API
            </a>
            .
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            className={`${styles.flexLink}`}
            href="https://crypto-list-fawn.vercel.app"
          >
            <h3 className={styles.projectLink}>View project</h3>
            <RiExternalLinkFill color="#6E07F3" size={"2rem"} />
          </a>
        </section>

        <img
          style={{ borderTopRightRadius: "3%", borderTopLeftRadius: "3%" }}
          className={styles.cryptoListImg}
          src={firstCryptoImg}
          alt="crypto list"
        />
        <br />
        <img
          style={{
            borderBottomRightRadius: "3%",
            borderBottomLeftRadius: "3%",
          }}
          className={styles.cryptoListImg}
          src={secondCryptoImg}
          alt="crypto list"
        />
      </section>
    </section>
  );
})

export default Works;
