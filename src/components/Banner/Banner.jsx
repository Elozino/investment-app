import React from 'react'
import { Link } from 'react-router-dom'
import "./Banner.css"

const Banner = ({ title, title1 }) => {
  return (
    <div className='Banner'>
      <div className='Banner__header'>
        <h2>{title}</h2>
        <div className='Banner__link'>
          <div>
            <Link to='/'>Home</Link>
          </div>
          <p>{title1}</p>
        </div>
      </div>
     
    </div>
  )
}

export default Banner