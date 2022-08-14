import React from 'react'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import Security from '../../components/SecuritySec/Security'
import "./Affiliate.css"

const Affiliate = () => {
  return (
    <div>
      <NavBar />
      <Banner title="Affiliate Program" title1="Affiliate Program" />
      <section className='Affiliate__content'>
        <h2>Our Affiliate Program</h2>
        <p>The company's growth is difficult to imagine without the help of numerous customers and partners. Many of them have been cooperated with us before and know about our capabilities, they helped us in shaping of business strategy and bringing the first investment in trust management. Today, any of our clients can be our partner and even earn through affiliate link. After registration each user receives a unique affiliate link (which contains his username). You can use this link for registration of new investors. Just send this link to your friend via email. Once your friend clicks a link and signs up, he becomes your referral.</p>
        <div className='Affiliate__quote'>
          <blockquote>The first deposit of your referral will bring you a reward of 10% of the deposited amount .</blockquote>
        </div>
        <p>Affiliate commission is accrued automatically after addition of deposit. You can use this amount at your discretion - to withdraw it or use it for new deposit. To become an affiliate and start earning money, you don't even need to have your own active deposit. However, we remind you that the best evidence of successful investing is always a personal experience.</p>
      </section>
      <Security />
      <Footer />
    </div>
  )
}

export default Affiliate