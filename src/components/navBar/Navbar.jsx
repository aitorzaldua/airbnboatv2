import React from "react";
import "./navbar.css";
import { ConnectButton, Select } from "web3uikit";
import logo from "../../assets/logoAnB.png";

const Navbar = () => {
  return (
    <div className="container navBar">
      <img src={logo} alt="" className="navBar__logo" />

      <div className="navBar__tabContent">
        <div className="navBar__tabContent-searchFields">
          <div className="inputs">
            Location
            <div className="inputs__selector">
              <Select
                defaultOptionIndex={0}
                onChange={(data) => console.log(data.id)}
                options={[
                  { id: "0", label: "Miami - Miami Beach" },
                  { id: "1", label: "New York - Southampton, Suffolk County" },
                  { id: "2", label: "Australia - Turquoise Bay" },
                  { id: "3", label: "Tuscany - Porto Cala de Medici" },
                  { id: "4", label: "Galiza - Razo Beach" },
                  { id: "5", label: "Norwegian - Sognefjord, " },
                ]}
              />
            </div>
          </div>
          <div className="vl" />
          <div className="inputs">Check in</div>
          <div className="vl" />
          <div className="inputs">Check out</div>
          <div className="vl" />
          <div className="inputs">Guests</div>
        </div>
      </div>

      <div className="navBar__rigthSide">
        <div className="navBar__host">Become a Host</div>
        <ConnectButton />
      </div>
    </div>
  );
};

export default Navbar;
