import styles from './contact.module.scss';

export default function Contact() {
    return (
        <div className={styles.contactContainer}>
            
            <div className={styles.contactContentDiv}>
                <h1 className={styles.contactHeader}>Contact</h1>
                <p className={styles.contactContent}>
                    If you are in search of a talented web developer who is eager to help bring your ideas to life,
                    you're in the right place. Gor ready to assist you in creating a web project that meets your needs.
                </p>

                <p className={styles.contactContent}>
                    Fill out the form below to send me your questions or collaboration requests.
                    Thank you for your interest in my work, and I look forward to the opportunity to work with you.
                </p>
            </div>

            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScSgdESx3tGye6IaTeRAIjM78KF_NA7b5CRib4ATawxrreaKg/viewform?embedded=true"
                className={styles.contactForm}>
                Загрузка…
            </iframe>
        </div>
    )
}