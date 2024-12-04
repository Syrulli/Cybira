import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import VideoSection from '../components/video/VidSec';
import '../styles/carousel.css';
function CloudArchitecture() {
  return (
    <div>
      <Navbar />
      <VideoSection
        heading='Using tech to change how you do business.'
        subHeading='Transformation secured™'
        description='Transformative Enterprise Technology Solutions in the areas of'
        videoSrc='/vid/video-2.mp4'
        link='/'
        data-aos='zoom-in'
        data-aos-duration='1000'
        data-aos-delay='1900'
      >
        <ul className='ps-lg-3' style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Digital Transformation</li>
          <li>Cloud Migration</li>
          <li>Infrastructure Modernization</li>
        </ul>
      </VideoSection>
    </div>
  );
}
export default CloudArchitecture;
