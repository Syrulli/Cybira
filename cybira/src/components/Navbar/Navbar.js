import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg sticky-top'>
      <div className='container-fluid'>
        <a
          className='navbar-brand fw-bold fs-2 p-lg-4 ps-lg-5 p-xxl-5 text-white'
          href='/'
          style={{ fontSize: '2rem' }}
        >
          Cybira
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarContent'
          aria-controls='navbarContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-between'
          id='navbarContent'
        >
          <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
            <li className='nav-item mt-lg-2'>
              <Link
                className='nav-link position-relative text-white'
                to='/Cloud_architecture'
              >
                Cloud Architecture
              </Link>
            </li>
            <li className='nav-item mt-lg-2'>
              <Link
                className='nav-link position-relative text-white'
                to='/Security_architecture'
              >
                Security Architecture
                <small>
                  <i className='fa-solid fa-chevron-down ms-lg-1'></i>
                </small>
              </Link>
            </li>
            <li className='nav-item mt-lg-2'>
              <Link
                className='nav-link position-relative text-white'
                to='/Devops'
              >
                DevOps
                <small>
                  <i className='fa-solid fa-chevron-down ms-lg-1'></i>
                </small>
              </Link>
            </li>
            <li className='nav-item mt-lg-2'>
              <Link
                className='nav-link position-relative text-white'
                to='/WebDev'
              >
                Web Development
              </Link>
            </li>
            <li className='nav-item mt-lg-2'>
              <Link
                className='nav-link position-relative text-white'
                to='/DigitalMarketing'
              >
                Digital Marketing
              </Link>
            </li>
            <li className='nav-item mt-lg-2'>
              <Link
                className='nav-link position-relative text-white'
                to='/MedicalCoding'
              >
                Medical Coding
              </Link>
            </li>
            <div className='d-flex align-items-center mt-lg-1 ps-lg-5 ms-lg-4'>
              <form className='me-2' role='search'>
                <a className='btn btn-xs text-white' href='/'>
                  <small>
                    <i className='fa-solid fa-magnifying-glass'></i>
                  </small>
                </a>
              </form>
              <a className='nav-link text-white btn-sm mt-lg-1' href='/'>
                Contact us
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
