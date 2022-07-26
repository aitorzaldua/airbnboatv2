// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import "hardhat/console.sol";

contract AirbnBoat {
    address public owner;
    uint private counter;

    constructor() {
        owner = msg.sender;
        counter = 0;
    }

    struct rentalInfo {
        uint id;
        string name;
        string city;
        string lat;
        string long;
        string unoDescription;
        string dosDescription;
        string imgUrl;
        uint8 maxGuests;
        uint8 pricePerDay;
        string[] datesBooked;
        address renter;
    }

    //In case we need...
    //rentalInfo[] private rentals;

    event rentalCreated(
        uint id,
        string name,
        string city,
        string lat,
        string long,
        string unoDescription,
        string dosDescription,
        string imgUrl,
        uint8 maxGuests,
        uint8 pricePerDay,
        string[] datesBooked,
        address renter
    );

    event newDatesBooke(
        string[] datesBooked,
        uint id,
        address booker,
        string city,
        string imgUrl
    );

    mapping(uint => rentalInfo) rentals;
    uint[] public rentalIds;

    function addRentals(
        string memory _name,
        string memory _city,
        string memory _lat,
        string memory _long,
        string memory _unoDescription,
        string memory _dosDescription,
        string memory _imgUrl,
        uint8 _maxGuests,
        uint8 _pricePerDay,
        string[] memory _datesBooked
    ) public {
        require(
            msg.sender == owner,
            "Only the owner of the smart contract can put up rentals"
        );

        rentalInfo storage newRental = rentals[counter];
        newRental.name = _name;
        newRental.city = _city;
        newRental.lat = _lat;
        newRental.long = _long;
        newRental.unoDescription = _unoDescription;
        newRental.dosDescription = _dosDescription;
        newRental.imgUrl = _imgUrl;
        newRental.maxGuests = _maxGuests;
        newRental.pricePerDay = _pricePerDay;
        newRental.datesBooked = _datesBooked;
        newRental.id = counter;
        newRental.renter = owner;

        rentalIds.push(counter);

        emit rentalCreated(
            counter,
            _name,
            _city,
            _lat,
            _long,
            _unoDescription,
            _dosDescription,
            _imgUrl,
            _maxGuests,
            _pricePerDay,
            _datesBooked,
            owner
        );

        counter++;
    }
}
