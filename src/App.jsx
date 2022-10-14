import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home"
import About from './pages/About/About'
import Affiliate from './pages/Affiliate/Affiliate'
import FAQs from './pages/FAQs/FAQs'
import Terms from './pages/Terms/Terms'
// import Dashboard from './pages/Dashboard/Dashboard'
import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/SignUp'
// import Transaction from './pages/Transaction/Transaction'
// import Investment from './pages/Investment/Investment'
// import OurPlans from './pages/Plans/OurPlans'
// import Profile from './pages/Profile/Profile'
import DashboardLayout from './components/DashBoard/DashboardLayout/DashboardLayout'
import ForgotPassword from './pages/Auth/ForgotPassword'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/dashboard/*" element={<DashboardLayout />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route path="/transaction" element={<Transaction />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/ourplans" element={<OurPlans />} />
        <Route path="/profile" element={<Profile />} /> */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
