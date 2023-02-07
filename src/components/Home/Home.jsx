import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "../../styles/Home.css";

export const Home = () => {

  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return <div className="home-page">
  </div>;
};