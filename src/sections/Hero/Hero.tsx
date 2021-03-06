import React from "react";
import "./Hero.scss";

import { HomeResult } from "../../pages/Home/utils";

const Hero: React.FC<HomeResult["landing"]> = ({
  landingHeader,
  landingSubheader,
  landingImage,
}) => {
  console.log("LANDING", landingImage);
  
  return (
    <header className="header">
      <picture className="image-container">
        <img className="image" src={landingImage.url} alt="abstract background" />
      </picture>
      <div className="text-container">
        <h1>{landingHeader}</h1>
        <h3>{landingSubheader}</h3>
      </div>
    </header>
  );
};
export default Hero;
