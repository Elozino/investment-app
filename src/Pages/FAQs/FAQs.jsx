import React, { useState } from 'react'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import Security from '../../components/SecuritySec/Security'
import { faqs } from '../../Data/faqs'
import "./FAQs.css"

const FAQs = () => {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)


  return (
    <div>
      <NavBar />
      <Banner title="FAQs" title1="FAQs" />
      <section className='Faqs__content'>
        <h3>Frequently Asked Questions</h3>
        <div className='Faqs__content_linewrapper'>
          <div className='Faqs__content_line'>
            <div className='Faqs__content_line1'></div>
            <div className='Faqs__content_line2'></div>
            <div className='Faqs__content_line3'></div>
          </div>
        </div>
        {faqs.map((faq, index) => (
          <div key={index} className='Faqs__content__item'>
            <div className='faqs__content__item__title'>
              <div>
                <p>{faq.faqs}</p>
              </div>
              <div
                onClick={() => {
                  setActiveIndex(index)
                  setOpen(prev => !prev)
                }}>
                @
              </div>
            </div>
            <div style={{ display: activeIndex == index && open ? "block" : "none" }}
              className='faqs__content__item__answer'>
              <p>{faq.answer}</p>
            </div>
            <br />
          </div>
        ))
        }
      </section >
      <Security />
      <Footer />
    </div >
  )
}

export default FAQs