import React from "react";
import styles from "./Container.module.scss";

const Container = ({ children, className }) => {
  return <div className={`${className} ${styles.container}`}>{children}</div>;
};

export default Container;
