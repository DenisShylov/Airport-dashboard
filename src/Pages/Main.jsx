import React from 'react';
import FlightsButtons from '../Components/Flights/FlightsButtons';
// import Calendar from '../Components/Calendar/Calendar';
import Header from '../Components/Header/Header';
import Search from '../Components/Search/Search';

const Main = () => {
  return (
    <>
      <Header />
      <Search />
      <FlightsButtons />
      {/* <Calendar /> */}
    </>
  );
};

export default Main;
