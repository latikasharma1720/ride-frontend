import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../images/Logo.png";

export default function Header() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" aria-label="MastoRide Home">
            <img src={logo} alt="MastoRide" className="brand-logo" />
          </Link>

          <nav className="main-nav" aria-label="Primary">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/services">Services</NavLink>   {/* ✅ points to /services */}
            <NavLink to="/about">About</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <div className="nav-actions">
              <NavLink to="/signup" className="btn btn-pill btn-dark">SignUp</NavLink>
              <NavLink to="/login" className="btn btn-pill btn-outline">Login</NavLink>
            </div>
          </nav>
        </div>
      </header>
      <div className="accent-bar" aria-hidden="true" />
    </>
  );
}
