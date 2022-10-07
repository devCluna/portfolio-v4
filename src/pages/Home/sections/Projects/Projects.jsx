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
            <span>Apps</span>
            <div className='slider'>
                <Swiper
                    direction='horizontal'
                    navigation={true}
                    pagination = {true}
                    mousewheel = {true}
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
                    <SwiperSlide>
                        <div className='option'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='option'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='option'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='option'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='option'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='option'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='option'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='option'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='option'></div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

        <div className='project'>
            <span>Pens</span>
            <div className='slider'>
                <Swiper
                    direction='horizontal'
                    navigation={true}
                    pagination = {true}
                    mousewheel = {true}
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
                    <SwiperSlide>
                        <div className='option'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='option'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='option'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='option'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='option'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='option'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='option'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='option'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='option'></div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    </section>
  )
}

export default Projects
