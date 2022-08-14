import React from 'react'
import "./NavModal.css"
import { Link } from "react-router-dom"

function NavModal() {
  return (
    <div className="NavModal">
      <div>
        <Link to="">Dashboard</Link>
      </div>
      <div>
        <Link to="">Transaction</Link>
      </div>
      <div>
        <Link to="">Investment</Link>
      </div>
      <div>
        <Link to="">Our Plans</Link>
      </div>
      <div>
        <Link to="">Profile</Link>
      </div>
      <hr />
      <div>LogOut</div>
    </div>
  )
}

export default NavModal