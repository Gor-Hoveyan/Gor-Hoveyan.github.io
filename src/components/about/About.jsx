import React from "react";
import styles from './About.module.scss';

export default function About() {
    return (
        <div className={styles.about}>
            <h1 className={styles.header}>My name is Gor. I'm looking forward to working with you.</h1>
            <pre className={styles.content}>
                I am a third year computer engineering student. I specialize in creating efficient and user-friendly applications using  <strong>React</strong> or <strong>Next.js</strong>, as well as creating and integrating <strong>API</strong>s to ensure optimal application performance. In my projects, I have used  technologies such as <strong>HTML</strong>, <strong>CSS</strong>, <strong>SASS/SCSS</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>React</strong>, <strong>Redux</strong>, <strong>Zustand</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, <strong>Express</strong> and <strong>MongoDB</strong>.
            </pre>
        </div>
    )
}