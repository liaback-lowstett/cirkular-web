import { useState } from "react";
import { Link } from "react-router-dom";

import useWindowSize from "../../hooks/useWindowSize";

import Nav from "./Nav";
import Hamburger from "../Hamburger";
import Sidebar from "./Sidebar";


import "./Navbar.scss";
import "../../variables.scss";

import { ReactComponent as CirkularLogo } from "../../assets/logo_blue.svg";

const NavigationMenu = () => {
  const [open, setOpen] = useState(false);
  const { isDesktop } = useWindowSize();
  const toggleState = () => {
    setOpen(!open);
  };
  return (
    <div>
      {!isDesktop ? (
        <>
          <Hamburger open={open} toggleState={toggleState} />
          <Sidebar open={open} toggleState={toggleState} />
        </>
      ) : (
        <Nav />
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link aria-label="navigation home" to="/">
        <CirkularLogo />
      </Link>
      <NavigationMenu />
    </nav>
  );
};

export default Navbar;
