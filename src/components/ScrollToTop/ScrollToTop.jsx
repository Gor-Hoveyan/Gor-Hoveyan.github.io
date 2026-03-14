import React, { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.scss";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className={`${styles.main} ${visible ? styles.visible : ""}`}
      onClick={() => scrollToTop()}
    >
      <div className={styles.iconBackground} />
      <FaArrowAltCircleUp
        color="white"
        size={60}
        onClick={() => scrollToTop()}
      />
    </div>
  );
}
