import React from 'react'
import "./Solution.css"
import Icon1 from "../../assets/Time_1.png"
import Icon2 from "../../assets/Cloud-Based.png"
import Icon3 from "../../assets/No-transaction-fees.png"
import Icon4 from "../../assets/Instant-operations.png"

const Solution = () => {
  return (
    <div className='Solution'>
      <h2>Benefits of Using <span>Our Solution</span></h2>
      <div className='Solution__benefits'>
        <div>
          <img src={Icon1} alt="icon" />
          <h3>Easy Transactions</h3>
          <p>
            Secure Trade Firm crypto transactions are made easily, at low cost, and in a manner more private than most other transactions. Using a simple smartphone app, hardware wallet, or exchange wallet, anyone can send and receive a variety of cryptocurrencies.
          </p>
        </div>
        <div>
          <img src={Icon2} alt="icon" />
          <h3>Exponential Industry Growth</h3>
          <p>The cryptocurrency industry has been one of the fastest-growing markets that most of us have seen in our lifetimes. Being involved now might reasonably be compared to being involved with companies on the leading edge of the internet back in the 1990s and early 2000s.</p>
        </div>
        <div>
          <img src={Icon3} alt="icon" />
          <h3>Portfolio Diversification</h3>
          <p>Cryptocurrency has become known as a non-correlated asset class. Crypto markets largely function independently of other markets, and their price action tends to be determined by factors other than those affecting stocks, bonds, and commodities.</p>
        </div>
        <div>
          <img src={Icon4} alt="icon" />
          <h3>Transactional Freedom</h3>
          <p>
            One of the great benefits of Secure Trade Firm Investments is that it can be used to exchange value between two parties. This can be done independently of any third-party, making the transaction freer and censorship-resistant.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Solution