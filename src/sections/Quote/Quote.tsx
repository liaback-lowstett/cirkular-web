import React from "react";
import "./Quote.scss";

import { HomeResult } from "../../pages/Home/utils";

const Quote: React.FC<HomeResult["divider"]> = ({
  dividerImage,
  dividerText,
}) => {
  return (
    <section className="quote">
      <picture>
        <img
          className="image"
          src={dividerImage.url}
          alt="abstract background"
        />
      </picture>
      <h2>{dividerText}</h2>
    </section>
  );
};

export default Quote;
