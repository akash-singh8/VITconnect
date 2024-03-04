import React, { useState, useEffect } from "react";
import img from "../assets/img.png";
import chat from "../assets/chat.png";
import Prompt from "./prompt";
import Event from "./Event";
import { Link } from "react-router-dom";
import "../styles/contact.css";
import "../styles/main.css";
import bg from "../assets/bg.png";
import hi from "../assets/hi.webp";
import hi1 from "../assets/hi1.webp";
import hi2 from "../assets/hi2.jpg";
import hi3 from "../assets/hi3.jpg";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  return (
    <>
      <div className="maing">
        <div className="home">
          {/* <img src={bg} alt="bg" className="bg" /> */}
          <div className="home__container">
            <h1 className="loremheading">
              <span className="istbh"> Discover, Connect, Engage:</span>
              Your Gateway to Campus Clubs!{" "}
            </h1>
            <p className="belowtag">
              Develop new skills, expand your horizons, and build meaningful
              connections. Find the perfect club to help you grow personally and
              professionally.
            </p>
            <div className="btnsgetgh">
              <button className="getstahrted">Get Started</button>
            </div>
          </div>
          <div className="bthgn">
            <button
              className={`circle ${showModal ? "pop" : ""}`}
              onClick={() => setShowModal(true)}
            >
              <img src={chat} alt="chat" className="chat" />
            </button>
          </div>
        </div>

        <div className="abouUs">
          <h1 className="about">About Us</h1>

          <div className="jsagb">
            <p className="ambhjj">
              Our college is home to a diverse array of clubs, ranging from
              technical to non-technical, that cater to a wide range of
              interests and passions. Whether you're interested in coding,
              robotics, and innovation or prefer arts, music, and culture,
              there's a club for you. Joining clubs in college is more than just
              a way to pass the time; it's an opportunity to expand your
              horizons, develop new skills, and make lifelong friendships. By
              joining clubs, you'll not only enhance your college experience but
              also gain valuable experience in teamwork, leadership, and project
              management. So, come explore the world of clubs at our college and
              unlock your full potential!
            </p>
            <img src={hi} alt="model image" className="maodelisj" />
          </div>
        </div>

        <div className="modelsk">
          <div className="jhhjh">
            <div className="modelgef">
              <h1 className="lormko">College Clubs</h1>
              <p className="bvhewj">
                From robotics to volunteering, debate to dance, there's a club
                for every passion. Discover your perfect fit and enhance your
                college experience.
              </p>
            </div>
            <div className="modelsnxn">
              <div className="modelhsk">
                <img src={hi} alt="model image" className="maodelisj" />
                <h3 className="modelname">Technical Club</h3>
                <p className="modeldescriphhtion">
                  Offers a fantastic way to immerse yourself in the practical
                  applications of your field, explore cutting-edge technologies,
                  and cultivate essential skills alongside like-minded peers.
                </p>
              </div>
              <div className="modelhsk">
                <img src={hi1} alt="model image" className="maodelisj" />
                <h3 className="modelname">Non Technical Club</h3>
                <p className="modeldescriphhtion">
                  Provide fantastic opportunities to explore interests outside
                  of your core academic field. These clubs let you develop soft
                  skills, pursue hobbies, engage in social activities, and
                  contribute to your college community.
                </p>
              </div>
              <div className="modelhsk">
                <img src={hi2} alt="model image" className="maodelisj" />
                <h3 className="modelname">Regional Club</h3>
                <p className="modeldescriphhtion">
                  offer a sense of belonging, connection and provide
                  opportunities to explore regional traditions, celebrate local
                  customs, and connect with those who hail from the same part of
                  the country or world.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Event />
        {/* <div className="loi">
          <div className="ipsun">
            <div className="loj" data-aos="fade-up">
              <h1 className="lormko">
                Our Capabilities Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Iure, possimus?
              </h1>
              <p className="bvhewj">
                Ideaverse's AI models are designed to help you achieve
              </p>
            </div>
            <div className="vudoe" data-aos="fade-up">
              <img src={hi4} alt="model image" className="gmaodelisj" />
            </div>
          </div>
        </div> */}
      </div>
      {showModal && <Prompt closeModal={closeModal} />}
    </>
  );
};

export default Home;
