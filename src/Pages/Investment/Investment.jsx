import React from 'react'
import "./Investment.css"
import { Link } from "react-router-dom"
import { BsArrowRight } from 'react-icons/bs'
import { IoIosAlert } from 'react-icons/io'
import { MdOutlineHistoryEdu } from 'react-icons/md'
import { GiNotebook } from "react-icons/gi"

const Investment = () => {
  return (
    <div className="Investment">
      <header>
        <div>
          <h5>Investment</h5>
          <h2>Invested Plans</h2>
          <small>At a glance summary of your investment.</small>
        </div>
        <div className='Investment__headerBtn'>
          <Link to='/dashboard/deposit' className='deposit'>Deposit Funds
            <BsArrowRight size={16} style={{ marginLeft: "10px" }} />
          </Link>
          <button className='invest'>Invest & Earn
            <BsArrowRight size={16} style={{ marginLeft: "10px" }} />
          </button>
        </div>
      </header>
      <section className='Investment__cardContainer'>
        <div className="Investment__card Investment__account">
          <div className='Investment__cardHeader'>
            <p>Investment Account <IoIosAlert /></p>
          </div>
          <div className='Investment__cardInfo'>
            <div>
              <p>0.00 USD</p>
              <small>Available Funds</small>
            </div>
            <div>
              +
            </div>
            <div>
              <p>0.00 USD</p>
              <small>Available Funds</small>
            </div>
          </div>
          <div className='Investment__btn'>
            <button>Transfer funds<BsArrowRight /></button>
          </div>
        </div>
        <div className="Investment__card">
          <div className='Investment__cardHeader'>
            <p>Amount in Invested <IoIosAlert /></p>
          </div>
          <div className='Investment__cardInfo'>
            <div>
              <p>0.00 USD</p>
              <small>Currently Invested</small>
            </div>
            <div>
              +
            </div>
            <div>
              <p>0.00 USD</p>
              <small>Approx Profit</small>
            </div>
          </div>
          <hr />
          <div className='transBtn'>
            <button><GiNotebook /> &nbsp; Transaction</button>
            <button><MdOutlineHistoryEdu /> &nbsp; History</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Investment