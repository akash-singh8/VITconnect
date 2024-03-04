import React from "react";
import "../styles/club.css";

import hi1 from "../assets/hi1.webp";
import { clubs } from "../data";

const nonClub = () => {
  const nonTClubName = Object.keys(clubs).filter(
    (c) => clubs[c].type === "non-technical"
  );

  console.log(nonTClubName);

  return (
    <>
      <div className="jhhjhd">
        <div className="jhyjyj">
          <h1 className="jjhj">NON TECHNICAL CLUB</h1>
        </div>
        <div className="hjabs">
          {nonTClubName.map((club) => (
            <div className="hjsgh" key={club}>
              <img src={hi1} alt="hshn" className="jefjh" />
              <div className="hjasj">
                <h1 className="jahdj">{clubs[club].title}</h1>
                <p className="bhasbhh">{clubs[club].description}</p>
                <div className="jash">
                  <button className="mhbas">Learn More</button>
                  <button className="mhbas1">Explore</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default nonClub;
