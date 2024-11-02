import "./App.css";
import { Footer } from "./components/Footer.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { AboutUs } from "./pages/AboutUs.jsx";
import { Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home.jsx";
import { ContactUs } from "./pages/ContactUs.jsx";
import { AllDoctors } from "./pages/AllDoctors.jsx";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alldoctors" element={<AllDoctors />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        
        <Footer />
      </div>
    </>
  );
}

export default App;
