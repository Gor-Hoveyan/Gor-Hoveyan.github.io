import styles from './footer.module.scss';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <p className={styles.rights}>© Copyright 2024 | All Rights Reserved | Website designed by Gor Hoveyan</p>

            <div className={styles.contactData}>
                <a target='_blank' href='https://github.com/Gor-Hoveyan'>
                    <AiFillGithub className={styles.footerImg} size='40px' color='gray' />
                </a>

                <a target='_blank' href='https://www.linkedin.com/in/gor-hoveyan-59538a29b/'>
                    <AiFillLinkedin className={styles.footerImg} size='40px' color='gray' />
                </a>

                <a target='_blank' href='https://www.facebook.com/profile.php?id=100009311294183'>
                    <AiFillFacebook className={styles.footerImg} size='40px' color='gray' />
                </a>

                <a target='_blank' href='https://www.instagram.com/hoveyan_004/'>
                    <AiFillInstagram className={styles.footerImg} size='40px' color='gray' />
                </a>
            </div>
        </footer>
    )
}