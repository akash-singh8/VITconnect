import logog from "../assets/login.png";
import "../styles/userprofile.css";

function UserProfile() {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");

  return (
    <>
      <div className="maing">
        <div className="profilebox">
          <div>
            <img src={logog} alt="" />
          </div>
          <div className="profile-info">
            <h2>Username</h2>
            <p>Registration Number: 123456</p>
            <p>Email: user@example.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
