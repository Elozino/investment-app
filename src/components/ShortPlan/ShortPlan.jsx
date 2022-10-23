import React from 'react'
import Button from '../Button/Button'
import TermPlans from '../TermPlans/TermPlans'

const ShortPlan = () => {
  return (
    <TermPlans title="Short">
        <div className='TermsPlan_container'>
          <div className='header'>
            <h4>Standard Plan</h4>
            <p>Entry level of investment & earn money.</p>
          </div>
          <div className='content'>
            <p>Minimum Deposit: $300</p><hr />
            <p>Maximum Deposit: $1,000</p><hr />
            <p>5% Daily for 4 Days</p><hr />
            <Button title="GET STARTED" />
          </div>
        </div>
        <div className='TermsPlan_container'>
          <div className='header'>
            <h4>Premium Plan</h4>
            <p>Medium level of investment & earn money.</p>
          </div>
          <div className='content'>
            <p>Minimum Deposit: $1,000</p><hr />
            <p>Maximum Deposit: $3,000</p><hr />
            <p>7% Daily for 4 Days</p><hr />
            <Button title="GET STARTED" />
          </div>
        </div>
        <div className='TermsPlan_container'>
          <div className='header'>
            <h4>Professional Plan</h4>
            <p>Exclusive level of investment & earn money.</p>
          </div>
          <div className='content'>
            <p>Minimum Deposit: $3,000</p><hr />
            <p>Maximum Deposit: $10,000</p><hr />
            <p>10% Daily for 4 Days</p><hr />
            <Button title="GET STARTED" />
          </div>
        </div>
    </TermPlans>
  )
}

export default ShortPlan