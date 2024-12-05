import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import VideoSection from '../components/video/VidSec';
import '../styles/carousel.css';
function MedicalCoding() {
  return (
    <div>
      <Navbar />
      <VideoSection
        heading='Secure Medical Coding Services.'
        subHeading='Transformation secured™'
        description='We provide to the National Health Service Standard Medical Coding Functions:'
        videoSrc='/vid/video-7.mp4'
        link='/'
      >
        <ul
          className='ps-lg-3'
          style={{ listStyleType: 'disc', paddingLeft: '20px' }}
        >
          <li>Regularly updated medical coding guidelines and regulations</li>
          <li>Regularly updated lookup code tables of ICD International Classification of Diseases.</li>
          <li>Audits and quality checks for coding accuracy.</li>
          <li>Code submissions for billing or reporting purposes.</li>
          <li>Thorough medical records review including doctor’s notes, lab results to identify
          diagnoses and procedures and files are encrypted at rest and on transport</li>
          <li>Streamline coding processes to reduce bottlenecks and inefficiencies.
          </li>

        </ul>
      </VideoSection>
    </div>
  );
}
export default MedicalCoding;
