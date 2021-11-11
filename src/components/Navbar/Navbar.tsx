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
  const [open, setOpen] = useState(false); // the property is gonna change when the state gets updated
  const { isDesktop } = useWindowSize(); // conditional rendering depending on window size
  const toggleState = () => {
    setOpen(!open);
  };
  // conditional rendering - hamburger & sidebar or topbar
  // if isDesktop is false, Hamburger and Sidebar is set to NavigationMenu, otherwise Nav is
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
// render logo and NavigationMenu in browser
const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <nav className="navbar">
      <Link aria-label="navigation home" to="/">
        <CirkularLogo onClick={scrollToTop}/>
      </Link>
      <NavigationMenu />
    </nav>
  );
};

export default Navbar;
