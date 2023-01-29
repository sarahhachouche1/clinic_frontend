import React from "react";
import logo from "../../images/logo.png";
import "../../styles/Header.css";

export const Header = () => {

  return (
    <header>
      <img src={logo} alt="logo" className="logoheader"/>
      <hr1 />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/reviews">Reviews</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li><button className="button">Appointment</button></li>
      </ul>
   
    </header>
    
  );
};
