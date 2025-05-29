import styles from "./App.module.scss";
import About from "./components/about/About";
import Home from "./components/home/Home";
import { lazy, useRef } from "react";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Header from "./components/header/Header";
import BurgerMenu from "./components/burgerMenu/BurgerMenu";
import Skills from "./components/skills/Skills";

const Works = lazy(() => import("./components/works/Works"));
const Contact = lazy(() => import("./components/contact/Contact"));

function App() {
  const aboutRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);

  function onAboutClick() {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  function onContactClick() {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  function onWorksClick() {
    worksRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  function onSkillsClick() {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <main className={styles.main}>
      <Header onSkillsClick={onSkillsClick} onContactClick={onContactClick} onAboutClick={onAboutClick} onWorksClick={onWorksClick} />
      <BurgerMenu onSkillsClick={onSkillsClick} onContactClick={onContactClick} onAboutClick={onAboutClick} onWorksClick={onWorksClick} />
      <Home onContactClick={onContactClick}/>
      <About  ref={aboutRef}/>
      <Skills ref={skillsRef}/>
      <Works ref={worksRef}/>
      <Contact ref={contactRef}/>
      <ScrollToTop />
    </main>
  );
}

export default App;
