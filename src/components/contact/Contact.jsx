import React, { forwardRef } from "react";
import styles from "./Contact.module.scss";
import { ImLinkedin } from "react-icons/im";
import { FaTelegram, FaGithub } from "react-icons/fa6";
import { ImMail4 } from "react-icons/im";

const Contact = forwardRef((props, ref) => {
  const date = new Date();
  return (
    <>
      <svg
        className={styles.svgCurve}
        viewBox="0 0 1440 56"
        xmlns="http://www.w3.org/2000/svg"
        fill="#6e07f3"
      >
        <path d="M-100 0C-100 0 218.416 55.835 693.5 55.835C1168.58 55.835 1487 0 1487 0V79H-100V0Z"></path>
      </svg>
      <footer className={styles.main} ref={ref}>
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
            <span className={styles.date}>© 2022-{date.getFullYear()}</span>
          </p>
        </div>
      </footer>
    </>
  );
});

export default Contact;
