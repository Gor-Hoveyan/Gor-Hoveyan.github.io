import styles from './home.module.scss';

export default function Home() {
    return (
        <div className={styles.header}>
            <div className={styles.aboutMeShortly}>
                <h1 className={styles.name}>Gor Hoveyan</h1>
                <h3 className={styles.profession}>JavaScript developer</h3>
            </div>
            <div className={styles.qualitiesDiv}>
                <h2 className={styles.qualitiesContent}>Responsibility.</h2>
                <h2 className={styles.qualitiesContent}>Adaptability.</h2>
                <h2 className={styles.qualitiesContent}>Creativity.</h2>
            </div>
        </div>
    )
}