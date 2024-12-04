import React from 'react';
const insightsData = [
  {
    imgSrc: '/img/image-1.png',
    title: 'Cloud Architecture',
    description:
      'Cloud architecture is the fundamental design framework for constructing and deploying cloud-based systems. It encompasses the integration of hardware, software, and networking components to deliver scalable, flexible, and cost-effective computing services over the internet.',
  },  
  {
    imgSrc: '/img/image-2.png',
    title: 'Security Architecture',
    description:
      'Security architecture is the strategic design of systems, policies, and technologies to protect IT and business assets from 1  cyber threats. Its the backbone of a robust security posture, ensuring the confidentiality, integrity, and availability of sensitive information',
  },
  {
    imgSrc: '/img/image-3.png',
    title: 'DevOps',
    description:
      'DevOps is a set of practices that aims to shorten the systems development life cycle and provide continuous delivery with high 1  quality. It emphasizes collaboration between software development (Dev) and IT operations (Ops) teams',
  },
  {
    imgSrc: '/img/image-4.png',
    title: 'Digital Marketing',
    description:
      'Digital marketing is the practice of promoting products or services through various digital channels. It leverages the internet and digital technologies to connect with potential customers and build brand awareness',
  },
  {
    imgSrc: '/img/image-5.png',
    title: 'Web Development',
    description:
      'Web development is the art and science of creating websites and web applications. It involves a blend of technical skills and creative thinking to build functional and visually appealing digital experiences.',
  },
  {
    imgSrc: '/img/image-6.png',
    title: 'Medical Coding',
    description:
      'Medical coding is the process of assigning standardized codes to medical diagnoses, procedures, and services. These codes are used to communicate 1  information about patient care and to facilitate accurate billing and reimbursement',
  },
];

const InsightsCarousel = () => {
  return (
    <div className='container-fluid mb-lg-5 pt-lg-3'>
      <div className='insights-header position-relative'>
        <h4 className='pt-3 mb-3 ps-5 mb-lg-4'>Insights</h4>
      </div>
      <div className='main-carousel' data-flickity='{"freeScroll": true}'>
        {insightsData.map((insight, index) => (
          <div key={index} className='carousel-cell'>
            <div
              className='card card-carousel'
              style={{ width: '100%', height: '28em' }}
            >
              <img
                className='card-img-top'
                src={insight.imgSrc}
                alt={insight.title}
                style={{ width: '100%', height: '200px' }}
              />
              <div className='card-body'>
                <div className='card-header mt-3' style={{ border: 'none' }}>
                  <h5 className='card-title'>
                    <b>{insight.title}</b>
                  </h5>
                </div>
                <p
                  className='card-text mt-lg-3'
                  style={{ textAlign: 'justify' }}
                >
                  {insight.description}
                </p>
              </div>
              <div className='card-footer'>
                <a href='/' className='read-more-btn mt-3'>
                  <small>
                    <b>Read more →</b>
                  </small>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='insights-header position-relative ps-5 pt-2 mb-4'>
        <a href='/' className='btn-view-all'>
          <b>View all insights → </b>
        </a>
      </div>
    </div>
  );
};

export default InsightsCarousel;