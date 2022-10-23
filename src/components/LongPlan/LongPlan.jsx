import React from 'react'
import Button from '../Button/Button'
import TermPlans from '../TermPlans/TermPlans'

const LongPlan = () => {
  return (
    <TermPlans title="Long">
      <div className='TermsPlan_container'>
        <div className='header__long'>
          <h4>Investment X1</h4>
          <p>40% Yearly for 1 Year</p>
        </div>
        <div className='content'>
          <p>Amount: $500,000</p><hr />
          <div>
            <p>15% Referral Commission</p>
            <p>1 Year Contract Duration</p>
          </div>
          <hr />
          <Button title="GET STARTED" />
        </div>
      </div>
      <div className='TermsPlan_container'>
        <div className='header__long'>
          <h4>Investment X2</h4>
          <p>55% Yearly for 2 Year</p>
        </div>
        <div className='content'>
          <p>Amount: $1,000,000</p><hr />
          <div>
            <p>15% Referral Commission</p>
            <p>2 Years Contract Duration</p>
          </div>
          <hr />
          <Button title="GET STARTED" />
        </div>
      </div>
      <div className='TermsPlan_container'>
        <div className='header__long'>
          <h4>Investment X3</h4>
          <p>70% Yearly for 1 Year</p>
        </div>
        <div className='content'>
          <p>Amount: $2,500,000</p><hr />
          <div>
            <p>15% Referral Commission</p>
            <p>3 Years Contract Duration</p>
          </div>
          <hr />
          <Button title="GET STARTED" />
        </div>
      </div>
    </TermPlans>
  )
}

export default LongPlan