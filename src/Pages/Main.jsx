import React from 'react';
import { useSelector } from 'react-redux';
import FlightFiltered from '../Components/Flights/FlightFiltered/FlightFiltered';
import FlightsButtons from '../Components/Flights/Flights-buttons/FlightsButtons';
import FlightsDates from '../Components/Flights/Flights-dates/FlightsDates';
import FlightsTable from '../Components/Flights/Flights-table/FlightsTable';
import Header from '../Components/Header/Header';
import Search from '../Components/Search/Search';
import { getFilteredData } from '../Redux/FlightSelectors';

const Main = () => {
  const filteredData = useSelector(getFilteredData);
  return (
    <>
      <Header />
      <Search />
      <FlightsButtons />
      <FlightsDates />
      <section className="table">
        {filteredData.length > 0 ? <FlightFiltered /> : <FlightsTable />}
      </section>
    </>
  );
};

export default Main;
