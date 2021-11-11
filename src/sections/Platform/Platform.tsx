import React from "react";
import { Link } from "react-router-dom";
import "./Platform.scss";

import moldimg from "../../assets/mold.jpg";

const Platform: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="techplatform">
      <div className="content-wrapper">
        <img className="image" src={moldimg} alt="mold" />
        <div className="text">
          <h3>TECH PLATFORM</h3>
          <h4>
            We identify, design, create and scale filamentous fungal cells to
            produce sustainable, inexpensive, and high-quality proteins for the
            feed and food industry.
          </h4>
            <Link
              aria-label="navigation platform"
              to="/platform"
              onClick={scrollToTop}
            >
              <button>Learn more</button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Platform;
