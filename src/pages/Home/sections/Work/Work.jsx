import React from 'react'
import './Work.css'

const Work = () => {
  return (
    <section className='work-section'>
      <div className='cv'>
        Donwload CV
      </div>

      <div className='exp-wrapper'>
        <div className='exp-item left'>
            <div className='col'>
                <h1>Experience</h1>
                <div className='col-info'>
                    <span className='col-title'>Title</span>
                    <span className='col-date'>Date Time</span>
                    <p className='col-p'>The User Interfaces were designed through Figma and Sketch, in consensus with the end users, and the product owner</p>
                    <p className='col-p'>The User Interfaces were designed through Figma and Sketch, in consensus with the end users, and the product owner</p>
                </div>

                <div className='col-info'>
                    <span className='col-title'>Title</span>
                    <span className='col-date'>Date Time</span>
                    <p className='col-p'>The User Interfaces were designed through Figma and Sketch, in consensus with the end users, and the product owner</p>
                    <p className='col-p'>The User Interfaces were designed through Figma and Sketch, in consensus with the end users, and the product owner</p>
                </div>

                <div className='col-info'>
                    <span className='col-title'>Title</span>
                    <span className='col-date'>Date Time</span>
                    <p className='col-p'>The User Interfaces were designed through Figma and Sketch, in consensus with the end users, and the product owner</p>
                    <p className='col-p'>The User Interfaces were designed through Figma and Sketch, in consensus with the end users, and the product owner</p>
                </div>
            </div>
        </div>

        <div className='exp-item right'>
            <div className='col'>
                Row -right
            </div>
        </div>
      </div>

      <div className='cv'>
        Donwload CV
      </div>

    </section>
  )
}

export default Work
