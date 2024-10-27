import React from "react";
import styles from "./Contact.module.scss";
import { ImLinkedin } from "react-icons/im";
import { FaTelegram, FaGithub } from "react-icons/fa6";
import { ImMail4 } from "react-icons/im";

export default function Contact() {
  const date = new Date();
  return (
    <footer className={styles.main}>
      <p className={styles.content}>Live. Create. Explore.</p>
      <section className={styles.contacts}>
        <a
          className={styles.link}
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/gorhoveyan/"
        >
          <ImLinkedin
            onMouseOver={(e) => (e.currentTarget.style.scale = "1.2")}
            onMouseLeave={(e) => (e.currentTarget.style.scale = "1")}
            style={{
              transitionDuration: "0.4s",
              boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)",
              borderRadius: "100%",
            }}
            color="white"
            size={"2.5rem"}
          />
        </a>
        <a
          className={styles.link}
          target="_blank"
          rel="noreferrer"
          href="https://t.me/gorhoveyan"
        >
          <FaTelegram
            onMouseOver={(e) => (e.currentTarget.style.scale = "1.2")}
            onMouseLeave={(e) => (e.currentTarget.style.scale = "1")}
            style={{
              transitionDuration: "0.4s",
              boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.6)",
              borderRadius: "50%",
            }}
            color="white"
            size={"2.5rem"}
          />
        </a>
        <a
          className={styles.link}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Gor-Hoveyan"
        >
          <FaGithub
            onMouseOver={(e) => (e.currentTarget.style.scale = "1.2")}
            onMouseLeave={(e) => (e.currentTarget.style.scale = "1")}
            style={{
              transitionDuration: "0.4s",
              boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.6)",
              borderRadius: "50%",
            }}
            color="white"
            size={"2.5rem"}
          />
        </a>
        <a
          className={styles.link}
          target="_blank"
          rel="noreferrer"
          href="mailto:gorhoveyan@bk.ru"
        >
          <ImMail4
            onMouseOver={(e) => (e.currentTarget.style.scale = "1.2")}
            onMouseLeave={(e) => (e.currentTarget.style.scale = "1")}
            style={{
              transitionDuration: "0.4s",
              boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.6)",
              borderRadius: "50%",
            }}
            color="white"
            size={"2.5rem"}
          />
        </a>
      </section>
      <div className={styles.footer}>
        <p className={styles.credentials}>
          Handcrafted by Gor Hoveyan <br />{" "}
          <span className={styles.date}>© {date.getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
}
