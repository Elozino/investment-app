import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import "./NavBar.css"
import { TiThMenu } from "react-icons/ti"
import { StateContext } from '../../context/context'

const NavBar = () => {
  let navigate = useNavigate();
  const [menu, setMenu] = useState(false)
  const { userId } = useContext(StateContext)

  const handleAuth = (e) => {
    e.preventDefault()
    if (userId == null) {
      navigate("/signup")
    } else {
      navigate("/signin")
    }
  }

  return (
    <nav className='navBar'>
      <div className='navBar__logo'>
        <Link to="/">Trust Crypto Investment</Link>
      </div>
      <div className='navBar__navLink'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/affiliate">Affliate</Link>
          </li>
          <li>
            <Link to="/faqs">FAQs</Link>
          </li>
          <li>
            <Link to="/terms">Terms</Link>
          </li>
        </ul>
      </div>
      {menu &&
        <div className='navBar__navLink-mobile'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/affiliate">Affliate</Link>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/terms">Terms</Link>
            </li>
            <li>
              <div onClick={handleAuth}>
                <Button title={userId == null ? "SIGN UP" : "SIGN IN"} color="white" />
              </div>
            </li>

          </ul>
        </div>
      }
      <div onClick={() => {
        setMenu(prev => !prev)
      }} className="navBar__menuIcon">
        <TiThMenu size="20" />
      </div>
      <div onClick={handleAuth} className='navBar__webBtn'>
        <Button title={userId == null ? "SIGN UP" : "SIGN IN"} color="white" />
      </div>
    </nav>
  )
}

export default NavBar
