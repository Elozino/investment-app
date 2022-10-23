import React from 'react'
import Button from '../Button/Button'
import TermPlans from '../TermPlans/TermPlans'

const FixedPlan = () => {
  return (
    <TermPlans title="Fixed">
      <div className='TermsPlan_container'>
        <div className='header__fixed'>
          <h4>Mercury</h4>
          <p>5% Weekly for 2 Weeks</p>
        </div>
        <div className='content'>
          <p>Amount: $15,000</p><hr />
          <div>
            <p>10% Referral Commission</p>
            <p>2 Weeks Contract Duration</p>
          </div>
          <hr />
          <Button title="GET STARTED" />
        </div>
      </div>
      <div className='TermsPlan_container'>
        <div className='header__fixed'>
          <h4>Venus</h4>
          <p>10% Weekly for 2 Weeks</p>
        </div>
        <div className='content'>
          <p>Amount: $25,000</p><hr />
          <div>
            <p>10% Referral Commission</p>
            <p>2 Weeks Contract Duration</p>
          </div>
          <hr />
          <Button title="GET STARTED" />
        </div>
      </div>
      <div className='TermsPlan_container'>
        <div className='header__fixed'>
          <h4>Jupiter</h4>
          <p>15% Weekly for 2 Weeks</p>
        </div>
        <div className='content'>
          <p>Amount: $40,000</p><hr />
          <div>
            <p>10% Referral Commission</p>
            <p>2 Weeks Contract Duration</p>
          </div>
          <hr />
          <Button title="GET STARTED" />
        </div>
      </div>
    </TermPlans>
  )
}

export default FixedPlan