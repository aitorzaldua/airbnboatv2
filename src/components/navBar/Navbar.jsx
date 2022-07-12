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
      <div className='inputs'>Location
      <Select
      defaultOptionIndex={0}
      onChange={(data) => console.log(data.value)}
      options={[
        {id: 0,
          label:"South Florida",
          value:"fffff"
      },
      {id: 1,
          label:"North Florida"
      },
      {id: 2,
          label:"Long Island, New York"
      },
      {id: 3,
          label:"Porto Cala de Medici, Tuscany"
      },
      {id: 4,
          label:"Razo Beach, Galiza"
      },
      {id: 5,
          label:"Norwegian Fjords"
      },
      ]}
      />
          </div>
          <div className='vl' />
          <div className='inputs'>Check in
            
          </div>
          <div className='vl' />
          <div className='inputs'>Check out
            
          </div>
          <div className='vl' />
          <div className='inputs'>Guests
            
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
