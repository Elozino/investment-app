import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StateContext } from '../../context/context';
import { auth } from '../../firebase/firebaseConfig';
import './Auth.css'



const SignIn = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false
  })
  const { setEmail } = useContext(StateContext)

  const changeHandle = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then(res => {
          setEmail(formData?.email)
          console.log(res.user)
        })
      navigate("/dashboard")
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  }

  return (
    <div className='Auth'>
      <div className='Auth__Logo'>BANIWAZ</div>
      <div className='Auth__Wrapper'>
        <h3>Login into Account</h3>
        <p>Sign in into your account using email and passcode</p>
        <form onSubmit={handleLogin} className='Auth__form'>
          <div>
            <label htmlFor="email">Email</label>
            <div className='Auth__Input'>
              <input type="email"
                placeholder='Enter your email address'
                id="email"
                name='email'
                value={formData.email}
                onChange={changeHandle}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <div className='Auth__Input'>
              <input
                type="password"
                placeholder='Enter your passcode'
                id="password"
                name='password'
                value={formData.password}
                onChange={changeHandle}
                required
              />
            </div>
          </div>
          <div className='Auth__checkbox-wrapper'>
            <div className='Auth__checkbox'>
              <input type="checkbox" />
              <p>&nbsp; Remember Me</p>
            </div>
            <div>
              <Link to="/forgot-password">Forgot Passcode?</Link>
            </div>
          </div>
          <button
            onClick={handleLogin}
            className='Auth__btn'>Login</button>
          <div className='Auth__create'>
            <p>
              New on our platform?
              <Link to="/signup">&nbsp; Create an account</Link>
            </p>
          </div>
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
            <p>Secure Trade Firm © 2022. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SignIn