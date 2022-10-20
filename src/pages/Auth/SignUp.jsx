import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { auth, db } from '../../firebase/firebaseConfig';
import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, collection } from 'firebase/firestore';
import { StateContext } from '../../context/context';
import { client } from '../../features/sanityClient';

const SignUp = () => {
  let navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    terms: false,
  })

  const { userId, setUserId, setUserName, setEmail } = useContext(StateContext)

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

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      const res = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
      await setUserId(() => res.user.uid)
      await setUserName(formData?.fullname)
      await setEmail(formData?.email)
      await client.create({
        _type: "user",
        user_id: res.user.uid,
        user_full_name: formData?.fullname,
        user_email: formData?.email,
        user_btc: 0,
        user_usd: 0
      })
      // const user = res.user;
      // console.log(user);
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
                value={formData.fullname}
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
              <p>&nbsp; I have agree to the {" "} <Link to="/terms">Terms & Condition</Link> </p>
            </div>
          </div>
          <button
            onClick={handleSignUp}
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
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/terms">Terms and Condition</Link>
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