import "../styles/main.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <h1 className="logoname">ClubConnect</h1>
        <ul>
          <li className="list">Home</li>
          <li className="list">About</li>
          <li className="list">Clubs</li>
          <li className="list">Event</li>
          <li className="list">Contact</li>
        </ul>
        <p className="copyright">&copy;2023 ClubConnect</p>
      </div>
    </>
  );
};

export default Footer;
