import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import TecClub from "./components/tecClub";
import RegClub from "./components/regClub";
import NonClub from "./components/nontecClub";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technical" element={<TecClub />} />

          <Route path="/regClub" element={<RegClub />} />

          <Route path="/nonClub" element={<NonClub />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
