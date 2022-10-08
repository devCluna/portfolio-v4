import React from 'react'
import { Link } from 'react-scroll'
import Typed from 'react-typed'
import Button from '../../../../components/Button/Button'
import Data from '../../../../utils/Dummy'
import './Hero.css'

const Hero = () => {
  return (
    <section className='section hero-section'>
            <div>
            
                
            </div>
            <span className='comment'>Hello World!</span>
            <h1 className='dev-name'>{Data.name}</h1>
            <h3 className='tech-stack'>
                <Typed
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
  )
}

export default Hero
