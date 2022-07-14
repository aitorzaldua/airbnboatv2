import React from "react";
import "./navbar.css";
import { ConnectButton, Select, DatePicker, Input, Icon } from "web3uikit";
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
                  { id: "1", label: "Bahamas - Paradise Island" },
                  { id: "2", label: "Australia - Airlie Beach" },
                  { id: "3", label: "Tuscany - Porto Cala de Medici" },
                  { id: "4", label: "Galiza - Razo Beach" },
                  { id: "5", label: "Norwegian - Sognefjord, " },
                ]}
              />
            </div>
          </div>
          <div className="vl" />
          <div className="inputs__date">
            Check in
            <DatePicker id="CheckIn" onChange={(event) => console.log(event)} />
          </div>
          <div className="vl" />
          <div className="inputs__date">
            Check out
            <DatePicker
              id="CheckOut"
              onChange={(event) => console.log(event)}
            />
          </div>
          <div className="vl" />
          <div className="inputs">Guests
          <Input
          value={2}
          name="AddGuests"
          type="number"
          omChange={(event) => console.log(Number(event))}
          />
          </div>
          <div className='searchButton'>
              <Icon
                fill="#ffffff"
                size={24}
                svg="search"
              />
            </div>
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
