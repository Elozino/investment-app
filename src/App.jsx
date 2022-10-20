import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home"
import About from './pages/About/About'
import Affiliate from './pages/Affiliate/Affiliate'
import FAQs from './pages/FAQs/FAQs'
import Terms from './pages/Terms/Terms'
import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/SignUp'
import DashboardLayout from './components/DashBoard/DashboardLayout/DashboardLayout'
import ForgotPassword from './pages/Auth/ForgotPassword'
import { StateContext } from './context/context'
import { useContext } from 'react'
import NotFound from './pages/NotFound'

function App() {
  const { userId } = useContext(StateContext)

  return (
    <div className="App">
      {userId === null ?
        (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/*" element={<SignIn/>} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/dashboard/*" element={<DashboardLayout />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        )
      }
    </div>
  )
}

export default App
