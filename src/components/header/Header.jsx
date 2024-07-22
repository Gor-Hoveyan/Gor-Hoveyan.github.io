import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-scroll';

export default function Header() {
    return (
        <div className={styles.header}>
            <Link to='home' smooth duration={500} className={styles.link}>
                <img alt='logo' className={styles.logo} src='https://i.yapx.ru/XwQBS.png' />
            </Link>
            <Link to='home' className={styles.link} smooth duration={500} activeClass={styles.active} spy>
                Home
            </Link>
            <Link to='about' smooth duration={500} className={styles.link} activeClass={styles.active} spy>About</Link>
            <Link to='works' smooth duration={500} className={styles.link} activeClass={styles.active} spy>Works</Link>
            <Link to='contact' smooth duration={500} className={styles.link} activeClass={styles.active} spy>Contact</Link>
        </div>
    )
}