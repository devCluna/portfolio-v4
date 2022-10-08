import React from 'react'
import Button from '../../../../components/Button/Button'
import './Contact.css'

const Contact = () => {
  return (
    <section className='section contact-section'>
        <span className='contact-comment'>What's next?</span>
        <h1 className='contact-title'>Get in touch!</h1>
        <p className='contact-p'>I'm currently looking for new opportunities, so I'm open mind to new projects. I'll try my best to reply, as soon as possible</p>
        <a href='mailto:jobs.cluna@gmail.com'>
          <Button context={"Say hi!"} />
        </a>
    </section>
  )
}

export default Contact
