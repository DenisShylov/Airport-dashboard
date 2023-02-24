import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="header-container">
      <img
        className="header-container__logo"
        src={`${process.env.PUBLIC_URL}/logo.png`}
        alt="city-icon"
      />
    </div>
  );
};

export default Header;
