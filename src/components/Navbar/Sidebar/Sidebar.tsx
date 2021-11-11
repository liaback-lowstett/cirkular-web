import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { ReactComponent as CirkularLogo } from "../../../assets/logo_blue.svg";
import { ReactComponent as Close } from "../../../assets/close.svg";

export interface SidebarProps {
  open: boolean;
  toggleState: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, toggleState }) => {
  return (
    <div className={`sidebar-container ${open ? "open" : ""}`}>
      <div className="sidebar-background" onClick={toggleState} />
      <div className="sidebar">
        <div className="sidebar-navigation side-margin">
          <CirkularLogo />
          <button
            aria-label="close sidebar"
            className="sidebar-close"
            onClick={toggleState}
          >
            <Close />
          </button>
        </div>
        <div className="sidebar-menu-items side-margin">
          <Link to="/">Hem</Link>
          <Link to="/platform">Tech Platform</Link>
          <Link to="/aquafeed">Aquafeed</Link>
          <Link to="/dairyprotein">Dairy Protein</Link>
          <Link to="/career">Career</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
