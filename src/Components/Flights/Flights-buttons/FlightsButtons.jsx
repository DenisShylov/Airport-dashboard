import React from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import './FlightsButtons.scss';

const FlightsButtons = () => {
  const [searchParams] = useSearchParams();
  return (
    <div className="flights-container">
      <div className="flights__buttons">
        <NavLink
          to={`/departures?date=10-11-2021&search=${searchParams.get('search')}`}
          className="btn buttons-departures">
          {'виліт'.toUpperCase()}
        </NavLink>
        <NavLink
          to={`/arrivals?date=10-11-2021&search=${searchParams.get('search')}`}
          className="btn buttons-arrivals">
          {'приліт'.toUpperCase()}
        </NavLink>
      </div>
    </div>
  );
};

export default FlightsButtons;
