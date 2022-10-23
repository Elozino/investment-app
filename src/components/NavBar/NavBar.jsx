import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import "./NavBar.css"
import { TiThMenu } from "react-icons/ti"
import { StateContext } from '../../context/context'

const NavBar = () => {
  let navigate = useNavigate();
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [menu, setMenu] = useState(true)
  const { userId } = useContext(StateContext)


  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const handleAuth = (e) => {
    e.preventDefault()
    if (userId == null) {
      navigate("/signup")
    } else {
      navigate("/signin")
    }
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowSize]);

  return (
    <nav className='navBar'>
      <div className='navBar__logo'>
        <Link to="/">Trust Crypto Investment</Link>
      </div>
      <div className='navBar__navLink'
        style={{ display: menu && "none" }}
      >
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
          {windowSize.innerWidth <= "720" &&
            <li>
              <div onClick={handleAuth}>
                <Button title={userId == null ? "SIGN UP" : "SIGN IN"} color="white" />
              </div>
            </li>
          }
        </ul>
      </div>

      {windowSize.innerWidth <= "720" &&
        <div onClick={() => setMenu(!menu)}>
          <TiThMenu size="20" />
        </div>
      }
      {windowSize.innerWidth > "720" &&
        <div onClick={handleAuth}>
          <Button title={userId == null ? "SIGN UP" : "SIGN IN"} color="white" />
        </div>
      }
    </nav>
  )
}

export default NavBar
