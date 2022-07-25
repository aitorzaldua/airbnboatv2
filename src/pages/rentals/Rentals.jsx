import React, { useState} from "react";
import "./rentals.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/logoAnB.png";
import { ConnectButton, Button, Icon } from "web3uikit";
import { GiFishingBoat } from "react-icons/gi";
import RentalsMap from "../../components/navBar/rentalsMap/RentalsMap";

const Rentals = () => {
  const { state: searchFilters } = useLocation();
  const [highlight, setHighlight] = useState()
;
  const rentalsList = [
    {
      attributes: {
        city: "New York",
        unoDescription: "3 Guests • 2 Beds • 2 Rooms",
        dosDescription: "Wifi • Kitchen • Living Area",
        imgUrl:
          "https://ipfs.moralis.io:2053/ipfs/QmS3gdXVcjM72JSGH82ZEvu4D7nS6sYhbi5YyCw8u8z4pE/media/3",
        lat: "40.716862",
        long: "-73.999005",
        name: "Apartment in China Town",
        pricePerDay: "3",
      },
    },
  ];

  let cords = [];
  rentalsList.forEach((e) => {
    cords.push({ lat: e.attributes.lat, lng: e.attributes.long})
  });

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
          <RentalsMap  locations={cords} setHighlight={setHighlight}/>
        </div>
      </div>
    </>
  );
};

export default Rentals;
