import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import close from './icons/close.svg'
import open from'./icons/hamburger-menu.svg'
// import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavigationBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            <span>∙ᵒᴼⓋⓇⓅⓈᴼᵒ∙</span>
            {/* <i className="fas fa-code"></i> */}
            <span className="icon">
              {/* <CodeIcon /> */}
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                ////exact
                to="/"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                ////exact
                to="/about"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                //exact
                to="/contact"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                //exact
                to="/login"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                //exact
                to="/signup"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                {/* <HamburgetMenuOpen />{" "} */}
                <img src={close} alt="" />
              </span>
            ) : (
              <span className="icon">
                {/* <HamburgetMenuClose /> */}
                <img src={open} alt=""/>
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;