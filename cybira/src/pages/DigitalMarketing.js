import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import VideoSection from '../components/video/VidSec';
import '../styles/carousel.css';
function DigitalMarketing() {
  return (
    <div>
      <Navbar />
      <VideoSection
        heading='Secure Digital Marketing Service'
        subHeading='Transformation secured™'
        description='Our Capabilities:'
        videoSrc='/vid/video-6.mp4'
        link='/'
      >
        <ul
          className='ps-lg-3'
          style={{ listStyleType: 'disc', paddingLeft: '20px' }}
        >
          <li>We define clear goals and objectives</li>
          <li>
            Conducts thorough research of understand the target audience’s
            demographics and online behavior creating detailed buyer personals
            to tailor the marketing effort’s effectively.
          </li>
          <li>
            High quality content addressing the audience’s needs an interests
            using mix formats including blog posts, videos, infographics and
            social media updates
          </li>
          <li>SEO optimization</li>
          <li>
            Use of social media to engage with the audience, share content and
            build community
          </li>
        </ul>
      </VideoSection>
    </div>
  );
}
export default DigitalMarketing;
