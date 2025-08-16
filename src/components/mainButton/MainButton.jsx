import React from "react";
import styles from "./MainButton.module.scss";
import { FiMessageCircle } from "react-icons/fi";

export default function MainButton({ onContactClick }) {
  return (
    <div className={styles.main}>
      <button className={styles.btn} onClick={onContactClick}>
        <div>
          <span className={styles.content}>
            {" "}
            <FiMessageCircle />
            Get in Touch!
          </span>
        </div>
      </button>
    </div>
  );
}
