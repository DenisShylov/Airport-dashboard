import React, { useState, useCallback } from 'react';
import { BsSearch } from 'react-icons/bs';
import './Search.scss';

const Search = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = useCallback((e) => setInputValue(e.target.value));
  return (
    <div className="search-container">
      <div className="search-line">
        <p>ПОШУК РЕЙСУ</p>
        <div className="search-line__block">
          <BsSearch />
          <input
            className="search-line__input"
            type="text"
            placeholder="Номер рейсу або місто"
            value={inputValue}
            onChange={handleInputValue}
          />
          <button type="button" className="search-line__button">
            ЗНАЙТИ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
