import React, { useState } from "react";
import "./navbar.css";
import { ConnectButton, Select, DatePicker, Input, Icon } from "web3uikit";
import logo from "../../assets/logoAnB.png";
import { Link } from "react-router-dom";
import { GiFishingBoat } from "react-icons/gi";

const Navbar = () => {
  const [destination, setDestination] = useState("Miami Beach in Florida, USA");
   const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
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
                  { id: "0", label: "Miami Beach in Florida, USA" },
                  { id: "1", label: "Paradise Island in Bahamas" },
                  { id: "2", label: "Airlie Beach in Australia" },
                  { id: "3", label: "Porto Cala de Medici in Tuscany, Italy" },
                  { id: "4", label: "Razo Surf Beach, Galiza" },
                  { id: "5", label: "Sognefjord in the Norwegian fjords"},
                ]}
              />
            </div>
          </div>
          <div className="vl" />
          <div className="inputs__date">
            Check in
            <DatePicker id="date-picker" onChange={(event) => setCheckIn(event.date)} />
          </div>
          <div className="vl" />
          <div className="inputs__date">
            Check out
            <DatePicker
              id="date-picker"
              onChange={(event) => setCheckOut(event.date)}
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
          <Link
            to={"/rentals"}
            state={{
              destination: destination,
              checkIn: checkIn,
              checkOut: checkOut,
              guests: guests,
            }}
          >
            <div className="searchButton">
              <Icon fill="#ffffff" size={24} svg="search" />
            </div>
          </Link>
        </div>
      </div>

      <div className="navBar__rigthSide">
        <Link to={"/hosts"} className="link">
          <div className="navBar__host">
            Become a Host
            <GiFishingBoat />
          </div>
        </Link>

        <ConnectButton />
      </div>
    </div>
  );
};

export default Navbar;
