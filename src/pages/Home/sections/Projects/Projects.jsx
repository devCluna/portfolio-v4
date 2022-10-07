import React from 'react'
import './Projects.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {
    EffectFade,
    Mousewheel,
    Pagination,
    Navigation
} from 'swiper'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel"
import 'swiper/css/effect-fade'
import "swiper/css/navigation";
import Data from '../../../../utils/Dummy';

import {BiLinkExternal as Live} from 'react-icons/bi'
import {BsGithub as Repo} from 'react-icons/bs'

SwiperCore.use([Mousewheel, Pagination, EffectFade])

const swiperOptions = {
    direction: 'horizontal',
    spaceBetween: 0,
    mousewheel: true,
    pagination: true,
    speed: 500,
    
}

const Projects = () => {
  return (
    <section className=' projects-section'>
        <div className='project'>
            <span>Apps ({Data.projects.apps.length})</span>
            <div className='slider'>
                <Swiper
                    direction='horizontal'
                    navigation={true}
                    pagination = {true}
                    // mousewheel = {true}
                    modules = {[Navigation]}
                    breakpoints={{
                        500: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                    }}
                >
                    {Data.projects.apps.map(app =>(
                        <SwiperSlide key={app.id}>
                        <div className='option'>
                            <div className='project-info'>
                                <span onClick={()=>window.open(app.links.live, '_blank')}>{app.title}</span>
                                <p>{app.description}</p>
                                <div className='techs-holder'>
                                    {app.techs.map(tech=>(
                                        <small>{tech}</small>
                                    ))}
                                </div>

                                <div className='icons-holder'>
                                    <Live onClick={()=>window.open(app.links.live, '_blank')}  className='icon-live'/>
                                    <Repo onClick={()=>window.open(app.links.demo, '_blank')} className='icon-repo'/>
                                </div>
                            </div>
                            <img alt={app.alt} src={`https://shot.screenshotapi.net/screenshot?token=VWTC8PF-5FFMXB1-PFRKZ3K-M39KBDN&url=${app.links.live}&output=image&file_type=png&wait_for_event=load&delay=1000`}/>
                        </div>
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
            </div>
        </div>

        <div className='project'>
            <span>Pens ({Data.projects.pens.length})</span>
            <div className='slider'>
                <Swiper
                    direction='horizontal'
                    navigation={true}
                    pagination = {true}
                    // mousewheel = {true}
                    modules = {[Navigation]}
                    breakpoints={{
                        500: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                    }}
                >
                    {Data.projects.pens.map(pen =>(
                        <SwiperSlide key={pen.id}>
                        <div className='option'>
                            <div className='project-info'>
                                <span>{pen.title}</span>
                                <p>{pen.description}</p>
                                <div className='techs-holder'>
                                    {pen.techs.map(tech=>(
                                        <small>{tech}</small>
                                    ))}
                                </div>

                                <div className='icons-holder'>
                                    <Live className='icon-live'/>
                                    <Repo className='icon-repo'/>
                                </div>
                            </div>
                            <img alt={pen.alt} src={`https://shot.screenshotapi.net/screenshot?token=VWTC8PF-5FFMXB1-PFRKZ3K-M39KBDN&url=${pen.links.live}&output=image&file_type=png&wait_for_event=load&delay=1000`}/>
                        </div>
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
            </div>
        </div>

    </section>
  )
}

export default Projects
