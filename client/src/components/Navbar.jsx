import "../styles/main.css";
import vit from "../assets/VITBLOGO.png";

const header = () => {
  return (
    <>
      <div className="navbar">
        <h1 className="logoname">ClubConnect</h1>
        <ul>
          <li className="list">Home</li>
          <li className="list">About</li>
          <li className="list">Clubs</li>
          <li className="list">Event</li>
          <li className="list">Contact</li>
        </ul>
        <img src={vit} alt="" className="vitlogo" />
      </div>
    </>
  );
};

export default header;
