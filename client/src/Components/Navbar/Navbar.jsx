import React, { useState } from 'react';
import "./Navbar.scss"
import {useLocation} from 'react-router-dom'
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import {Menu,X} from 'lucide-react'

function Navbar() {
  const [isNavLeft, setIsNavLeft] = useState(false);

  const location = useLocation();
  const isStudentDashboard = location.pathname === '/student_dashboard';

  const handleHamburgerClick = () => {
    setIsNavLeft(true);
  };

  const handleCrossClick = () => {
    setIsNavLeft(false);
  };

  return (
    <div>
      <header>
        <button className="hamburger-icon" onClick={handleHamburgerClick}>
        <Menu />
        </button>
        <Link to={isStudentDashboard ? "/student_dashboard" : "/faculty_dashboard"} className="logo" style={{textDecoration:"none"}}>
        <h1>
          <span className="nav-heading" style={{ color: "#3d4244  " }}>Cabin</span>
          <span className="nav-heading" style={{ color: "#fccb02" }}>Connect</span>
        </h1>
      </Link>
        <a href="#" className="search-icon">
          <span>Search</span>
          {/* <FontAwesomeIcon icon={faSearch} /> */}
        </a>
      </header>
      <div className={isNavLeft ? "nav nav-left" : "nav"}>
        <div className="nav-content">
          <button className="cross-btn" onClick={handleCrossClick}>
          <X />
          </button>
          <ul>
            <li><a href="/student_dashboard"> Home </a></li>
            <li><a href="#"> about us </a></li>
            <li><a href="/check_availability"> Check Availability </a></li>
            <li><a href="#"> Book a Slot </a></li>
            <li><a href="#"> contact us </a></li>
          </ul>
          <ul className="terms-links">
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      {/* <section className='hero-container'> */}
      {/* <div className="banner" style={{background:'url("/images/pic.jpg")'}}>
        <div className="container"> */}
          {/* <div className="banner-inner">
            <div className="banner-image" style={{backgroundImage:'url("../images/pic.jpg")'}}>
              <img src="https://www.yudiz.com/codepen/hero-banner/banner.png" alt="banner-image" />
              <img src="/images/pic.jpg" alt="" />
            </div>
            <div className="banner-content">
              <h1>
                <b>A one stop for all solutions</b><br />
                for your<br />
                <span>industrial needs...</span>
              </h1>
              <a href="#" className="theme-btn">Get Quote</a>
            </div>
          </div> */}
        {/* </div>
      </div> */}
      {/* </section> */}
    </div>
  );
}

export default Navbar;
