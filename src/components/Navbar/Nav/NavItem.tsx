import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

export interface NavItemProps {
  to: string;
  text: string;
  exact?: boolean;
}
// Each item in the navigation top bar
const NavItem: React.FC<NavItemProps> = ({ text, to, exact = false }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <NavLink
      exact={exact}
      activeClassName="active"
      className="nav-item"
      to={to}
      onClick={scrollToTop}
    >
      {text}
    </NavLink>
  );
};

export default NavItem;
