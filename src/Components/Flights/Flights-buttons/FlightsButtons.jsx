import React from 'react';
// import { NavLink } from 'react-router-dom';
import './FlightsButtons.scss';

const FlightsButtons = () => {
  return (
    <div className="flights-container">
      <div className="flights__buttons">
        <a href="/departures" className="btn buttons-departures">
          <button className="flights-btn" type="button">
            Вылет
          </button>
        </a>
        <a href="/arrivals" className="btn buttons-arrivals">
          <button className="flights-btn" type="button">
            Прилет
          </button>
        </a>
      </div>
    </div>
  );
};

export default FlightsButtons;
