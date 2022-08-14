import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import "./DashboardLayout.css"
import { BsFillPersonFill, BsMenuButton } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Dashboard from '../../../Pages/Dashboard/Dashboard'
import Transaction from '../../../Pages/Transaction/Transaction'
import Investment from '../../../Pages/Investment/Investment'
import OurPlans from '../../../Pages/Plans/OurPlans'
import Profile from '../../../Pages/Profile/Profile'
import { auth, db } from '../../../firebase/firebaseConfig'
import { signOut } from 'firebase/auth'
import { StateContext } from '../../../context/context'
import { collection, getDocs, query, where } from 'firebase/firestore'
import NavModal from "../../NavBar/NavModal"
import Deposit from '../../../Pages/Funds/Deposit'
import Withdraw from '../../../Pages/Funds/Withdraw'
import { MdMenu } from 'react-icons/md'

const DashboardLayout = () => {
  const [navModal, setNavModal] = useState(false)
  const { userName, setuserName, setEmail, setUsd, setBtc } = useContext(StateContext)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const getUser = async () => {
    const currentUserId = auth?.currentUser?.uid;
    console.log(currentUserId);
    const q = query(
      collection(db, "users"),
      where("uid", "==", currentUserId)
    );
    // doc.data() is never undefined for query doc
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setuserName(doc.data().fullname);
      setEmail(doc.data().email);
      setUsd(doc.data().usdAmount);
      setBtc(doc.data().btcAmount);
    });
  };

  useEffect(() => {
    getUser()
  }, [])

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
    }
  }

  const logout = async () => {
    await signOut(auth);
    navigate("/signin")
  };

  return (
    <div className='DashboarLayout'>
      <div className='DashboarLayout__Siderbar'>
        <Sidebar />
      </div>
      <div className='DashboarLayout__Main'>
        <div className='DashboarLayout__nav'>
          <div className='DashboarLayout__mobileNav'>
            <MdMenu size={24} />
          </div>
          <div className='DashboarLayout__profileNav'>
            <div className="DashboardLayout__image">
              <BsFillPersonFill color="#cecece" />
            </div>
            <div className="DashboardLayout__person">
              <p className='verified'>Verified</p>
              <p
                onClick={() => setNavModal(!navModal)}
                style={{ display: "flex", alignItems: "center" }}>{userName} &nbsp;<IoIosArrowDown /></p>
            </div>
          </div>
          {navModal && <NavModal />}
        </div>
        <>
          {renderScreen()}
        </>
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