import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import "../../styles/Header.css";

export const Header = () => {
  const path = window.location.pathname;
  const [openMenu, setOpenMenu] = useState(false);
  const nav = useNavigate();
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
    nav("/");
  };
  return (
    <header>
      <a href="/">
        <img src={logo} alt="logo" className="logoheader" />
      </a>
      <ul className={`${openMenu === true ? "nav-open" : "nav-closed"}`}>
        <li className="animate">
          <a href="/" className={path === "/" ? "current" : ""}>
            Home
          </a>
        </li>
        <li className="animate">
          <a href="/about" className={path === "/about" ? "current" : ""}>
            About
          </a>
        </li>
        <li className="animate">
          <a href="/services" className={path === "/services" ? "current" : ""}>
            Services
          </a>
        </li>
        <li className="animate">
          <a href="/reviews" className={path === "/reviews" ? "current" : ""}>
            Reviews
          </a>
        </li>
        <li className="animate">
          <a href="/contact" className={path === "/contact" ? "current" : ""}>
            Contact
          </a>
        </li>
        <li className="left">
          <button
            onClick={() => nav("/", { state: { targetId: "appointment" } })}
            className={openMenu ? "secondary-button" : "primary-button"}
          >
            Appointment
          </button>
        </li>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="nav-btn nav-close-btn"
        >
          {openMenu ? <FaTimes /> : <FaBars />}
        </button>
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
      </ul>
    </header>
  );
};
