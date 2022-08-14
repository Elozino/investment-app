import React from 'react'
import "./TopServices.css"
import Icon1 from "../../assets/bitcoin-inside.png"
import Icon2 from "../../assets/OrbitSquare.png"

const TopServices = () => {
  return (
    <article className='TopServices'>
      <h3>Our Top Services</h3>
      <div className='TopServices__hr'>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>
        We Provide Exceptional Products That Allows Us To Maximize Efficiency
      </p>
      <section className='TopServices__service'>
        <div>
          <img src={Icon1} alt="icon" />
          <div>
            <h4>Cryptocurrency</h4>
            <p>Cryptocurrency, sometimes called crypto-currency or crypto, is any form of currency that exists digitally or virtually and uses cryptography to secure transactions. Cryptocurrencies don't have a central issuing or regulating authority, instead using a decentralized system to record transactions and issue new units.</p>
          </div>
        </div>
        <div>
          <img src={Icon2} alt="icon" />
          <div>
            <h4>
              Stocks & Bonds
            </h4>
            <p>Stocks give you partial ownership in a corporation, while bonds are a loan from you to a organization or government. The biggest difference between them is how they generate profit: stocks must appreciate in value and be sold later on the stock market, while most bonds pay fixed interest over time.</p>
          </div>
        </div>
      </section>
    </article>
  )
}

export default TopServices