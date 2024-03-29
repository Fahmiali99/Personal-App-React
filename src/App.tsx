import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";

import Footer from "./components/common/Footer";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Portfolio from "./components/pages/portfolio";
import Resume from "./components/pages/resume";

function App() {
  const [navbar, setNavbar] = useState(false);
  const [bright, setBright] = useState(false);

  function toggleMenu() {
    setNavbar(!navbar);
  }

  function buttonBright() {
    const newBright: boolean = !bright;
    setBright(newBright);
    localStorage.setItem("bright", JSON.stringify(newBright));
  }

  useEffect(() => {
    const savedMode = localStorage.getItem("bright");
    if (savedMode === "true") {
      setBright(true);
    }
  }, []);

  return (
    <div>
      <div className={`${bright ? "dark-mode " : "light-mode"}`}>
        <div className="h-auto sm:h-auto container mx-auto">
          <div className="lg:mx-64">
            <Navbar
              toggleMenu={toggleMenu}
              buttonBright={buttonBright}
              bright={bright}
              navbar={navbar}
            />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
