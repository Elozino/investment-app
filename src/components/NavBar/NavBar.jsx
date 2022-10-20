import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import "./NavBar.css"
import { TiThMenu } from "react-icons/ti"

const NavBar = () => {
  let navigate = useNavigate();
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [menu, setMenu] = useState(true)
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const handleAuth = (e) => {
    e.preventDefault()
    navigate("/signin")
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
        <Link to="/">BANIWAZ</Link>
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
                <Button title="SIGN IN" color="white" />
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
          <Button title="SIGN IN" color="white" />
        </div>
      }
    </nav>
  )
}

export default NavBar
