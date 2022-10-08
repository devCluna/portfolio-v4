import React from 'react'
import './Button.css'

const Button = ({context}) => {
  return (
    <button className='button'>
        {context}
    </button>
  )
}

export default Button
