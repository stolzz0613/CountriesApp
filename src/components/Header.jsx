import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import logo from "../assets/logo.png";
import "../styles/components/Header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
            <Link to="/">
                <img className="logo" src={logo} alt="Logo"/>
            </Link>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/Americas">
                <p>AMERICAS</p>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/Europe">
                <p>EUROPE</p>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/Asia">
                <p>ASIA</p>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/Africa">
                <p>AFRICA</p>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/Oceania">
                <p>OCEANIA</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;