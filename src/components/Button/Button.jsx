import React from 'react'
import "./Button.css"

const Button = ({ title, color }) => {
  return (
    <button className='Button' style={{ color: color }}>{title}</button>
  )
}

export default Button