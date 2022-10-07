import React from 'react'
import Button from '../../../../components/Button'
import './Contact.css'

const Contact = () => {
  return (
    <section className='section contact-section'>
        <span className='contact-comment'>What's next?</span>
        <h1 className='contact-title'>Get in touch!</h1>
        <p className='contact-p'>I'm currently looking for new opportunities, so it would be great to receive your proposals in my inbox. I will try my best to answer you, as soon as possible. :)</p>

        <Button context={"Say hi!"}/>
    </section>
  )
}

export default Contact
