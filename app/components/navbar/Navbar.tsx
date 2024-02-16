import styles from './navbar.module.scss';
import { AiFillHome, AiFillBulb, AiFillMessage } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
    
    return (
        <nav className={styles.navbar}>

            <a className={styles.scrollLink} href='#home'>
                <div className={styles.navbarContentDiv}>
                    <AiFillHome className={styles.navbarImg} size='40px' color='gray' />
                    <h3 className={styles.navbarContent}>Home</h3>
                </div>
            </a>

            <a className={styles.scrollLink} href='#about'>
                <div className={styles.navbarContentDiv}>
                    <FaUser className={styles.navbarImg} size='40px' color='gray' />
                    <h3 className={styles.navbarContent}>About</h3>
                </div>
            </a>

            <a className={styles.scrollLink} href='#skills'>
                <div className={styles.navbarContentDiv}>
                    <AiFillBulb className={styles.navbarImg} size='40px' color='gray' />
                    <h3 className={styles.navbarContent}>Skills</h3>
                </div>
            </a>

            <a className={styles.scrollLink} href='#contact'>
                <div className={styles.navbarContentDiv}>
                    <AiFillMessage className={styles.navbarImg} size='40px' color='gray' />
                    <h3 className={styles.navbarContent}>Contact</h3>
                </div>
            </a>
        </nav>
    )
}