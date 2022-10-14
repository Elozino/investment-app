import React from 'react'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import Security from '../../components/SecuritySec/Security'
import "./About.css"

const About = () => {
  return (
    <div className='AboutPage'>
      <NavBar />
      <Banner title="About Us" title1="About Secure Trade Firm" />
      <div className='AboutPage__content'>
        <h2>About Secure Trade Firm</h2>
        <p>
          Secure Trade Firm is a distinctive investment company offering our investors access to high-growth investment opportunities in Bitcoin markets and other services. We implement best practices of trading & mining of Bitcoins through our operations, while offering flexibility in our investment plans. Our company benefits from an extensive network of global clients. At Secure Trade Firm campany, we emphasize on understanding our client’s requirement and providing suitable solutions to meet their investment criteria. Our aim is to utilize our expertise & knowledge which will benefit our clients and the users of our services. Our company believes that when a team outperforms expectations, excellence becomes a reality.
        </p>
        <p>
          Our Company's head office is located at "Bahnhofstrasse 21 6300 Zug Switzerland"
        </p>
        <p>
          Established in the year 2002 and legally registered with the Switzerland Securities & Investment company with CHE-110.277.638.
        </p>
      </div>
      <Security />
      <Footer />
    </div>
  )
}

export default About