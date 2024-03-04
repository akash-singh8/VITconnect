import "aos/dist/aos.css";
import "../styles/contact.css";
import bg from "../assets/bg.png";
import hi from "../assets/hi.webp";
import hi1 from "../assets/hi1.webp";
import hi2 from "../assets/hi2.jpg";
import hi3 from "../assets/hi3.jpg";

const Home = () => {
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
              Embark on Your Journey: Click to Begin, Unleashing Possibilities
              with Ideaverse.
            </p>
            <div className="btnsgetgh">
              <button className="getstahrted">Get Started</button>
              <button className="jjgtth"> View pricing</button>
            </div>
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
              <h1 className="lormko">
                Our AI models are designed to help you achieve your goals
              </h1>
              <p className="bvhewj">
                Ideaverse's AI models are designed to help you achieve
              </p>
            </div>
            <div className="modelsnxn">
              <div className="modelhsk">
                <img src={hi} alt="model image" className="maodelisj" />
                <h3 className="modelname">Model Name lorem</h3>
                <p className="modeldescriphhtion">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="modelhsk">
                <img src={hi1} alt="model image" className="maodelisj" />
                <h3 className="modelname">Model Name lorem</h3>
                <p className="modeldescriphhtion">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="modelhsk">
                <img src={hi2} alt="model image" className="maodelisj" />
                <h3 className="modelname">Model Name lorem</h3>
                <p className="modeldescriphhtion">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="modelhsk">
                <img src={hi3} alt="model image" className="maodelisj" />
                <h3 className="modelname">Model Name lorem</h3>
                <p className="modeldescriphhtion">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
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
    </>
  );
};

export default Home;
