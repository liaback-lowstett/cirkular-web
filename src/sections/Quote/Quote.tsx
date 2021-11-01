import React from "react";
import "./Quote.scss";

import orangeimg from "../../assets/orange.jpg";

const Quote = () => {
  return (
    <section className="quote">
      <picture>
        <img className="image" src={orangeimg} alt="abstract background" />
      </picture>
      <h2>Revolutionizing tomorrow’s food system</h2>
    </section>
  );
};

export default Quote;
