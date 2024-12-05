
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import VideoSection from '../components/video/VidSec';
import '../styles/carousel.css';
function DevOps() {
  return (
    <div>
      <Navbar />
      <VideoSection
        heading='Secure Software Development Pipeline:'
        subHeading='Transformation secured™'
        description=''
        videoSrc='/vid/video-4.mp4'
        link='/'
      >
        <ul className='ps-lg-3' style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Automates the integration and delivery of code changes through a CI/CD pipeline.</li>
          <li>Implementation of Automated Security testing tools to identify and fix vulnerabilities.</li>
          <li>Static Application Security Testing (SAST)</li>
          <li>Dynamic Application Security Testing (DAST)</li>
          <li>Software Composition Analysis (SCA)</li>
          <li>Continuous Monitoring for security threats and vulnerabilities</li>
          <li>Uses threat modeling techniques to design secure systems and applications.</li>
          <li>Code review to identify and fix security issues</li>
        </ul>
      </VideoSection>
    </div>
  );
}
export default DevOps;
