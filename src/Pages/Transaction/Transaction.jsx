import React from 'react'
import "./Transaction.css"
import { BsArrowRight } from 'react-icons/bs'

const Transaction = () => {
  return (
    <div className='Transaction'>
      <header>
        <div>
          <h5>History</h5>
          <h2>Transactions</h2>
          <small>List of transactions in your account.</small>
        </div>
        <div className='Transaction__headerBtn'>
          <button className="Transaction__deposit">Deposit
            <BsArrowRight size={18} style={{ marginLeft: "10px" }} />
          </button>
        </div>
      </header>
      <section className='Transaction__transContent'>
        <div className='Transaction__transHeader'>
          <p className='Transaction__transTitle active'>History</p>
          <p className='Transaction__transTitle'>Deposit</p>
          <p className='Transaction__transTitle'>Withdraw</p>
        </div>
        <div className='Transaction__history'>
          <div className='Transaction__historyContent'>
            No Transaction Found!
          </div>
        </div>
      </section>
    </div>
  )
}

export default Transaction