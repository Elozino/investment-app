import React from 'react'
import "./Activity.css"

const Activity = () => {
  return (
    <div className='Activity'>
      <h4>Activity on your account</h4>
      <div className='Activity__header'>
        <p>Here is your last 20 login activities log. </p>
        <p>Clear log</p>
      </div>
    </div>
  )
}

export default Activity