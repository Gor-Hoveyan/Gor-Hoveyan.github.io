import React from "react";
import styles from "./WorkItem.module.scss";
import { FaGithub, FaGlobe } from "react-icons/fa";

export default function WorkItem({
  name,
  description,
  img,
  setViewImage,
  gitHubUrl,
  deploymentUrl,
}) {
  return (
    <div className={styles.project}>
      <img
        src={img}
        alt={name}
        className={styles.projectImage}
        onClick={() => setViewImage(img)}
      />
      <h1 className={styles.projectHeader}>{name}</h1>
      <p className={styles.projectDescription}>{description}</p>
      <div className={styles.icons}>
        {gitHubUrl ? (
          <a target="_blank" href={gitHubUrl} rel="noreferrer">
            <FaGithub />
          </a>
        ) : (
          ""
        )}
        {deploymentUrl ? (
          <a target="_blank" href={deploymentUrl} rel="noreferrer">
            <FaGlobe />
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
