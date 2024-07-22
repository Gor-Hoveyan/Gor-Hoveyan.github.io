import { Element } from 'react-scroll';
import styles from './App.module.scss';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <Element name='home'>
        <Home />
      </Element>
      <Element name='about'>
        <About />
      </Element>
      <Element name='works'>
        <Works />
      </Element>
      <Element name='contact'>
        <Contact />
      </Element>
    </div>
  );
}

export default App;
