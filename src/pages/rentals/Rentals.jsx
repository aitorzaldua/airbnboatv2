import React from 'react';
import './rentals.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Rentals = () => {

const {state: searchFilters} = useLocation();

  return (
    <>
    <Link to="/">Home</Link>
    {searchFilters &&
    <div onClick={() => console.log(searchFilters)}>
      Click to console
    </div>}
    </>
  )
}

export default Rentals;