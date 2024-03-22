import React from "react";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import LoginDonar from "./components/LoginDonar";
import SignupDonar from "./components/SignupDonar";
import MainScreen from "./components/MainScreen";
import LoginPatient from "./components/LoginPatient";
import LoginAdmin from "./components/LoginAdmin";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import PatientInside from "./components/PatientInside";
import DonarInside from "./components/DonarInside";
import AddBloodGroup from "./components/AddBloodGroup";
import NotFound from "./components/NotFound"; // Import the NotFound component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainScreen />} />
        <Route path="/patientlogin" element={<LoginPatient />} />
        <Route path="/donarlogin" element={<LoginDonar />} />
        <Route path="/signup" element={<SignupDonar />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} /> {/* Added leading slash */}
        <Route path="/adminlogin" element={<LoginAdmin />} /> {/* Added leading slash */}
        <Route path="/patientinside" element={<PatientInside />} />
        <Route path="/donarinside" element={<DonarInside />} />
        <Route path="/addbloodgroup" element={<AddBloodGroup />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for NotFound */}
      </Routes>
    </Router>
  );
}

export default App;
