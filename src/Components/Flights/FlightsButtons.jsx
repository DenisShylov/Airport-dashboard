import React from 'react';
// import { NavLink } from 'react-router-dom';
import './FlightsButtons.scss';

const FlightsButtons = () => {
  return (
    <div className="flights-container">
      <button className="flights-btn" type="button">
        {/* <NavLink to="/departures" /> */}
        Прилет
      </button>
      <button className="flights-btn" type="button">
        {/* <NavLink to="/arrivals" /> */}
        Вылет
      </button>
    </div>
  );
};

export default FlightsButtons;
