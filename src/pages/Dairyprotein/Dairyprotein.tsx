import React from "react";
import "./Dairyprotein.scss";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

import dairyimg from "../../assets/dairy.jpg";

const Dairyprotein = () => {
  return (
    <>
      <Nav />
      <div className="dairyprotein">
        <div className="content">
          <h2>Use Case</h2>
          <h2>Dairy Protein</h2>
          <img src={dairyimg} alt="fishfeed" />
          <p>
            Dairy production is putting immense pressure on the environment. As
            a consequence, alternative sources of producing sustainable dairy
            products is one of the fastest growing industries and the industry
            is actively looking at alternative proteins to develop animal-free
            products. Our fungi are engineered to produce casein - milk protein
            - which can be used by dairy producers and vegan companies to
            develop better animal-free cheese, yoghurts and beyond.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dairyprotein;
