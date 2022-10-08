import React, { useState } from 'react'
import './Home.css'
import {Link} from 'react-scroll'
import {GiHamburgerMenu as MobileMenu} from 'react-icons/gi'
import Contact from './sections/Contact/Contact'
import Projects from './sections/Projects/Projects'
import About from './sections/About/About'
import Work from './sections/Work/Work'
import Typed from 'react-typed';

import Button from '../../components/Button'
import Data from '../../utils/Dummy'

const Home = () => {
    const [mobileMenuStatus, setMobileMenuStatus] = useState(false)

  return (
    <>  
        {mobileMenuStatus &&
            <nav className='overlay'>
            <ul className='mobile-nav'>
                <li className='close-menu'>
                    <MobileMenu onClick={()=>setMobileMenuStatus(!mobileMenuStatus)}/>
                </li>

                <li className='mobile-li'>
                    <Link
                        onClick={()=>setMobileMenuStatus(!mobileMenuStatus)} 
                        className='mobile-link'
                        to="hero-section"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                    >
                           {Data.devName}
                    </Link>
                </li>

                <li className='mobile-li'>
                    <Link
                        onClick={()=>setMobileMenuStatus(!mobileMenuStatus)}
                        className='mobile-link'
                        to="about-section"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                    >
                            About
                    </Link>
                </li >

                <li className='mobile-li'>
                    <Link 
                        onClick={()=>setMobileMenuStatus(!mobileMenuStatus)}
                        className='mobile-link'
                        to="work-section"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                    >
                            Work
                    </Link>
                </li>

                <li className='mobile-li'>
                    <Link 
                        onClick={()=>setMobileMenuStatus(!mobileMenuStatus)}
                        className='mobile-link'
                        to="projects-section"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                    >
                            Projects
                    </Link>
                </li>

                <li className='mobile-li'>
                    <Link 
                        onClick={()=>setMobileMenuStatus(!mobileMenuStatus)}
                        className='mobile-link'
                        to="contact-section"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                    >
                            Contact
                    </Link>
                </li>

                <li className='mobile-li'>
                    <a 
                        onClick={()=>setMobileMenuStatus(!mobileMenuStatus)}
                        className='mobile-link'
                        href={Data.resume}
                        target='_blank'
                    >
                            Resume
                    </a>
                </li>
            </ul>
        </nav>
        }
        <header>
            <nav>
                <ul className='desktop-nav'>    
                    
                    <li className='desktop-li'>
                        <Link 
                            to="hero-section"
                            className='desktop-link logo'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                        >
                                {Data.devName}
                        </Link>
                    </li>

                    <li className='desktop-li'>
                        <Link 
                            to="about-section"
                            className='desktop-link'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                        >
                                About
                        </Link>
                    </li>

                    <li className='desktop-li'>
                        <Link 
                            to="work-section"
                            className='desktop-link'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                        >
                                Work
                        </Link>
                    </li>

                    <li className='desktop-li'>
                        <Link 
                            to="projects-section"
                            className='desktop-link'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                        >
                                Projects
                        </Link>
                    </li>

                    <li className='desktop-li'>
                        <Link 
                            to="contact-section"
                            className='desktop-link'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                        >
                                Contact
                        </Link>
                    </li>

                    <li className='desktop-li'>
                        <a 
                            href={Data.resume}
                            className='desktop-link'
                            target="_blank"
                        >
                                Resume
                        </a>
                    </li>
                    
                    <li className='desktop-li'>
                        <MobileMenu className='desktop-link' onClick={()=>setMobileMenuStatus(!mobileMenuStatus)}/>
                    </li>
                    

                </ul>
            </nav>
        </header>

      <main>
        <section className='section hero-section'>
            <div>
            
                
            </div>
            <span className='comment'>Hello World!</span>
            <h1 className='dev-name'>{Data.name}</h1>
            <h3 className='tech-stack'><Typed
                className='typed'
                strings={Data.techs}
                typeSpeed={40}
                backSpeed={50}
                loop 
            /></h3>
            <h4 className='subtitle'>Rocking since {Data.yearDate}</h4>
            <p className='paragraph'>I'm a self thaught web developer aimed to build & desing sometimes web apps, static layouts.</p>
            <Link 
                to="projects-section"
                
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                >
                    <Button context={'Checkout my work!'}/>
            </Link>

            
        </section>

        <About id="about-section"/>
        <Work id="work-section"/>
        <Projects id="projects-section"/>
        <Contact id="contact-section"/>
      </main>
      <footer>
        Footer
      </footer>
    </>
  )
}

export default Home
