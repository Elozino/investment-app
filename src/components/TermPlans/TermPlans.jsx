import React from 'react'
import { Children } from 'react/cjs/react.production.min'
import Button from '../Button/Button'
import "./TermPlans.css"


const TermPlans = ({ title, children }) => {
  return (
    <div className='TermPlans'>
      <h3>{title} Term Plans</h3>
      <div className='TermPlans__hr'>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>
        Choose your preferred plan to get started.
      </p>
      <section className='TermPlans__plans'>
        {children}
      </section>
    </div>
  )
}

export default TermPlans