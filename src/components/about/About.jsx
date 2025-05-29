import React, { forwardRef } from "react";
import styles from "./About.module.scss";

const About = forwardRef((props, ref) =>  {
  return (
    <section className={styles.about} ref={ref}>
      <h1 className={styles.header}>
        I'm looking forward to working with you.
      </h1>
      <section className={styles.content}>
        <p>
          I'm Gor Hoveyan, a Front-End Developer dedicated to building user-centric web interfaces that solve problems and delight users. My expertise lies in developing responsive, high-performance applications using React and Next.js, with a keen eye for detail and clean code.
        </p>
        <p>
          I also bring a working knowledge of back-end development including Express.js and API integration, which helps me understand the full picture. I'm looking to apply my skills to challenging projects and collaborate with forward-thinking teams. Check out my work and let's connect!
        </p>
      </section>
    </section>
  );
})


export default About;