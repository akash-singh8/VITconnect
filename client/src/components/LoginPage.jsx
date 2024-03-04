import loginlogo from "../assets/login.png";
import googlelogo from "../assets/google.svg";
import "../styles/loginpage.css";

function LoginPage() {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement login logic here
    console.log("Logged in:");
  };

  return (
    <>
      <div className="maing">
        <div className="loginbox">
          <div className="loginboxch1">
            <h1>Login Now</h1>
            <p>Hi, Welcome back 👋</p>
            <button onClick={handleLogin}>
              <img src={googlelogo} width={"20px"} />
              Login with Google
            </button>
          </div>
          <div>
            <img src={loginlogo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
