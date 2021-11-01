import React from "react";
import "./Team.scss";

const Team = () => {
  return (
    <section className="team">
      <h2>Team </h2>
      <div className="team-wrapper">
        <div className="text">
          <h3>ERIC ÖSTE, CEO</h3>
          <p>
            Eric Öste founded Cirkulär in 2019. He has experience working and
            living in Europe, U.S. and Asia, also running business development
            for start-ups across the U.S. He has an academic background in
            biotechnology and business from Columbia University and Stockholm
            School of Economics.
          </p>
        </div>
        <div className="text">
          <h3>YVONNE NYGÅRD, CSO </h3>
          <p>
            Yvonne Nygård is an Associate Professor in Industrial Biotechnology
            at Chalmers University. She is a pioneer in engineering filamentous
            fungi.
          </p>
        </div>
        <div className="text">
          <h3>STEFANO SACCHETTO, RESEARCH ENGINEER</h3>
          <p>
            Stefano is an industrial PhD candidate at Cirkulär, Chalmers and
            Lund University. He has a degree in molecular biology and has
            several years of experience engineering recombinant casein hosts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
