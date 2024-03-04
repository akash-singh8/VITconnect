import React from "react";
import "../styles/Event.css";
import "../styles/club.css";
import hi1 from "../assets/aic.jpg";
import hi2 from "../assets/marathi.jpg";
import hi3 from "../assets/iotc.jpg";
import { Link } from "react-router-dom";

const Event = () => {
  return (
    <>
      <div className="kjsdhhhj">
        <h1 className="jkdnmn">EVENTS</h1>

        <div className="ashdj">
          <div className="jkj">
            <img src={hi1} alt="hshn" className="jefjh" />
            <div className="hjasj">
              <h1 className="jahdj">Android Club</h1>
              <p className="bhasbhh1">
                The Android Club at VIT Bhopal University is for aspiring app
                developers and tech enthusiasts who gather here to dive into the
                exciting world of Android. Our club offers a hands-on learning
                experience, where members can create innovative mobile
                applications, explore the latest trends in Android development,
                and collaborate on real-world projects. Through workshops,
              </p>
              <div className="jash">
                <button className="mhbas">Learn More</button>
                <button className="mhbas1">Explore</button>
              </div>
            </div>
          </div>

          <div className="jkj">
            <img src={hi2} alt="hshn" className="jefjh" />
            <div className="hjasj">
              <h1 className="jahdj">Marathi Club</h1>
              <p className="bhasbhh1">
                The Marathi Club at VIT Bhopal University is a passionate
                community dedicated to celebrating the rich culture and heritage
                of Maharashtra and the Marathi language. Our club provides a
                platform for students to come together, connect, and share their
                love for Marathi literature, art, music, and traditions. Through
                various cultural events, workshops, and discussions, we strive
                to promote Marathi culture and language on campus.
              </p>
              <div className="jash">
                <button className="mhbas">Learn More</button>
                <button className="mhbas1">Explore</button>
              </div>
            </div>
          </div>

          <Link to="">
            <div className="jkj">
              <img src={hi3} alt="hshn" className="jefjh" />
              <div className="hjasj">
                <h1 className="jahdj">Dance Club</h1>
                <p className="bhasbhh1">
                  Get ready to witness the power of movements as we come
                  together to celebrate the art of dance. Whether you’re a
                  seasoned dancer or someone who loves to groove, our club
                  welcomes all to embrace the rhythm and expression of dance.
                  Join us to explore various dance styles, from contemporary and
                  hip-hop to traditional and cultural dances. Through dance
                  workshops, performances, and dance-offs, we aim to unleash the
                  energy and creativity that dance brings to our lives.
                </p>
                <div className="jash">
                  <button className="mhbas">Learn More</button>
                  <button className="mhbas1">Explore</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="jjmh">
          <button className="jsakdh">MORE EVENTS</button>
        </div>
      </div>
    </>
  );
};

export default Event;
