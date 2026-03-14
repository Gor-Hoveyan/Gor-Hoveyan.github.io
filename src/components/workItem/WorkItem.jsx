import React from "react";
import styles from "./WorkItem.module.scss";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";

export default function WorkItem({
  name,
  description,
  img,
  setViewImage,
  gitHubUrl,
  deploymentUrl,
}) {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.project}>
        <div className={styles.imageWrapper}>
          <div
            className={styles.imageOverlay}
            onClick={() => setViewImage(img)}
          >
            <MdOutlineZoomOutMap fontSize={60} color="white" />
          </div>
          <img src={img} alt={name} className={styles.projectImage} />
        </div>
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
    </div>
  );
}
