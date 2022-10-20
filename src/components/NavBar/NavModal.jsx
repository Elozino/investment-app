import React from 'react'
import "./NavModal.css"
import { Link } from "react-router-dom"
import { authLogout } from '../../firebase/auth'

function NavModal({ setNavModal }) {
  return (
    <div className="NavModal" onClick={() => setNavModal(prev => !prev)}>
      <div>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div>
        <Link to="/dashboard/transaction">Transaction</Link>
      </div>
      <div>
        <Link to="/dashboard/investment">Investment</Link>
      </div>
      <div>
        <Link to="/dashboard/ourplans">Our Plans</Link>
      </div>
      <div>
        <Link to="/dashboard/profile">Profile</Link>
      </div>
      <hr />
      <div onClick={authLogout}>
        <Link to="/signin">Logout</Link>
      </div>
    </div>
  )
}

export default NavModal