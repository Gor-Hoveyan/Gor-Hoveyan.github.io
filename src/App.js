import styles from './App.module.scss';
import About from './components/about/About';
import Home from './components/home/Home';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className={styles.main}>
      <Home />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
