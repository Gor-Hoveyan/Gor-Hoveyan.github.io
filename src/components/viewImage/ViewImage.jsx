import React, { useEffect, useState } from "react";
import styles from "./ViewImage.module.scss";
import { createPortal } from "react-dom";

export default function ViewImage({ setViewImage, src }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (src) setShow(true);
  }, [src]);

  useEffect(() => {
    if (show) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
    }
  }, [show]);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => setViewImage(""), 400);
  };

  if (!src && !show) return null;

  return createPortal(
    <div
      className={`${styles.main} ${show ? styles.visible : styles.hidden}`}
      onClick={handleClose}
    >
      <img src={src} alt="Preview" />
    </div>,
    document.documentElement,
  );
}
