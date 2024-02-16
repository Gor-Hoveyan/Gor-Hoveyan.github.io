import styles from './about.module.scss';

export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.aboutHeader}>About me</h1>

            <div className={styles.aboutContentDiv}>
                <p className={styles.aboutContent}>
                    Hello! My name is Gor Hoveyan, and I am a web developer. My passion for creating web applications and interactive interfaces inspires me every day.

                </p>

                <p className={styles.aboutContent}>
                    My skills include HTML, CSS, and JavaScript, as well as working with modern frameworks like React. I am constantly learning new technologies to stay updated on the latest trends in web development.

                </p>
                <p className={styles.aboutContent}>
                    Creating unique and creative web solutions is my goal. Let's collaborate to build something amazing in the virtual world of web technologies!
                </p>
            </div>
            
        </div>
    );
}