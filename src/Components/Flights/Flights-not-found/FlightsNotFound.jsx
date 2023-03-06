import React from 'react';
import './FlightsNotFound.scss';

const FlightsNotFound = () => {
  return (
    <div className="flights-list__error">
      <div className="nothing-found">
        <span>Немає рейсів</span>
      </div>
    </div>
  );
};

export default FlightsNotFound;
