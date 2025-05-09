import styles from "./App.module.scss";
import About from "./components/about/About";
import Home from "./components/home/Home";
import { lazy, useRef } from "react";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const Works = lazy(() => import("./components/works/Works"));
const Contact = lazy(() => import("./components/contact/Contact"));

function App() {
  const contactRef = useRef(null)
  return (
    <main className={styles.main}>
      <Home onContactClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}/>
      <About />
      <Works />
      <Contact ref={contactRef}/>
      <ScrollToTop />
    </main>
  );
}

export default App;
