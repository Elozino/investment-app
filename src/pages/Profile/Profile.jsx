import React, { useState } from 'react'
import "./Profile.css"
import Account from '../../components/DashBoard/Account/Account'
import Activity from '../../components/DashBoard/Activity/Activity'
import Settings from '../../components/DashBoard/Settings/Settings'
import { Link, useLocation } from 'react-router-dom'
import ProfileDetails from '../../components/DashBoard/ProfileSettings/ProfileDetails'

const Profile = () => {
  const { pathname } = useLocation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [clicked, setClicked] = useState(false)
  // console.log(pathname);
  // console.log(window.location.href);

  const renderScreen = () => {
    if (currentIndex === 0) {
      return <ProfileDetails />
    } else if (currentIndex === 1) {
      return <Account />
    } else if (currentIndex === 2) {
      return <Settings />
    } else if (currentIndex === 3) {
      return <Activity />
    }
  }

  let links = ["Profile", "Accounts", "Security", "Activity"]

  return (
    <div className='Profile'>
      <header>
        <h2>Profile Info</h2>
        <small>You have full control to manage your own account setting.</small>
      </header>
      <section className='Profile__profileContent'>
        <div className='Profile__profileHeader'>
          {links.map((link, index) => (
            <p
              key={index}
              onClick={() => { setCurrentIndex(index) }}
              className={currentIndex == index ? `Profile__profileTitle active` : "Profile__profileTitle"}
            >
              <Link to="profile">{link}</Link>
            </p>
          ))}
        </div>
      </section>
      {renderScreen()}
      {/* <Account /> */}
      {/* <Activity /> */}
      {/* <Settings /> */}

    </div>
  )
}

export default Profile