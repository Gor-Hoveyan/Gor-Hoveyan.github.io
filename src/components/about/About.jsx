import React from "react";
import styles from './About.module.scss';

export default function About() {
    return (
        <div className={styles.about}>
            <h1 className={styles.header}>I'm looking forward to working with you.</h1>
            <pre className={styles.content}>
                I am a success-oriented web developer from Armenia. I enjoy creating efficient and user-friendly full-stack applications using <strong>React/Next</strong> for front-end and <strong>Node JS</strong> for back-end.
            </pre>
            <div className={styles.skills}>
                <h1 className={styles.header}>Skills</h1>
                <div className={styles.skillsSection}>

                        <span>HTML</span>
                        <span>CSS</span>
                        <span>SASS/SCSS</span>
                        <span>JavaScript</span>
                        <span>TypeScript</span>
                        <span>React</span>
                        <span>Redux</span>
                        <span>Zustand</span>
                        <span>Next JS</span>
                        <span>Node JS</span>
                        <span>Express</span>
                        <span>MongoDB</span>
                </div>

            </div>
        </div>
    )
}

