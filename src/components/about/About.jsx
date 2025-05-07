import React from "react";
import styles from "./About.module.scss";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaNodeJs,
  FaReact,
  FaGit,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaNpm,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills = [
  { icon: <FaHtml5 size={30}/>, name: "HTML" },
  { icon: <FaCss3Alt  size={30}/>, name: "CSS" },
  { icon: <FaSass  size={30}/>, name: "SASS/SCSS" },
  { icon: <SiTailwindcss  size={30}/>, name: "Tailwind" },
  { icon: <SiJavascript  size={30}/>, name: "JavaScript" },
  { icon: <SiTypescript  size={30}/>, name: "TypeScript" },
  { icon: <FaReact  size={30}/>, name: "React" },
  { icon: <SiRedux  size={30}/>, name: "Redux"},
  { icon: <SiNextdotjs  size={30}/>, name: "Next.js" },
  { icon: <FaNpm  size={30}/>, name: "npm" },
  { icon: <FaNodeJs  size={30}/>, name: "Node.js" },
  { icon: <SiExpress size={30}/>, name: "Express" },
  { icon: <TbApi size={30} />, name: "REST API" },
  { icon: <SiMongodb size={30} />, name: "MongoDB" },
  { icon: <SiMysql size={30}/>, name: "MySQL" },
  {icon: <FaGitAlt size={30}/>, name: "Git"},
  {icon: <FaGithub size={30}/>, name: "GitHub"},
  {icon: <FaGitlab size={30}/>, name: "GitLab"},
];

export default function About() {
  return (
    <section className={styles.about}>
      <h1 className={styles.header}>
        I'm looking forward to working with you.
      </h1>
      <section className={styles.content}>
        I am a success-oriented web developer from Armenia. I enjoy creating
        efficient and user-friendly full-stack applications using{" "}
        <strong style={{ color: "#5BE9B9" }}>React/Next.js</strong> for
        front-end and <strong style={{ color: "#5BE9B9" }}>Node.js</strong> for
        back-end. I'm always up for a new challenge, excited to tackle complex
        problems and continue expanding my skills in web development.
      </section>
      <section className={styles.skills}>
        <h1 className={styles.header}>Skills</h1>
        <div className={styles.skillGrid}>
          {skills.map(skill => (
            <div key={skill.name} className={styles.skillItem}>
              <div className={styles.icon}>{skill.icon}</div>
              <div className={styles.skillTitle}>{skill.name}</div>
            </div>
          ))}
          </div>
      </section>
    </section>
  );
}
