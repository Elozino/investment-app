import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import "./DashboardLayout.css"
import { BsFillPersonFill, BsMenuButton } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Dashboard from '../../../pages/Dashboard/Dashboard'
import Transaction from '../../../pages/Transaction/Transaction'
import Investment from '../../../pages/Investment/Investment'
import OurPlans from '../../../pages/Plans/OurPlans'
import Profile from '../../../pages/Profile/Profile'
import { StateContext } from '../../../context/context'
import NavModal from "../../NavBar/NavModal"
import Deposit from '../../../pages/Funds/Deposit'
import Withdraw from '../../../pages/Funds/Withdraw'
import { MdMenu } from 'react-icons/md'
import { client } from '../../../features/sanityClient'

const DashboardLayout = () => {
  const [navModal, setNavModal] = useState(false)
  const [mobileSidebar, setMobileSidebar] = useState(true)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const { email, userName, setUserName, setBtc, setUsd } = useContext(StateContext)

  const renderScreen = () => {
    if (pathname === "/dashboard") {
      return <Dashboard />
    } else if (pathname === "/dashboard/transaction") {
      return <Transaction />
    } else if (pathname === "/dashboard/investment") {
      return <Investment />
    } else if (pathname === "/dashboard/ourplans") {
      return <OurPlans />
    } else if (pathname === "/dashboard/profile") {
      return <Profile />
    } else if (pathname === "/dashboard/deposit") {
      return <Deposit />
    } else if (pathname === "/dashboard/withdraw") {
      return <Withdraw />
    } else {
      // pathname = navigate.goBack()
    }
  }

  const fetchUser = async () => {
    await client.fetch(
      `*[_type == "user" && user_email == "${email}"]`
    )
      .then((result) => {
        const { user_full_name, user_email, user_btc, user_usd } = result[0]
        setUserName(user_full_name)
        setBtc(user_btc)
        setUsd(user_usd)
        console.log(result[0])
      })
      .catch((error) => console.log({ error }));
    return
  }

  useEffect(() => {
    console.log({ email })
    fetchUser()
  }, [])


  return (
    <div className='DashboardLayout'>
      <div className='DashboardLayout__Sidebar'>
        <Sidebar mobileSidebar={mobileSidebar} />
      </div>
      <div className='DashboardLayout__Main'>
        <div className='DashboardLayout__nav'>
          <div className='DashboardLayout__mobileNav' onClick={() => setMobileSidebar(prev => !prev)}>
            <MdMenu size={24} />
          </div>
          <div className='DashboardLayout__profileNav'>
            <div className="DashboardLayout__image">
              <BsFillPersonFill color="#cecece" />
            </div>
            <div className="DashboardLayout__person">
              <p className='verified'>Verified</p>
              <p
                onClick={() => setNavModal(!navModal)}
                style={{ display: "flex", alignItems: "center" }}>{userName?.split(" ")[0]} &nbsp;<IoIosArrowDown /></p>
            </div>
          </div>
          {navModal && <NavModal setNavModal={setNavModal} />}
        </div>

        {/* dashboard section */}
        <div className='Dashboard__Render'>
          {renderScreen()}
        </div>

        {/* footer section */}
        <div className='DashboardLayout__footer'>
          <div className='DashboardLayout__footer-link'>
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
          <div className='DashboardLayout__footer-rights'>
            <p>© BaniWaz {new Date().getFullYear()}. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout