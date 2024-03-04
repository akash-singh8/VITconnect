import { Link } from "react-router-dom";
import "../styles/main.css";
import vit from "../assets/VITBLOGO.png";

const header = () => {
  return (
    <>
      <div className="navbar">
        <h1 className="logoname">VIT Connect</h1>
        <ul>
          <Link to={"/"}>
            <li className="list">Home</li>
          </Link>

          <a href={"/#aboutus"}>
            <li className="list">About</li>
          </a>

          <a href={"/#clubs"}>
            <li className="list">Clubs</li>
          </a>

          <a href={"/#events"}>
            <li className="list">Event</li>
          </a>

          <a href={"/#contact"}>
            <li className="list">Contact</li>
          </a>
        </ul>
        <img src={vit} alt="" className="vitlogo" />
      </div>
    </>
  );
};

export default header;
