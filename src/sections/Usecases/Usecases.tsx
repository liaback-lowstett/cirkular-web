import React from "react";
import { Link } from "react-router-dom";
import "./Usecases.scss";

import fishfeedimg from "../../assets/fishfeed.jpg";
import dairyimg from "../../assets/dairy.jpg";

const Usecases = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <section className="usecase">
      <div className="heading">
        <h2>Use Case</h2>
      </div>
      <div className="content">
        <div className="content-wrapper">
          <img className="image" src={fishfeedimg} alt="fishfeed" />
          <div className="text">
            <h3>AQUAFEED</h3>
            <h3>
              We are producing fungal proteins that are promising candidates for
              aquafeed. Our proteins are highly competitive with existing
              state-of-the-art aquafeed, such as fish meal and soy meal.
            </h3>
            <Link
              aria-label="navigation aquafeed"
              to="/aquafeed"
              onClick={scrollToTop}
            >
              <button>Learn more</button>
            </Link>
          </div>
        </div>
        <div className="content-wrapper">
          <img className="image" src={dairyimg} alt="dairy proteins" />
          <div className="text">
            <h3>DAIRY PROTEINS</h3>
            <h3>
              Our fungi are engineered to produce casein - milk protein - which
              can be used by dairy producers and vegan companies to develop
              better animal-free cheese, yoghurts and beyond.
            </h3>
            <Link
              aria-label="navigation dairy protein"
              to="/dairyprotein"
              onClick={scrollToTop}
            >
              <button>Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Usecases;
