import React, { useState, useEffect } from "react";
import "./rentals.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/logoAnB.png";
import { ConnectButton, Button, Icon } from "web3uikit";
import { GiFishingBoat } from "react-icons/gi";
import RentalsMap from "../../components/navBar/rentalsMap/RentalsMap";
import {useMoralis, useWeb3ExecuteFunction } from "react-moralis";


const Rentals = () => {
  const { state: searchFilters } = useLocation();
  const [highlight, setHighlight] = useState()
  const [rentalsList, setRentalsList] = useState();
  const [coOrdenates, setCoOrdenates] = useState();

  const {Moralis} = useMoralis();

  console.log("destination=> ", searchFilters.destination);
  console.log("guests=> ", searchFilters.guests);

  useEffect (() => {
    async function fetchRentalsList() {
      const Rentals = Moralis.Object.extend("AirbnboatRentalCreated");
      const query = new Moralis.Query(Rentals);

      query.equalTo("name", searchFilters.destination);
      query.greaterThanOrEqualTo("maxGuests", searchFilters.guests);

      const result = await query.find();

      let cords = [];
      result.forEach((e) => {
      cords.push({ lat: e.attributes.lat, lng: e.attributes.long})
    });

    console.log("coordenates=>", cords);
    console.log("result=>", result);

      setCoOrdenates(cords);
      setRentalsList(result);
    }

    fetchRentalsList();

  },[searchFilters]);

  console.log("rentalsList => ", rentalsList);



  return (
    <>
      <div className="container rentals">
        <Link to="/">
          <img src={logo} alt="" className="navBar__logo" />
        </Link>

        <div className="rentals__tabContent">
          <div className="rentals__tabContent-searchFields">
            <div className="inputs__destination">
              {searchFilters.destination}
            </div>
            <div className="vlRentals" />
            <div className="inputs__date">
              {`
            ${searchFilters.checkIn.toLocaleString("default", {
              month: "short",
            })}
            ${searchFilters.checkIn.toLocaleString("default", {
              day: "2-digit",
            })}
            `}
              -
              {`
            ${searchFilters.checkOut.toLocaleString("default", {
              month: "short",
            })}
            ${searchFilters.checkOut.toLocaleString("default", {
              day: "2-digit",
            })}
            `}
            </div>
            <div className="vlRentals" />
            <div className="inputs">{searchFilters.guests} guests</div>
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

      <hr className="line" />
      <div className="rentalsContent">
        <div className="rentalsContentL">
          Stays Available for your destination
          {rentalsList &&
            rentalsList.map((e, i) => {
              return (
                <>
                  <hr className="line2" />
                  <div className={highlight === i? "rentalDivH" : "rentalDiv"}>
                    <img
                      className="rentalImg"
                      src={e.attributes.imgUrl}
                      alt=""
                    />
                    <div className="rentalInfo">
                      <div className="rentalTitle">{e.attributes.name}</div>
                      <div className="rentalDesc">{e.attributes.unoDescription}</div>
                      <div className="rentalDesc">{e.attributes.dosDescription}</div>
                      <div className="bottomButton">
                        <Button text="Stay Here" />
                        <div className="price">
                          <Icon fill="#808080" size={10} svg="matic" /> {e.attributes.pricePerDay} / Day
                        </div>
                      </div>

                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <hr className="line2" />
        <div className="rentalsContentR">
          <RentalsMap  locations={coOrdenates} setHighlight={setHighlight}/>
        </div>
      </div>
    </>
  );
};

export default Rentals;
