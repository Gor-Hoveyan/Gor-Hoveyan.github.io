import styles from "./App.module.scss";
import About from "./components/about/About";
import Home from "./components/home/Home";
import { lazy } from "react";

const Works = lazy(() => import("./components/works/Works"));
const Contact = lazy(() => import("./components/contact/Contact"));

function App() {
  return (
    <main className={styles.main}>
      <Home />
      <About />
      <Works />
      <Contact />
    </main>
  );
}

export default App;
