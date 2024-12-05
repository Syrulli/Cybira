
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import VideoSection from '../components/video/VidSec';
import '../styles/carousel.css';
function WebDev() {
  return (
    <div>
      <Navbar />
      <VideoSection
        heading='Secure Web Development providing:'
        subHeading='Transformation secured™'
        description=''
        videoSrc='/vid/video-5.mp4'
        link='/'
      >
        <ul className='ps-lg-3' style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Establish design guidelines, standards and best practices of web
          design</li>
          <li>Working with clients in populating content management systems for
          digital marketing campaigns</li>
          <li>Design visual imagery in line with branding for clients</li>
          <li>Conceptualizing creative ideas with clients</li>
          <li>Provides testing and improving the design of the client website</li>
          <li>Defines and enforces content standards</li>
          <li>Communicating design ideas using user flows, process flows, site
          maps and wireframes</li>
          <li>Incorporating functionalities and features into websites</li>
          <li>Designing sample pages including colours and fonts</li>
          <li>Preparing design plans and presenting web structure</li>
        </ul>
      </VideoSection>
    </div>
  );
}
export default WebDev;
