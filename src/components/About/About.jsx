import React from 'react'
import Button from '../Button/Button'
import "./About.css"
import PlayBtn from "../../assets/playbtn.png"

const About = () => {
  return (
    <div className='About'>
      <div className='About__header'>
        <div className='About__headerWrapper'>
          <h1>About</h1>
          <p>Secure Trade Firm?</p>
          <hr />
        </div>
        <div className='About__headerWrapper1'>
          <img src={PlayBtn} alt="icon" />
          <p>
            Licensed and regulated across multiple jurisdictions, we serve clients in over 150 countries worldwide.
          </p>
        </div>
      </div>
      <section className='About__content'>
        <p>We are an international financial organization engaged in investment activities, which are related to trading on financial markets and cryptocurrency exchanges performed by qualified professional traders.</p>
        <p>Our goal is to provide our investors with a reliable source of high income, while minimizing any possible risks and offering a high-quality service, allowing us to automate and simplify the relations between the investors and the trustees. We work towards increasing your profit margin by profitable investment. We look forward to you being part of our community.</p>
        <Button title="LEARN MORE"/>
      </section>
    </div>
  )
}

export default About