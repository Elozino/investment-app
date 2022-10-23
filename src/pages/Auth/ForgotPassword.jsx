import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebaseConfig';
import './Auth.css'

function ForgotPassword() {
  const [email, setEmail] = useState("")

  const sendPasswordReset = async (email) => {
    return sendPasswordResetEmail(auth, email)
      .then((a) => {
        alert("Password reset email sent")
      })
      .catch(err => console.log(err))
  };
  return (
    <div className='Auth'>
      <div className='Auth__Logo'>Trust Crypto Investment</div>
      <div
        className='Auth__Wrapper'
      >
        <h3>Forgot Password</h3>
        <p>Enter your email address</p>
        <form className='Auth__form'>
          <div>
            <label htmlFor="email">Email</label>
            <div className='Auth__Input'>
              <input type="email"
                placeholder='Enter your email address'
                id="email"
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => sendPasswordReset(email)}
            className='Auth__btn'>
            Submit
          </button>
        </form>
      </div>
      <footer className='Auth__footer'>
        <hr />
        <div className='Auth__footer-wrapper'>
          <div className='Auth__footer-link'>
            <ul>
              <li>
                <Link to="">FAQs</Link>
              </li>
              <li>
                <Link to="">Terms and Condition</Link>
              </li>
              <li>
                <Link to="">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className='Auth__footer-rights'>
            <p>Trust Crypto Investment © 2022. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div >
  )
}

export default ForgotPassword