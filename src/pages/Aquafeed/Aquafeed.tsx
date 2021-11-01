import React from "react";
import "./Aquafeed.scss";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

import fishfeedimg from "../../assets/fishfeed.jpg";

const Aquafeed = () => {
  return (
    <>
      <Nav />
      <div className="aquafeed">
        <div className="content">
          <h2>Use Case</h2>
          <h2>Fishfeed</h2>
          <img src={fishfeedimg} alt="aquafeed" />
          <p>
            As the oceans are getting depleted on fish, we need to find other
            ways of producing fish and aquaculture production is meeting this
            demand. Growing at a tremendous rate, this industry is in great need
            of sourcing and utilizing sustainable aquafeed. We are producing
            fungal proteins that are promising candidates for aquafeed. Our
            proteins are highly competitive with existing state-of-the-art
            aquafeed, such as fish meal and soy meal. Our proteins are
            inexpensive, nutritious, without plant anti-nutrients and can be
            produced in very high volumes.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Aquafeed;
