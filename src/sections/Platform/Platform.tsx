import React from "react";
import { Link } from "react-router-dom";
import "./Platform.scss";
import { HomeResult } from "../../pages/Home/utils";

const Platform: React.FC<HomeResult["techPlatform"]> = ({
  techPlatformHeader,
  techPlatformImage,
  techPlatformSubheader,
}) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="techplatform">
      <div className="content-wrapper">
        <img className="image" src={techPlatformImage.url} alt="mold" />
        <div className="text">
          <h3>{techPlatformHeader}</h3>
          <h4>{techPlatformSubheader}</h4>
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
