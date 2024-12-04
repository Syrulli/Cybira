import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/Home';
import About from './pages/Cloud_architecture';
import Contact from './pages/Security_architecture';
function App() {
  AOS.init({
    duration: 1000,
    easing: 'ease-out-back',
    once: true,
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cloud_architecture" element={<About />} />
        <Route path="/Security_architecture" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;
