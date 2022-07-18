import React from "react";
import "./home.css";
import bgHome from "../../assets/bayboat2.jpeg";
import Navbar from "../../components/navBar/Navbar";

const Home = () => {
  return (
    <div className="container home">
      <div
        className="container backgroundHome"
        style={{ backgroundImage: `url(${bgHome})` }}
      >
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
