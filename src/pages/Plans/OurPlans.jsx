import React from 'react'
import "./OurPlans.css"
import { plan } from '../../data/plans'


const OurPlans = () => {
  return (
    <div className="OurPlans">
      <header>
        <h3>Investment Plans</h3>
        <p>Here is our several investment plans. You can invest daily, weekly or yearly and get higher returns in your investment.</p>
        <small>Choose your favourite plan and start earning now.</small>
      </header>
      <section className='OurPlans__cardContainer'>
        {plan.map((item, i) => (
          <div className="OuPlans__card">
            <h4>{item.planType}</h4>
            <div className='OuPlans__cardPeriod'>
              <div>
                <p>{item.hrInterest}</p>
                <small>Hourly Interest</small>
              </div>
              <div>
                <p>{item.term}</p>
                <small>{item.termPeriod}</small>
              </div>
            </div>
            <hr />
            <div className='OuPlans__cardPlans'>
              <div>
                <p>Deposit Amount</p>
                <p>-</p>
                <p>{item.depositAmount}</p>
              </div>
              <div>
                <p>Deposit Type</p>
                <p>-</p>
                <p>{item.depositType}</p>
              </div>
              <div>
                <p>Capital Return</p>
                <p>-</p>
                <p>{item.capitalReturn}</p>
              </div>
              <div>
                <p>Total Return</p>
                <p>-</p>
                <p>{item.percentReturn}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default OurPlans