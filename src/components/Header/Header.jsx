import React, { useState } from 'react'
import { Link } from 'react-scroll'
import {GiHamburgerMenu as MobileMenu} from 'react-icons/gi'
import Data from '../../utils/Dummy'
import './Header.css'
import resume from '../../assets/portfolio_eng_ver_1.pdf'

const Header = () => {
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
                        href={resume}
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
                            href={resume}
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
    </>
  )
}

export default Header
