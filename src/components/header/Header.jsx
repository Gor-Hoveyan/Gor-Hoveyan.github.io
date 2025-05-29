import React from 'react'
import styles from './Header.module.scss';

export default function Header({onSkillsClick, onContactClick, onAboutClick, onWorksClick}) {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <div className={styles.main}>
        <p onClick={() => scrollToTop()} className={styles.name}>GOR HOVEYAN</p>
        <ul className={styles.list}>
            <li onClick={() => scrollToTop()} className={styles.link}>HOME</li>
            <li onClick={() => onAboutClick()} className={styles.link}>ABOUT ME</li>
            <li onClick={() => onSkillsClick()} className={styles.link}>SKILLS</li>
            <li onClick={() => onWorksClick()} className={styles.link}>MY WORKS</li>
            <li onClick={() => onContactClick()} className={styles.link}>CONTACT ME</li>
        </ul>
    </div>
  )
}
