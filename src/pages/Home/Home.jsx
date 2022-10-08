import React from 'react'
import './Home.css'
import Contact from './sections/Contact/Contact'
import Projects from './sections/Projects/Projects'
import About from './sections/About/About'
import Work from './sections/Work/Work'
import Hero from './sections/Hero/Hero'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Home = () => {

  return (
    <>  
    <Header />
      <main>
        <Hero id="hero-section"/>

        <About id="about-section"/>
        <Work id="work-section"/>
        <Projects id="projects-section"/>
        <Contact id="contact-section"/>
      </main>
    <Footer />
    </>
  )
}

export default Home
