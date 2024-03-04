import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Contact from "./components/Contact";
import Footer from "./components/footer"; // import About from "./components/about";
import LoginPage from "./components/LoginPage";
// import Club from "./components/clubs";
// import Event from "./components/event";
// import Contact from "./components/contact"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/clubs" element={<Club />} />
          <Route path="/event" element={<Event />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
