import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Rentals from "./pages/rentals/Rentals";
import Home from "./pages/home/Home";
import Hosts from "./pages/hosts/Hosts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/hosts" element={<Hosts />} />
      </Routes>
    </div>
  );
}

export default App;
