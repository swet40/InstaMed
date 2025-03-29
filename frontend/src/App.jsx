import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Doctors from "./pages/Doctors.jsx"
import Login from "./pages/Login.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import MyProfile from "./pages/MyProfile.jsx"
import MyAppointments from "./pages/MyAppointments.jsx"
import Appointment from "./pages/Appointment.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import { ToastContainer } from 'react-toastify.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { Nearby } from "./pages/Nearby.jsx"
import { VideoMeetComponent } from "./pages/videoMeet.jsx"
import { useLocation } from "react-router-dom"

const App = () => {

  const location = useLocation();

  const shouldShowNavbarFooter = !location.pathname.startsWith('/video/');


  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer />
      {shouldShowNavbarFooter && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/doctors' element={<Doctors />}/>
        <Route path='/doctors/:speciality' element={<Doctors />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/my-profile' element={<MyProfile />}/>
        <Route path='/my-appointments' element={<MyAppointments />}/>
        <Route path='/appointment/:docId' element={<Appointment />}/>
        <Route path="/nearby" element={<Nearby />} />
        <Route path="/video/:url" element={<VideoMeetComponent />} />
      </Routes>
      {shouldShowNavbarFooter && <Footer />}
    </div>
  )
}

export default App
