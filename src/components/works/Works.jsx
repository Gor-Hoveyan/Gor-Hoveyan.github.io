import React from "react";
import styles from "./Works.module.scss";
import { FaBitcoin } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";
import { MdQuiz } from "react-icons/md";

export default function Works() {
  return (
    <div className={styles.main}>
      <h1 className={styles.worksHeader}>My Recent works</h1>
      <div className={styles.cryptoList}>
        <div className={styles.content}>
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
        </div>

        <img
          style={{ borderTopRightRadius: "3%", borderTopLeftRadius: "3%" }}
          className={styles.cryptoListImg}
          src="https://i.yapx.cc/X8U5e.png"
          alt="crypto list"
        />
        <img
          style={{
            borderBottomRightRadius: "3%",
            borderBottomLeftRadius: "3%",
          }}
          className={styles.cryptoListImg}
          src="https://i.yapx.cc/X8U5Y.png"
          alt="crypto list"
        />
      </div>
      <div className={styles.testPlatform}></div>

      <div className={styles.quizPlatform}>
        <div className={styles.content}>
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
        </div>

        <img
          style={{ borderTopRightRadius: "3%", borderTopLeftRadius: "3%" }}
          className={styles.quizPlatformImg}
          src="https://i.yapx.cc/X8U71.png"
          alt="Quiz platform"
        />
      </div>
      <div className={styles.testPlatform}></div>
    </div>
  );
}
