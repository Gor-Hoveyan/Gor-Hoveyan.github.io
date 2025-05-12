import styles from "./App.module.scss";
import About from "./components/about/About";
import Home from "./components/home/Home";
import { lazy, useRef } from "react";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Header from "./components/header/Header";

const Works = lazy(() => import("./components/works/Works"));
const Contact = lazy(() => import("./components/contact/Contact"));

function App() {
  const aboutRef = useRef(null)
  const worksRef = useRef(null)
  const contactRef = useRef(null)

  function onContactClick() {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  function onAboutClick() {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  function onContactClick() {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  function onWorksClick() {
    worksRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <main className={styles.main}>
      <Header onContactClick={onContactClick} onAboutClick={onAboutClick} onWorksClick={onWorksClick} />
      <Home onContactClick/>
      <About  ref={aboutRef}/>
      <Works ref={worksRef}/>
      <Contact ref={contactRef}/>
      <ScrollToTop />
    </main>
  );
}

export default App;
