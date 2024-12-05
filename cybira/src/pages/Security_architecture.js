
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import VideoSection from '../components/video/VidSec';
import '../styles/carousel.css';
function SecuriryArchitecture() {
  return (
    <div>
      <Navbar />
      <VideoSection
        heading='Future Proof Security Solutions providing'
        subHeading='Transformation secured™'
        description=''
        videoSrc='/vid/video-3.mp4'
        link='/'
      >
        <ul className='ps-lg-3' style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Zero Trust Architecture</li>
          <li>Security Access Service Edge</li>
          <li>Extended Detection and Response</li>
          <li>Endpoint Protection</li>
          <li>Identity and Access Management</li>
          <li>Security Orchestration, Automation and Response</li>
          <li>Data Loss Prevention</li>
          <li>Next Generation Firewall</li>
          <li>Cloud Access Security Broker</li>
        </ul>
      </VideoSection>
    </div>
  );
}
export default SecuriryArchitecture;
