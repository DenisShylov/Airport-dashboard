import React, { useState, useCallback } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getFilteredData } from '../../Redux/FlightActions';
import { FlightsListSelector } from '../../Redux/FlightSelectors';
import './Search.scss';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(
    searchParams.get('search') || ''
  );

  const flightsList = useSelector(FlightsListSelector);
  const handleInputValue = useCallback((e) => setInputValue(e.target.value));
  const onSearch = useCallback(() => {
    const filteredFlight = flightsList.body.departure.filter(
      (flight) => inputValue === flight.codeShareData[0].codeShare
    );
    setSearchParams({ search: inputValue });
    dispatch(getFilteredData(filteredFlight));
  }, [inputValue]);

  return (
    <div className="search-container">
      <div className="search-line">
        <p>ПОШУК РЕЙСУ</p>
        <div className="search-line__block">
          <BsSearch />
          <input
            className="search-line__input"
            type="text"
            placeholder="Номер рейсу"
            value={inputValue}
            onChange={handleInputValue}
          />
          <button
            type="button"
            className="search-line__button"
            onClick={onSearch}
          >
            ЗНАЙТИ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
