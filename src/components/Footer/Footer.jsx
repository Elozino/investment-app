import React from 'react'
import "./Footer.css"
import Icon from "../../assets/money-back.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='Footer'>
        <section className='Footer__links'>
          <div>
            <h3>Quick Links To Buy Bitcoin In OTHERS</h3>
            <div className='Footer__line'>
              <div className='Footer__line1'></div>
              <div className='Footer__line2'></div>
            </div>
            <ul>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">Coin Mama</a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">PayBis</a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">Coin Base</a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">Luno</a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">Xcoin</a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">kraken</a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">Binance</a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">Bit2me</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Quick Links To Buy Bitcoin In OTHERS</h3>
            <div className='Footer__line'>
              <div className='Footer__line1'></div>
              <div className='Footer__line2'></div>
            </div>
            <ul>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">Coin Mama</a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">PayBis</a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">Coin Base</a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">Luno</a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">Xcoin</a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">kraken</a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">Binance</a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">Bit2me</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Quick Links To Buy Bitcoin In OTHERS</h3>
            <div className='Footer__line'>
              <div className='Footer__line1'></div>
              <div className='Footer__line2'></div>
            </div>
            <ul>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">Coin Mama</a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">PayBis</a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">Coin Base</a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">Luno</a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">Xcoin</a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">kraken</a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">Binance</a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">Bit2me</a>
              </li>
            </ul>
          </div>
        </section>
        <section className="Footer__moneyBack">
          <img src={Icon} alt="icon" />
        </section>

      </footer>
      <section className='Footer__footer'>
        <div>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/affiliate">Affiliate</Link>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/terms">Terms {" "}</Link>
            </li>
          </ul>
        </div>
        <div>© {new Date.getFullYear()}BaniWaz</div>
      </section>
      <a href="http://" target="_blank" rel="noopener noreferrer"></a>
    </>
  )
}

export default Footer