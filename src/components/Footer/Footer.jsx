import React from 'react'
import './Footer.css'
import {FiGithub as Github, FiLinkedin as Linkedin, FiCodepen as Codepen, FiTwitter as Twitter} from 'react-icons/fi'
import Data from '../../utils/Dummy'

const Footer = () => {
    const {socialMedia} = Data
  return (
    <footer>
        <span>Designed & Developed by <a onClick={()=> window.open(socialMedia.linkedin)}>@devCluna</a></span>
        <span>Copyright © <a onClick={()=> window.open(socialMedia.linkedin)}>devCluna</a></span>
        <div className='social-holder'>
            <span className='social-media'>Social Media</span>
            <div className='icons-holder-footer'>
                <Github className='foot-icon'  onClick={()=> window.open(socialMedia.github)}/>
                <Twitter className='foot-icon'  onClick={()=> window.open(socialMedia.twitter)}/>
                <Linkedin className='foot-icon'  onClick={()=> window.open(socialMedia.linkedin)}/>
                <Codepen className='foot-icon'  onClick={()=> window.open(socialMedia.codepen)}/>
            </div>
        </div>
  </footer>
  )
}

export default Footer
