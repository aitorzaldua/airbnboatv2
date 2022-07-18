import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Rentals from "./pages/rentals/Rentals";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rentals" element={<Rentals />} />
      </Routes>
    </div>
  );
}

export default App;
