import React, { useEffect, useState } from "react";
import styles from "./ViewImage.module.scss";

export default function ViewImage({ setViewImage, src }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (src) setShow(true);
  }, [src]);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => setViewImage(""), 400); // wait for fade-out
  };

  if (!src && !show) return null;

  return (
    <div
      className={`${styles.main} ${show ? styles.visible : styles.hidden}`}
      onClick={handleClose}
    >
      <img src={src} alt="Preview" />
    </div>
  );
}
