import React from "react";
import { HomeResult } from "../../pages/Home/utils";
import "./Team.scss";

const Team: React.FC<HomeResult["team"]> = ({ teamHeader, teamText }) => {
  return (
    <section className="team">
      <h2>{teamHeader}</h2>
      <div
        className="team-wrapper"
        dangerouslySetInnerHTML={{ __html: teamText }}
      ></div>
    </section>
  );
};

export default Team;
