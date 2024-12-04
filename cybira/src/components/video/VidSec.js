import React from 'react';
function VideoSection({ heading, subHeading, description, videoSrc, link, children }) {
  return (
    <section>
      <div className='container-fluid mb-5'>
        <div className='row min-vh-75 align-items-center'>
          <div className='col-12 col-md-6 left-section p-5'>
            <h6 className='mb-lg-3'>
              <small>{subHeading}</small>
            </h6>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>{heading}</h1>
            <p style={{ textAlign: 'justify', fontSize: '1rem'}} className='mb-lg-1 mt-lg-1'>
              <small>{description}</small>
            </p>
            <p style={{ textAlign: 'justify', fontSize: '0.8rem'}} className='mb-lg-3 mt-lg-3'>
             {children}
            </p>
            <a href={link}>
              <b>Learn more → </b>
            </a>
          </div>
          <div className='col-12 col-md-6 right-section'>
            <video autoPlay muted loop>
              <source src={videoSrc} type='video/mp4' />
            </video>
            <div className='color-blocks'>
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
        </div>
      </div>
    </section>
  );
}
export default VideoSection;
