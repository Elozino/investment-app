import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { auth, db } from '../../firebase/firebaseConfig';
import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, collection } from 'firebase/firestore';

const SignUp = () => {
  let navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    terms: false,
  })

  const changeHandle = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // useEffect(() => {
  //   if (loading) return;
  //   if (user) navigate("/dashboard");
  // }, [user, loading]);

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const res = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
      const user = res.user;
      console.log(user);
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        ...formData,
        usdAmount: 0.00,
        btcAmount: 0.00,
        authProvider: "local",
      });
      navigate("/dashboard")
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  }



  return (
    <div className='Auth'>
      <div className='Logo'>BANIWAZ</div>
      <div className='Auth__Wrapper'>
        <h3>Create an Account</h3>
        <p>Sign up with your email and get started with your free account.</p>
        <form className='Auth__form'>
          <div>
            <label htmlFor="fullname">Full Name</label>
            <div className='Auth__Input'>
              <input
                type="text"
                placeholder='Enter your Full Name'
                id="fullname"
                name='fullname'
                value={formData.name}
                onChange={changeHandle}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <div className='Auth__Input'>
              <input
                type="email"
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
              <input type="checkbox"
                id="terms"
                name="terms"
                value={formData.terms}
                onChange={(prev) => setFormData({
                  ...formData,
                  [prev.target.name]: prev.target.checked
                })
                }
              />
              <p>&nbsp; I have agree to the {" "} <Link to="">Terms & Condition</Link> </p>
            </div>
          </div>
          <button
            onClick={handleSignup}
            className='Auth__btn'>Sign Up</button>
          <div className='Auth__create'>
            <p>
              Already have an account?
              <Link to="/signin"> Sign in instead</Link>
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

export default SignUp