import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import "../../variables.scss";

import logo from "../../assets/logo.png";

const Nav = () =>  {
  return (
    <nav>
      <Link className="link" aria-label="navigation home" to="/">
        <div className="logo-container">
          <p>Cirkulär</p>
          <img className="logo" src={logo} alt="logo" />
        </div>
      </Link>
      <ul className="list-container">
        <Link aria-label="navigation platform" to="/platform">
          <li>Tech Platform </li>
        </Link>
        <Link aria-label="navigation aquafeed" to="/aquafeed">
          <li>Aquafeed </li>
        </Link>
        <Link aria-label="navigation diary protein" to="/dairyprotein">
          <li>Dairy Protein</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
