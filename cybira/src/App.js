// import React from 'react';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import CloudArchitecture from './pages/Cloud_architecture';
import SecurityArchitecture from './pages/Security_architecture';
import DevOps from './pages/DevOps';
import WebDev from './pages/WebDev';
import DigitalMarketing from './pages/DigitalMarketing';
import MedicalCoding from './pages/MedicalCoding';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-back',
      once: true,
    });

    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cloud_architecture" element={<CloudArchitecture />} />
        <Route path="/Security_architecture" element={<SecurityArchitecture />} />
        <Route path="/DevOps" element={<DevOps />} />
        <Route path="/WebDev" element={<WebDev />} />
        <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
        <Route path="/MedicalCoding" element={<MedicalCoding />} />
      </Routes>
    </Router>
  );
}
export default App;
