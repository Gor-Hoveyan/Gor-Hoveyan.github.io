import React from "react";
import styles from "./MainButton.module.scss";
import { FaTelegramPlane } from "react-icons/fa";

export default function MainButton({ onContactClick }) {
  return (
    <div className={styles.main}>
      <button className={styles.btn} onClick={onContactClick}>
        <div>
          <FaTelegramPlane />
          Get in Touch!
        </div>
      </button>
    </div>
  );
}
