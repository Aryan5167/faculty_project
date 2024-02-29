import React, { useState } from 'react';
import "./Navbar.scss"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import {Menu,X} from 'lucide-react'

function NavBar() {
  const [isNavLeft, setIsNavLeft] = useState(false);

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
        <a href="index.html" className="logo">
          <img src="https://www.yudiz.com/codepen/hero-banner/logo.png" alt="logo-image" />
          {/* <h1>Campus</h1> */}
        </a>
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
            <li><a href="#"> Home </a></li>
            <li><a href="#"> about us </a></li>
            <li><a href="#"> products </a></li>
            <li><a href="#"> what we offers </a></li>
            <li><a href="#"> contact us </a></li>
          </ul>
          <ul className="terms-links">
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="banner">
        <div className="container">
          <div className="banner-inner">
            <div className="banner-image">
              <img src="https://www.yudiz.com/codepen/hero-banner/banner.png" alt="banner-image" />
            </div>
            <div className="banner-content">
              <h1>
                <b>A one stop for all solutions</b><br />
                for your<br />
                <span>industrial needs...</span>
              </h1>
              <a href="#" className="theme-btn">Get Quote</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
