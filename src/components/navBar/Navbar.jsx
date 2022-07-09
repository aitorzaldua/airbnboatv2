import React from "react";
import "./navbar.css";
import { ConnectButton } from "web3uikit";
import logo from "../../assets/logoAnB.png";

const Navbar = () => {
  return (
    <div className="container navBar">
      <img src={logo} alt="" className="navBar__logo" />
      <div className="navBar__leftSide">
        <div className="navBar__host">Become a Host</div>
        <ConnectButton />
      </div>
    </div>
  );
};

export default Navbar;
