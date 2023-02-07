import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "../../styles/Header.css";
import { useLogout } from '../../hooks/useLogout'
import "./navbar.css"
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export const Header = () => {
const path =window.location.pathname;
const nav= useNavigate();
    const { user } = useAuthContext()
    const { logout } = useLogout()
    const handleClick = () => {
      logout()
      nav("/");
}
  return (
    <header>
      <a href="/"><img src={logo} alt="logo" className="logoheader"/></a>
      <hr1 />
      <ul>
        <li>
          <a href="/" className={path=== '/' ? "current" : ""}>Home</a>
        </li>
        <li>
          <a href="/about" className={path=== '/about' ? "current" : ""}>About</a>
        </li>
        <li>
          <a href="/services" className={path=== '/services' ? "current" : ""}>Services</a>
        </li>
        <li>
          <a href="/reviews" className={path=== '/reviews' ? "current" : ""}>Reviews</a>
        </li>
        <li>
          <a href="/contact" className={path=== '/contact' ? "current" : ""}>Contact</a>
        </li>
        <li><button className="button">Appointment</button></li>
      </ul>
      {user && (
            <div className="logout">
              <button onClick={handleClick}>Log out</button>
              <Link to="/dashboard">dashboard</Link>
            </div>
            
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              
            </div>
          )}
    </header>
    
  );
};
