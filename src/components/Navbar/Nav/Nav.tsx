import React from "react";
import NavItem from "./NavItem";
import "./Nav.scss";

export interface NavProps {}
// list of items - displayed in both topbar and sidebar
const Sidebar: React.FC<NavProps> = () => {
  return (
    <div className="nav">
      <div className="items">
        <NavItem to="/platform" text="Tech Platform" />
        <NavItem to="/aquafeed" text="Aquafeed" />
        <NavItem to="/dairyprotein" text="Dairy Protein" />
        <NavItem to="/career" text="Career" />
      </div>
    </div>
  );
};

export default Sidebar;