import styles from './header.module.scss';

export default function Header() {
    
    return (
        <header className={styles.headerContainer}>
            <ul className={styles.linkList}>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </header>
    )
}