import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Flickity from 'flickity';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'flickity/dist/flickity.min.css';
import InsightsCarousel from '../components/Carousel/InsightsCarousel';
import VideoSection from '../components/video/VidSec';
import '../styles/carousel.css';
function Home() {
  useEffect(() => {
    const flktyOptionsInsights = {
      contain: true,
      freeScroll: true,
      prevNextButtons: true,
      pageDots: true,
      adaptiveHeight: true,
    };
    const flktyMain = new Flickity('.main-carousel', flktyOptionsInsights);

    AOS.init({
      duration: 1000,
      easing: 'ease-out-back',
      once: true,
    });

    return () => {
      flktyMain.destroy();
      AOS.refresh();
    };
  }, []);
  return (
    <div>
      <Navbar />
      <section>
        {/* <div className='container-fluid mb-5'>
          <div className='row min-vh-75 align-items-center'>
            <div className='col-12 col-md-6 left-section p-5'>
              <h6 className='mb-lg-3'>
                <small>Transformation secured™</small>
              </h6>
              <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                Professional Delivery of Secure Cloud Solutions.
              </h1>
              <p style={{ textAlign: 'justify' }} className='mb-lg-3 mt-lg-3'>
                <small>
                  Leading with strategy, design, and architecture, we make your
                  brilliant ideas happen by harnessing our team’s expertise in
                  cloud, data, and cyber technologies, to engineer and deliver
                  the right solution for your organisation.
                </small>
              </p>
              <a href='/'>
                <b>Learn more → </b>
              </a>
            </div>
            <div className='col-12 col-md-6 right-section'>
              <video autoPlay muted loop>
                <source src='/vid/video-1.mp4' type='video/mp4' />
              </video>
              <div className='color-blocks'>
                <span className='color-block black-block'></span>
                <span className='color-block black-block'></span>
                <span
                  className='color-block purple-block'
                  data-aos='zoom-in'
                  data-aos-duration='1000'
                  data-aos-delay='1900'
                ></span>

                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span
                  className='color-block blue-block'
                  data-aos='zoom-in'
                  data-aos-duration='1000'
                  data-aos-delay='1900'
                ></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span
                  className='color-block transparent-block-blue'
                  data-aos='zoom-in'
                  data-aos-duration='1000'
                  data-aos-delay='1900'
                ></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span
                  className='color-block transparent-purple-block'
                  data-aos='zoom-in'
                  data-aos-duration='1000'
                  data-aos-delay='1900'
                ></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span
                  className='color-block blue-block'
                  data-aos='zoom-in'
                  data-aos-duration='1000'
                  data-aos-delay='1900'
                ></span>
                <span
                  className='color-block transparent-purple-block'
                  data-aos='zoom-in'
                  data-aos-duration='1000'
                  data-aos-delay='1900'
                ></span>
                <span className='color-block'></span>
                <span
                  className='color-block transparent-block-blue'
                  data-aos='zoom-in'
                  data-aos-duration='1000'
                  data-aos-delay='1900'
                ></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span
                  className='color-block black-block'
                  data-aos='zoom-in'
                  data-aos-duration='1000'
                  data-aos-delay='1900'
                ></span>
                <span
                  className='color-block button-block'
                  data-aos='zoom-in'
                  data-aos-duration='1000'
                  data-aos-delay='1900'
                >
                  <a href='/'>
                    <i className='fa-solid fa-play h4 text-white'></i>
                  </a>
                </span>
                <span className='color-block'></span>
                <span className='color-block'></span>
                <span
                  className='color-block blue-block'
                  data-aos='zoom-in'
                  data-aos-duration='1000'
                  data-aos-delay='1900'
                ></span>
              </div>
            </div>
          </div>
        </div> */}
        <VideoSection
          heading='Professional Delivery of Secure Cloud Solutions.'
          subHeading='Transformation secured™'
          description='Leading with strategy, design, and architecture, we make your brilliant ideas happen by harnessing our team’s expertise in cloud, data, and cyber technologies, to engineer and deliver the right solution for your organisation.'
          videoSrc='/vid/video-1.mp4'
          link='/'
        />
      </section>
      <section>
        <InsightsCarousel />
      </section>
    </div>
  );
}
export default Home;
