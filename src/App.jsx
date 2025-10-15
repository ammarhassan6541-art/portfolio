import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import SplineScene from "./Robot";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Herosection />
              <About />
              <Skills />
              <Contact />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/robot" element={<SplineScene />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
