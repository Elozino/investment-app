import React from 'react'
import About from '../../components/About/About'
import FixedPlan from '../../components/FixedPlan/FixedPlan'
import Footer from '../../components/Footer/Footer'
import HomePage from '../../components/HomePage/HomePage'
import LongPlan from '../../components/LongPlan/LongPlan'
import NavBar from '../../components/NavBar/NavBar'
import Security from '../../components/SecuritySec/Security'
import ShortPlan from '../../components/ShortPlan/ShortPlan'
import Solution from '../../components/Solution/Solution'
import TermPlans from '../../components/TermPlans/TermPlans'
import TopServices from '../../components/TopServices/TopServices'
import "./Home.css"

const Home = () => {
  return (
    <div className='Home'>
      <NavBar />
      <HomePage />
      <div style={{ background: "#FBBD18", height: "40px", borderBottom: "5px solid #000" }}></div>
      <About />
      <TopServices />
      <Solution />
      <ShortPlan />
      <FixedPlan />
      <LongPlan />
      <Security />
      <Footer />
    </div>
  )
}

export default Home