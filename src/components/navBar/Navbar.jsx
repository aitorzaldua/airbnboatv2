import React, { useState } from "react";
import "./navbar.css";
import { ConnectButton, Select, DatePicker, Input, Icon } from "web3uikit";
import logo from "../../assets/logoAnB.png";
import { Link } from "react-router-dom";
import { GiFishingBoat } from "react-icons/gi";

const Navbar = () => {
  const [destination, setDestination] = useState("Miami");
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const [guests, setGuests] = useState(2);

  console.log(destination, checkIn, checkOut, guests);

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
                onChange={(data) => setDestination(data.label)}
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
            <DatePicker id="CheckIn" onChange={(event) => setCheckIn(event)} />
          </div>
          <div className="vl" />
          <div className="inputs__date">
            Check out
            <DatePicker
              id="CheckOut"
              onChange={(event) => setCheckOut(event)}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Guests
            <Input
              value={2}
              name="AddGuests"
              type="number"
              onChange={(event) => setGuests(Number(event.target.value))}
            />
          </div>
          <Link to={"/rentals"} state={{
            destination: destination,
            checkIn: checkIn,
            checkOut: checkOut,
            guests: guests
          }
          }>
            <div className="searchButton">
              <Icon fill="#ffffff" size={24} svg="search" />
            </div>
          </Link>
        </div>
      </div>

      <div className="navBar__rigthSide">
        <div className="navBar__host">Become a Host<GiFishingBoat /></div>
        <ConnectButton />
      </div>
    </div>
  );
};

export default Navbar;
