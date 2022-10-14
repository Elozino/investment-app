import React from 'react'
import Button from '../Button/Button'
import "./HomePage.css"
import Person from "../../assets/person.png"
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <article className='homePage'>
      <section className='homePage__textContent'>
        <h3>Secure Trade Firm - We provide you with necessary features that will make your crypto experience better.</h3>
        <p>Invest in an Industry leading, reliable and professional organization. We provide you with the necessary features that will make your experience better. We also guarantee the fastest and the most exciting returns on your investments with high end security layers to make your transactions safer.</p>
        <Link to="/signup">
          <Button title="GET STARTED" />
        </Link>
      </section>
      <section className='homePage__img'>
        <img src={Person} alt="person" />
      </section>
    </article>
  )
}

export default HomePage