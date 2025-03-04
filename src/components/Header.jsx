// src/components/Header.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/real-estate-logo-black.png";

import { PhoneOutgoing, ArrowRight } from "react-feather";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-lg py-md-3">
      <div className="container">
        {/* Logo or brand */}
        <Link className="navbar-brand fw-bold" to="/">
          <img src={logo} alt="Logo" height="40" />
        </Link>

        {/* Toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                end
                style={({ isActive }) => ({
                  fontWeight: isActive ? "fw-medium" : "normal",
                })}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "fw-medium" : "normal",
                })}
              >
                About
              </NavLink>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>

        <div className="call-actions d-md-block d-none">
          <div className="row align-items-center">
            <div className="col-6">
              <a href="tel:1234567890" className="d-inline-flex align-items-center">
                <span className="p-2 me-2 h-45px w-45px primary-color-light-bg rounded-circle flex">
                  <PhoneOutgoing size={16} color="#06af47" />
                </span>
                <span className="d-none d-xxl-inline-block fw-medium">123-456-7890</span>
              </a>
            </div>
            <div className="col-6 text-end">
              <a href="#" className="btn py-2 px-3 primary-color-bg text-white rounded-1 text-uppercase" style={{fontSize:"0.7rem"}}>Buy property</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
