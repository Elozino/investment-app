import React, { useContext } from 'react'
import AccountCard from '../../components/DashBoard/AccountCard/AccountCard'
import "./Dashboard.css"
import { TiWarning } from "react-icons/ti"
import { IoIosAlert } from 'react-icons/io'
import { BsArrowRight } from 'react-icons/bs'
import FundsCard from '../../components/DashBoard/FundsCard/FundsCard'
import { StateContext } from '../../context/context'
import { Link } from 'react-router-dom'



const Dashboard = () => {
  const { userName, usd } = useContext(StateContext)
  return (
    <div className='Dashboard'>
      <header>
        <div>
          <h5>Welcome!</h5>
          <h2>{userName}</h2>
          <small>Here's a summary of your account. Have fun!</small>
        </div>
        <div className='Dashboard__headerBtn'>
          <button className='invest'>Invest & Earn
            <BsArrowRight size={18} style={{ marginLeft: "10px" }} />
          </button>
          <Link to="/dashboard/deposit">
            <button className='deposit'>Deposit
              <BsArrowRight size={18} style={{ marginLeft: "10px" }} />
            </button>
          </Link>
        </div>
      </header>
      <section>
        <AccountCard
          icon={<TiWarning color="#F4BD0E" />}
          color="#fff"
          bg="#F4BD0E"
          title="Add an Account that you'd like to receive payment or withdraw fund."
          BtnTitle="Add account"
        />
        <AccountCard
          icon={<IoIosAlert color="#037DFF" />}
          bg="transparent"
          color="#037DFF"
          title="Update your account information from your profile to complete account setup."
          BtnTitle="Update Profile"
        />
      </section>
      <section className='Dashboard__fundscard'>
        <FundsCard
          title="Available Balance"
          duration="INVESTMENT ACCOUNT"
          usdAmount={usd}
          bg="#037DFF"
        />
        <FundsCard
          title="Total Deposit"
          duration="THIS MONTH"
          bg="#364A63"
        />
        <FundsCard
          title="Total Withdrawal"
          duration="THIS MONTH"
          bg="#F4BD0E"
        />
      </section>
    </div>
  )
}

export default Dashboard