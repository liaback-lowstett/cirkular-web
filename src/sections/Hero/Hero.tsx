import React from "react";
import "./Hero.scss";

import heroimg from "../../assets/hero.jpg";


const Hero: React.FC = () => {
  return (
    <header className="header">
      <picture className="image-container">
        <img className="image" src={heroimg} alt="abstract background" />
      </picture>
      <div className="text-container">
        <h1>Learn from Nature – Engineer by Design</h1>
        <h3>
          Cells are Nature’s most efficient and reliable factories. We are
          leveraging this tremendous capability by engineering cells to produce
          sustainable, inexpensive, and high-quality feed and food
        </h3>
      </div>
    </header>
  );
};
export default Hero;
