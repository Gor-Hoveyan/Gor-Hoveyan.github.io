import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Skills from './components/skills/Skills'
import styles from './page.module.scss'

export default function App() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header />
      <div className={styles.content}>
        <section id='home'>
          <Home />
        </section>
        
        <section id='about'>
          <About />
        </section>
        
        <section id='skills'>
          <Skills />
        </section>
        
        <section id='contact'>
          <Contact />
        </section>
        
      </div>
      
      <Footer />
    </main>
  )
}
