import React from "react";
import "./App.css";
import bgHome from "./assets/bayboat2.jpeg";
import Navbar from "./components/navBar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="container backgroundHome" style={{ backgroundImage: `url(${bgHome})` }}>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
