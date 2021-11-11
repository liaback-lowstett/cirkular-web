import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { ReactComponent as Close } from "../../../assets/close.svg";

export interface SidebarProps {
  open: boolean;
  toggleState: () => void;
}
// Sidebar items
const Sidebar: React.FC<SidebarProps> = ({ open, toggleState }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={`sidebar-container ${open ? "open" : ""}`}>
      <div className="sidebar-background" onClick={toggleState} />
      <div className="sidebar">
        <div className="sidebar-navigation side-margin">
          <button
            aria-label="close sidebar"
            className="sidebar-close"
            onClick={toggleState}
          >
            <Close />
          </button>
        </div>
        <div className="sidebar-menu-items side-margin">
          <Link to="/" onClick={scrollToTop}>Hom</Link>
          <Link to="/platform" onClick={scrollToTop}>Tech Platform</Link>
          <Link to="/aquafeed" onClick={scrollToTop}>Aquafeed</Link>
          <Link to="/dairyprotein"onClick={scrollToTop}>Dairy Protein</Link>
          <Link to="/career"onClick={scrollToTop}>Career</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
