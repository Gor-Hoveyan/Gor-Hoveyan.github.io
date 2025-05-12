import React, {useEffect, useState} from 'react'
import styles from './ScrollToTop.module.scss'
import { TbArrowBigUpLines } from "react-icons/tb";


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
    <div className={`${styles.main} ${visible ? styles.visible : ''}`} onClick={() => scrollToTop()}>
        <TbArrowBigUpLines color='#6e07f3' size={30} onClick={() => scrollToTop()}/>
    </div>
  )
}
