import React from 'react'
import "./Security.css"
import Logo1 from "../../assets/geotrust.png"
import Logo2 from "../../assets/norton.png"
import Logo3 from "../../assets/mcafee.png"
import Logo4 from "../../assets/trustguard.png"

const Security = () => {
  return (
    <div className='Security'>
      <h3>Security</h3>
      <div className='TermPlans__hr'>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='Security__logos'>
        <div>
          <img src={Logo1} alt="logo" />
        </div>
        <div>
          <img src={Logo2} alt="logo" />
        </div>
        <div>
          <img src={Logo3} alt="logo" />
        </div>
        <div>
          <img src={Logo4} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Security