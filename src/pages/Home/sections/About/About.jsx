import React from 'react'
import './About.css'
import {FiGithub as Github, FiLinkedin as Linkedin, FiCodepen as Codepen, FiTwitter as Twitter} from 'react-icons/fi'
import Data from '../../../../utils/Dummy.js'

const About = () => {

  const {socialMedia} = Data
  return (
   <section className='about-section'>
      <div className='left-ab'>
        <h1>About Me!</h1>
        <p className='capital'> Cristhian Luna is well-seasoned developer, an annoyingly enthusiastic music fan, a gold-medalist couch potato, a hopeful landscape gardener, and a work in progress.</p>

        <h4>Profesionally</h4>
        <p>Web developer with 2+ years of experience building web apps for different local and US SMEs in multiple sectors. With an emphasis on details, translating layouts into an efficient, reusable, readable & secure code.</p>

        <h4>Personally</h4>
        <p>I love music, and often draw y spend time reading fantasy medieval books like Lord of the rings, Ice & Fire song, The Witcher. How old-fashioned is that? All of my music consumption is meticulously catalogued on a Spotify playlist</p>
      </div>
      <div className='right-ab'>
        <div className='info-ab'>
            <p className='logo-title'>Social Media</p>
            <div className='logo-ab'>
                <Twitter onClick={()=>window.open(socialMedia.twitter, "_blank")}  className='logo-item'/>
                <Github onClick={()=>window.open(socialMedia.twitter, "_blank")}  className='logo-item'/>
                <Codepen onClick={()=>window.open(socialMedia.twitter, "_blank")} className='logo-item'/>
                <Linkedin onClick={()=>window.open(socialMedia.twitter, "_blank")}  className='logo-item'/>
            </div>
        </div>
        <div className='info-holder'>
            <div className='info-ab'>
                <img alt='logo-spotify' className='info-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"/>
                <span  className='info-title'>My fav Tracks</span>
                <a href={socialMedia.spotify} target="_blank">Spotify tracks</a>
            </div>

            <div className='info-ab'>
                <img alt='logo-theWitcher3' className='info-img' src={socialMedia.game.img}/>
                <span className='info-title'>My fav Game</span>
                <a href={socialMedia.game.link} target="__blank">{socialMedia.game.name}</a>
            </div>
        </div>
            
      </div>
   </section>
  )
}

export default About
