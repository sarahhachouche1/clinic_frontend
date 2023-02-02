import React from "react";
import logo from "../../images/logo.png";
import "../../styles/Header.css";

export const Header = () => {
  const path = window.location.pathname;
  return (
    <header>
      <a href="/"><img src={logo} alt="logo" className="logoheader"/></a>
      <hr1/>
      <ul>
      <li className="animate">
          <a href="/" className={path === '/' ? "current" : ""}>Home</a>
        </li>
        <li className="animate">
          <a href="/about" className={path === '/about' ? "current" : ""}>About</a>
        </li>
        <li className="animate">
          <a href="/services" className={path === '/services' ? "current" : ""}>Services</a>
        </li>
        <li className="animate">
          <a href="/reviews" className={path === '/reviews' ? "current" : ""}>Reviews</a>
        </li>
        <li className="animate">
          <a href="/contact" className={path === '/contact' ? "current" : ""}>Contact</a>
        </li>
        <li className="left"><button className="primary-button">Appointment</button></li>
      </ul>

    </header>
    
  );
};
