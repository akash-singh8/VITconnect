import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
// import About from "./components/about";
// import Club from "./components/clubs";
// import Event from "./components/event";
// import Contact from "./components/contact";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/clubs" element={<Club />} />
          <Route path="/event" element={<Event />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
