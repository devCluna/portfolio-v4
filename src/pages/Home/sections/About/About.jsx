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
                <img alt='logo-spotify' className='info-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"/>
                <span  className='info-title'>My fav Tracks</span>
                <a href='https://open.spotify.com/playlist/37i9dQZF1EUMDoJuT8yJsl?si=ea6d84e259664159&nd=1' target="_blank">Spotify tracks</a>
            </div>

            <div className='info-ab'>
                <img alt='logo-theWitcher3' className='info-img' src="https://image.api.playstation.com/vulcan/img/rnd/202009/2913/TQKAd8U6hnIFQIIcz6qnFh8C.png"/>
                <span className='info-title'>My fav Game</span>
                <a href='https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/' target="__blank">The Witcher 3</a>
            </div>
        </div>
            
      </div>
   </section>
  )
}

export default About
