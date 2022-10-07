import React from 'react'
import './About.css'
import {FiGithub as Github, FiLinkedin as Linkedin, FiCodepen as Codepen, FiTwitter as Twitter} from 'react-icons/fi'

const About = () => {
  return (
   <section className='about-section'>
      <div className='left-ab'>
        <h1>About Me!</h1>
        <p className='capital'> Jared Christensen is well-seasoned (mostly salty) designer, an annoyingly enthusiastic music fan, a gold-medalist couch potato, a hopeful landscape gardener, and a work in progress.</p>

        <h4>Profesionally</h4>
        <p>I'm passionate about designing software that is human-friendly, clear, purposeful, easy to use, and aesthetically pleasing. I've worked with a variety of clients in.</p>

        <h4>Personally</h4>
        <p>I love music, and often write about my loves and discoveries here on my blog. I know: how old-fashioned is that? All of my music consumption is meticulously catalogued on Last.fm, and I maintain a Spotify playli</p>
      </div>
      <div className='right-ab'>
        <div className='info-ab'>
            <p className='logo-title'>Social Media</p>
            <div className='logo-ab'>
                <Twitter  className='logo-item'/>
                <Github  className='logo-item'/>
                <Codepen className='logo-item'/>
                <Linkedin  className='logo-item'/>
            </div>
        </div>
        <div className='info-holder'>
            <div className='info-ab'>
                <img className='info-img' src="https://lastfm.freetls.fastly.net/i/u/174s/61a6649f35502d1674c91a74205326b5.jpg"/>
                <span className='info-title'>GAMING</span>
                <span >Exit to darkness</span>
            </div>

            <div className='info-ab'>
                <img className='info-img' src="https://lastfm.freetls.fastly.net/i/u/174s/61a6649f35502d1674c91a74205326b5.jpg"/>
                <span className='info-title'>GAMING</span>
                <span>Exit to darkness</span>
            </div>
        </div>
            
      </div>
   </section>
  )
}

export default About
