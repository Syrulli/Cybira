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
        description='“Transformative Enterprise Technology Solutions in the areas of: Digital Transformation, Cloud Migration and Infrastructure Modernization”.'
        videoSrc='/vid/video-2.mp4'
        link='/'
      >
        <ul className='ps-lg-3' style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Creation of blueprints for cloud infrastructure that meets business requirements including
          scalability, relieability and security.</li>
          <li>Capacity planning of current and future workloads.</li>
          <li>Adopts Infrastructure as Code tools like Terraform to automate the provisioning and
          management of cloud resources.</li>
          <li>Identity and Access Management policies to control access to cloud resources.</li>
          <li>Performance monitoring of cloud resources and applications.</li>
          <li>Design Backup Solutions for Disaster Recover and Business Continuity</li>
          <li>Disaster Recovery Planning.</li>
        </ul>
      </VideoSection>
    </div>
  );
}
export default CloudArchitecture;
