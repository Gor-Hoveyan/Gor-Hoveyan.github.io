import React, { useState } from 'react'
import styles from './BurgerMenu.module.scss';
import { RiMenuLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export default function BurgerMenu({onContactClick, onAboutClick, onWorksClick}) {
    const [isOpen, setIsOpen] = useState(false);
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <div className={styles.main}>
        <div className={styles.openBtnBg}>
            <RiMenuLine className={styles.openBtn} color='black' size={30} onClick={() => setIsOpen(true)} />
        </div>
        <div className={isOpen ? styles.open : styles.close} onClick={(() => setIsOpen(false))}>
            <p className={styles.closeBtn} >
                <IoClose className={styles.closeIcon} color='black' size={30} onClick={() => setIsOpen(false)}/>
            </p>
            <ul className={styles.list} onClick={(e) => e.stopPropagation()}>
                <li onClick={() => {scrollToTop(); setIsOpen(false)}} className={styles.link}>HOME</li>
                <li onClick={() => {onAboutClick(); setIsOpen(false)}} className={styles.link}>ABOUT</li>
                <li onClick={() => {onWorksClick(); setIsOpen(false)}} className={styles.link}>WORKS</li>
                <li onClick={() => {onContactClick(); setIsOpen(false)}} className={styles.link}>CONTACT</li>
            </ul>
        </div>
    </div>
  )
}
