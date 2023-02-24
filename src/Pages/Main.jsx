import React from 'react';
import FlightsButtons from '../Components/Flights/Flights-buttons/FlightsButtons';
import FlightsDates from '../Components/Flights/Flights-dates/FlightsDates';
// import FlightsNotFound from '../Components/Flights/Flights-not-found/FlightsNotFound';
import FlightsTable from '../Components/Flights/Flights-table/FlightsTable';
import Header from '../Components/Header/Header';
import Search from '../Components/Search/Search';

const Main = () => {
  return (
    <>
      <Header />
      <Search />
      <FlightsButtons />
      <FlightsDates />
      <section className="table">
        <FlightsTable />
      </section>

      {/* <FlightsNotFound /> */}
    </>
  );
};

export default Main;
